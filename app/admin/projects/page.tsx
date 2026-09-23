"use client";

import { useEffect, useState, useRef } from "react";
import { getDriveImageUrl } from "@/lib/drive";

interface Project {
  id: string;
  name: string;
  name_en: string;
  description: string;
  description_en: string;
  technologies: string[];
  demo: string;
  github: string;
  image_url: string;
  sort_order: number;
}

const empty: Omit<Project, "id"> = {
  name: "", name_en: "", description: "", description_en: "", technologies: [], demo: "#", github: "", image_url: "", sort_order: 0,
};

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [editing, setEditing] = useState<Project | null>(null);
  const [form, setForm] = useState(empty);
  const [techInput, setTechInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch("/api/admin/projects").then((r) => r.json()).then((data) => {
      setProjects(data ?? []);
      setLoading(false);
    });
  }, []);

  function startNew() {
    setEditing({ ...empty, id: "" } as unknown as Project);
    setForm({ ...empty });
    setTechInput("");
  }

  function startEdit(p: Project) {
    setEditing(p);
    setForm({ ...p });
    setTechInput("");
  }

  async function handleSave() {
    setSaving(true);
    const isEdit = editing?.id;
    const url = isEdit ? `/api/admin/projects/${editing.id}` : "/api/admin/projects";
    const method = isEdit ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      const saved = await res.json();
      setProjects(isEdit ? projects.map((p) => (p.id === saved.id ? saved : p)) : [...projects, saved]);
      setEditing(null);
    }
    setSaving(false);
  }

  async function handleDelete(id: string) {
    if (!confirm("¿Eliminar este proyecto?")) return;
    const res = await fetch(`/api/admin/projects/${id}`, { method: "DELETE" });
    if (res.ok) setProjects(projects.filter((p) => p.id !== id));
  }

  function addTech() {
    if (techInput.trim() && !form.technologies.includes(techInput.trim())) {
      setForm({ ...form, technologies: [...form.technologies, techInput.trim()] });
      setTechInput("");
    }
  }

  function removeTech(tech: string) {
    setForm({ ...form, technologies: form.technologies.filter((t) => t !== tech) });
  }

  function compressImage(file: File, maxWidth = 1200, quality = 0.8): Promise<File> {
    return new Promise((resolve) => {
      const img = new Image();
      const url = URL.createObjectURL(file);
      img.onload = () => {
        URL.revokeObjectURL(url);
        let w = img.width;
        let h = img.height;
        if (w > maxWidth) { h = (h * maxWidth) / w; w = maxWidth; }
        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d")!;
        ctx.drawImage(img, 0, 0, w, h);
        canvas.toBlob(
          (blob) => resolve(new File([blob!], file.name.replace(/\.[^.]+$/, ".jpg"), { type: "image/jpeg" })),
          "image/jpeg",
          quality
        );
      };
      img.src = url;
    });
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const compressed = await compressImage(file);
      const formData = new FormData();
      formData.append("file", compressed);
      formData.append("folder", "projects");
      const res = await fetch("/api/admin/upload", { method: "POST", body: formData });
      const data = await res.json();
      if (res.ok && data.url) setForm({ ...form, image_url: data.url });
    } catch {}
    setUploading(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  if (loading) return <div className="flex justify-center py-20"><div className="w-6 h-6 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" /></div>;

  if (editing) {
    return (
      <div>
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-white">{editing.id ? "Editar" : "Nuevo"} Proyecto</h1>
          <button onClick={() => setEditing(null)} className="text-zinc-400 hover:text-white text-sm">Cancelar</button>
        </div>
        <div className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Nombre (ES)" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
            <Field label="Nombre (EN)" value={form.name_en} onChange={(v) => setForm({ ...form, name_en: v })} />
            <Field label="Demo URL" value={form.demo} onChange={(v) => setForm({ ...form, demo: v })} />
            <Field label="GitHub URL" value={form.github} onChange={(v) => setForm({ ...form, github: v })} />
            <div>
              <label className="block text-zinc-400 text-sm mb-1">Imagen del proyecto</label>
              <div className="flex gap-2">
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={uploading}
                  className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-sm text-zinc-300 hover:bg-zinc-700 hover:text-white transition-colors disabled:opacity-50 shrink-0"
                >
                  {uploading ? "Subiendo..." : "Subir imagen"}
                </button>
                {form.image_url && (
                  <img src={getDriveImageUrl(form.image_url) ?? form.image_url} alt="Preview" className="h-10 w-10 rounded object-cover border border-zinc-700" />
                )}
              </div>
                <input
                  type="text"
                  value={form.image_url}
                  onChange={(e) => setForm({ ...form, image_url: e.target.value })}
                  className="w-full mt-2 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                  placeholder="O pega una URL directamente (ej. Google Drive)"
                />
            </div>
            <Field label="Orden" value={String(form.sort_order)} onChange={(v) => setForm({ ...form, sort_order: Number(v) })} />
          </div>
          <TextArea label="Descripción (ES)" value={form.description} onChange={(v) => setForm({ ...form, description: v })} />
          <TextArea label="Descripción (EN)" value={form.description_en} onChange={(v) => setForm({ ...form, description_en: v })} />

          <div>
            <label className="block text-zinc-400 text-sm mb-1">Tecnologías</label>
            <div className="flex gap-2 mb-2">
              <input
                value={techInput}
                onChange={(e) => setTechInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addTech())}
                className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-emerald-500"
                placeholder="Escribe y presiona Enter"
              />
              <button onClick={addTech} className="bg-zinc-700 hover:bg-zinc-600 text-white px-4 py-2.5 rounded-lg text-sm">+</button>
            </div>
            <div className="flex flex-wrap gap-2">
              {form.technologies.map((t) => (
                <span key={t} className="inline-flex items-center gap-1 bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs px-2.5 py-1 rounded-full">
                  {t}
                  <button onClick={() => removeTech(t)} className="text-zinc-500 hover:text-red-400">×</button>
                </span>
              ))}
            </div>
          </div>

          <button onClick={handleSave} disabled={saving} className="bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors">
            {saving ? "Guardando..." : "Guardar"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Proyectos</h1>
          <p className="text-zinc-500 text-sm">{projects.length} proyectos</p>
        </div>
        <button onClick={startNew} className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          + Nuevo
        </button>
      </div>

      <div className="space-y-3">
        {projects.map((p) => (
          <div key={p.id} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-semibold truncate">{p.name}</h3>
              <div className="flex flex-wrap gap-1.5 mt-1.5">
                {p.technologies.map((t) => (
                  <span key={t} className="text-xs bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded">{t}</span>
                ))}
              </div>
            </div>
            <div className="flex gap-2 ml-4 shrink-0">
              <button onClick={() => startEdit(p)} className="text-zinc-400 hover:text-emerald-400 text-sm px-3 py-1.5 rounded-lg hover:bg-zinc-800 transition-colors">Editar</button>
              <button onClick={() => handleDelete(p.id)} className="text-zinc-400 hover:text-red-400 text-sm px-3 py-1.5 rounded-lg hover:bg-zinc-800 transition-colors">Eliminar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Field({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="block text-zinc-400 text-sm mb-1">{label}</label>
      <input type="text" value={value} onChange={(e) => onChange(e.target.value)} className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors" />
    </div>
  );
}

function TextArea({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="block text-zinc-400 text-sm mb-1">{label}</label>
      <textarea value={value} onChange={(e) => onChange(e.target.value)} rows={3} className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors resize-y" />
    </div>
  );
}
