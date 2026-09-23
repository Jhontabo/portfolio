import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { getSupabaseAdmin } from "@/lib/supabase";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json({ error: "Username and password required" }, { status: 400 });
    }

    const { data: user, error } = await getSupabaseAdmin()
      .from("admin_users")
      .select("*")
      .eq("username", username)
      .single();

    if (error || !user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const valid = await bcrypt.compare(password, user.password_hash);
    if (!valid) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const token = jwt.sign({ userId: user.id, username: user.username }, JWT_SECRET, { expiresIn: "7d" });

    const response = NextResponse.json({ success: true });
    response.cookies.set("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });

    return response;
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
