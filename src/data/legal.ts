import type { Locale } from '../i18n';

// Versión de cada documento. Se registra junto con cada aceptación del formulario:
// al cambiar el texto de un documento, actualiza su versión aquí.
export const LEGAL_VERSIONS = {
  terms: '2026-11-04',
  privacy: '2026-11-04',
  cookies: '2026-11-04',
} as const;

export const LEGAL_DOCS = ['terms', 'privacy', 'cookies'] as const;
export type LegalDoc = (typeof LEGAL_DOCS)[number];

export const LEGAL_SLUGS: Record<Locale, Record<LegalDoc, string>> = {
  es: {
    terms: 'terminos-y-condiciones',
    privacy: 'politica-de-privacidad',
    cookies: 'politica-de-cookies',
  },
  en: {
    terms: 'terms-and-conditions',
    privacy: 'privacy-policy',
    cookies: 'cookie-policy',
  },
};

export function legalPath(locale: Locale, doc: LegalDoc): string {
  return `/${locale}/${LEGAL_SLUGS[locale][doc]}/`;
}

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  items?: string[];
  // Texto que se muestra después de la lista
  closing?: string[];
}

export interface LegalContent {
  title: string;
  summary: string;
  sections: LegalSection[];
}

const OWNER_ES =
  'Jhon Sebastián Tajumbina Bolaños (en adelante, "el Responsable"), persona natural, domiciliado en Cali, Colombia, correo electrónico jhonse.tajumbina@gmail.com, titular del sitio https://jhon-tajumbina.vercel.app';
const OWNER_EN =
  'Jhon Sebastián Tajumbina Bolaños ("the Controller"), an individual domiciled in Cali, Colombia, email jhonse.tajumbina@gmail.com, owner of the website https://jhon-tajumbina.vercel.app';

export const legalContent: Record<Locale, Record<LegalDoc, LegalContent>> = {
  es: {
    terms: {
      title: 'Términos y Condiciones',
      summary: 'Reglas de uso de este sitio web y de su formulario de contacto.',
      sections: [
        {
          heading: '1. Quién es el titular',
          paragraphs: [
            `Este sitio es operado por ${OWNER_ES}. Al navegar o usar el formulario de contacto aceptas estos términos.`,
          ],
        },
        {
          heading: '2. Objeto del sitio',
          paragraphs: [
            'El sitio es un portafolio profesional de carácter informativo: presenta proyectos de software, formación, experiencia y servicios de marketing digital del titular.',
            'La información publicada no constituye una oferta contractual vinculante. Cualquier servicio (desarrollo de software, gestión de campañas de Meta Ads u otros) se acordará por separado, por escrito, con su alcance, precio y condiciones.',
          ],
        },
        {
          heading: '3. Uso permitido',
          items: [
            'Usar el sitio de buena fe y conforme a la ley colombiana.',
            'No intentar acceder sin autorización a sistemas, datos o cuentas, ni interferir con el funcionamiento del sitio (Ley 1273 de 2009).',
            'No enviar por el formulario spam, malware, contenido ilícito, difamatorio u ofensivo, ni datos personales de terceros sin su autorización.',
            'No enviar datos sensibles (salud, origen étnico, orientación sexual, convicciones políticas o religiosas, datos biométricos) ni datos de menores de edad.',
          ],
        },
        {
          heading: '4. Formulario de contacto',
          paragraphs: [
            'Para enviar un mensaje debes aceptar, en casillas separadas y sin marcar por defecto, estos Términos y Condiciones y la Política de Privacidad. Registramos la fecha, hora y versión de los documentos aceptados como prueba de tu consentimiento (ver Política de Privacidad).',
            'Enviar un mensaje no crea una relación contractual ni obliga al titular a responder en un plazo determinado.',
          ],
        },
        {
          heading: '5. Propiedad intelectual',
          paragraphs: [
            'El diseño, los textos y el código propio del sitio pertenecen a su titular y están protegidos por la Ley 23 de 1982, la Decisión Andina 351 de 1993 y demás normas de derecho de autor. No puedes reproducirlos, distribuirlos ni crear obras derivadas sin autorización escrita, salvo los usos permitidos por la ley.',
            'Las marcas, logotipos y certificados de terceros (por ejemplo Platzi, Google, Meta, GitHub, LinkedIn, Laravel, Flutter y similares) pertenecen a sus respectivos dueños. Se usan únicamente para identificar tecnologías, credenciales o enlaces, sin implicar patrocinio ni afiliación.',
            'Las capturas de proyectos se muestran con fines de portafolio; los datos personales que pudieran aparecer en ellas han sido ocultados. Si crees que algún contenido vulnera tus derechos, escribe a jhonse.tajumbina@gmail.com y se revisará y retirará si corresponde.',
          ],
        },
        {
          heading: '6. Enlaces a terceros',
          paragraphs: [
            'El sitio enlaza a servicios externos (GitHub, LinkedIn, Instagram, Facebook, Google Drive, Platzi). Esos sitios tienen sus propios términos y políticas, sobre los cuales el titular no tiene control ni responsabilidad.',
          ],
        },
        {
          heading: '7. Exclusión de garantías y responsabilidad',
          paragraphs: [
            'El sitio se ofrece "tal cual". Se procura que la información sea exacta y esté actualizada, pero no se garantiza disponibilidad continua ni ausencia de errores. En la medida permitida por la ley, el titular no responde por daños indirectos derivados del uso del sitio. Nada de lo aquí dispuesto limita derechos irrenunciables de los consumidores ni responsabilidades que la ley no permita excluir.',
          ],
        },
        {
          heading: '8. Modificaciones',
          paragraphs: [
            'Estos términos pueden actualizarse. La versión vigente es la publicada en esta página, con su fecha de versión. Los cambios sustanciales se aplican a partir de su publicación.',
          ],
        },
        {
          heading: '9. Ley aplicable y jurisdicción',
          paragraphs: [
            'Estos términos se rigen por las leyes de la República de Colombia. Los mensajes de datos tienen plena validez probatoria conforme a la Ley 527 de 1999. Cualquier controversia se someterá a los jueces competentes de Colombia, sin perjuicio del derecho del consumidor de acudir a la Superintendencia de Industria y Comercio (Ley 1480 de 2011).',
          ],
        },
        {
          heading: '10. Contacto',
          paragraphs: ['jhonse.tajumbina@gmail.com'],
        },
      ],
    },
    privacy: {
      title: 'Política de Privacidad y Tratamiento de Datos Personales',
      summary:
        'Qué datos recojo, para qué, cuánto tiempo los conservo y cómo ejercer tus derechos (Ley 1581 de 2012).',
      sections: [
        {
          heading: '1. Responsable del tratamiento',
          paragraphs: [
            `${OWNER_ES}. Esta política se adopta en cumplimiento de la Ley 1581 de 2012, el Decreto 1377 de 2013 (compilado en el Decreto 1074 de 2015) y demás normas de protección de datos personales de Colombia.`,
            'Canal para consultas y reclamos: jhonse.tajumbina@gmail.com.',
          ],
        },
        {
          heading: '2. Datos que recojo (solo los necesarios)',
          paragraphs: ['A través del formulario de contacto se solicitan únicamente:'],
          items: [
            'Nombre: para dirigirme a ti.',
            'Correo electrónico: para responderte.',
            'Mensaje: el contenido de tu consulta.',
            'Registro de aceptación (ver sección 5): fecha y hora, versión de los documentos aceptados, idioma, página de origen y tipo de navegador.',
          ],
        },
        {
          heading: '3. Finalidades',
          items: [
            'Responder tu consulta o propuesta sobre desarrollo de software o marketing digital.',
            'Mantener un registro de la conversación y, si llega a existir, de la relación comercial.',
            'Conservar prueba de que aceptaste los Términos y la Política de Privacidad.',
            'Cumplir obligaciones legales y atender requerimientos de autoridades.',
          ],
          closing: [
            'No uso tus datos para publicidad, perfilamiento, venta ni cesión a terceros, y no te enviaré comunicaciones comerciales sin tu autorización previa y expresa.',
          ],
        },
        {
          heading: '4. Autorización',
          paragraphs: [
            'El tratamiento se basa en tu autorización previa, expresa e informada, que otorgas marcando la casilla correspondiente antes de enviar el formulario. Puedes revocarla en cualquier momento escribiendo al correo indicado, salvo que exista un deber legal o contractual de conservar los datos.',
            'No solicito datos sensibles ni datos de niños, niñas o adolescentes. El sitio no está dirigido a menores de 18 años. Si incluyes datos sensibles en tu mensaje, no estás obligado a hacerlo y puedes pedir su supresión.',
          ],
        },
        {
          heading: '5. Registro de la autorización',
          paragraphs: [
            'Al enviar el formulario se guarda, junto con tu mensaje, un registro que prueba cuándo y cómo aceptaste (Decreto 1377 de 2013 – prueba de la autorización):',
          ],
          items: [
            'Que marcaste, de forma separada, la casilla de Términos y Condiciones y la de Política de Privacidad.',
            'Fecha y hora exactas de la aceptación (UTC y hora local de tu dispositivo).',
            'Versión de cada documento aceptado.',
            'Idioma del sitio, dirección de la página y tipo de navegador (user agent).',
            'Mecanismo: casilla no premarcada en el formulario de contacto.',
          ],
        },
        {
          heading: '6. Encargados, terceros y transferencia internacional',
          paragraphs: [
            'Para operar el sitio intervienen proveedores que tratan datos por cuenta del Responsable:',
          ],
          items: [
            'FormSubmit (formsubmit.co): recibe tu nombre, correo, mensaje y registro de aceptación y los reenvía por correo al Responsable.',
            'Gmail / Google: almacena el correo recibido en la bandeja del Responsable.',
            'Vercel Inc.: aloja el sitio y ofrece analítica agregada de visitas y rendimiento (sin cookies; ver Política de Cookies).',
          ],
        },
        {
          heading: '7. Transferencia internacional',
          paragraphs: [
            'Estos proveedores operan principalmente en Estados Unidos. Al aceptar esta política autorizas expresamente la transferencia y transmisión internacional de tus datos para las finalidades descritas (Ley 1581 de 2012, art. 26). Solo se comparten los datos estrictamente necesarios.',
          ],
        },
        {
          heading: '8. Conservación',
          paragraphs: [
            'Conservo tu mensaje y su registro de aceptación mientras sea necesario para atender tu solicitud y, como máximo, 2 años desde el último contacto, salvo que se establezca una relación comercial o exista un deber legal de conservarlos por más tiempo. Después se suprimen de forma segura.',
          ],
        },
        {
          heading: '9. Tus derechos como titular',
          items: [
            'Conocer, actualizar y rectificar tus datos.',
            'Solicitar prueba de la autorización otorgada.',
            'Ser informado sobre el uso que se ha dado a tus datos.',
            'Presentar quejas ante la Superintendencia de Industria y Comercio (SIC) por infracciones a la ley (www.sic.gov.co).',
            'Revocar la autorización y/o solicitar la supresión de tus datos, cuando no se respeten los principios y garantías legales.',
            'Acceder gratuitamente a tus datos personales.',
          ],
        },
        {
          heading: '10. Cómo ejercer tus derechos',
          paragraphs: [
            'Escribe a jhonse.tajumbina@gmail.com indicando tu nombre, el correo usado en el formulario y tu solicitud.',
            'Consultas: se responden en máximo 10 días hábiles (prorrogables 5 días hábiles más, informando los motivos). Reclamos de corrección, actualización o supresión: se resuelven en máximo 15 días hábiles (prorrogables 8 días hábiles más). Solo puedes elevar queja ante la SIC una vez agotado este trámite ante el Responsable.',
          ],
        },
        {
          heading: '11. Seguridad',
          paragraphs: [
            'El sitio usa HTTPS, cabeceras de seguridad y recoge solo los datos indispensables. Ningún sistema es infalible; si ocurre un incidente que afecte tus datos, se notificará a la SIC y a los titulares cuando la ley lo exija.',
          ],
        },
        {
          heading: '12. Registro Nacional de Bases de Datos',
          paragraphs: [
            'El Responsable es una persona natural con una base de datos mínima; si en el futuro llegara a estar obligado a inscribirla en el RNBD de la SIC, lo hará dentro de los plazos legales.',
          ],
        },
        {
          heading: '13. Cambios a esta política',
          paragraphs: [
            'Si cambian las finalidades o el tratamiento de manera sustancial, se publicará una nueva versión con su fecha y, cuando la ley lo exija, se solicitará nueva autorización.',
          ],
        },
      ],
    },
    cookies: {
      title: 'Política de Cookies',
      summary: 'Qué cookies y tecnologías similares usa (y no usa) este sitio.',
      sections: [
        {
          heading: '1. Qué son las cookies',
          paragraphs: [
            'Las cookies y el almacenamiento local son pequeños archivos o datos que un sitio guarda en tu dispositivo para recordar información o medir el uso.',
          ],
        },
        {
          heading: '2. Lo que usa este sitio',
          items: [
            'Cookies propias: ninguna.',
            'Almacenamiento local (localStorage/sessionStorage): ninguno.',
            'Cookies publicitarias, de seguimiento entre sitios o de perfilamiento: ninguna.',
            'Vercel Web Analytics y Speed Insights: miden visitas y rendimiento de forma agregada, sin cookies y sin identificarte personalmente. Pueden procesar la URL visitada, la referencia, el tipo de dispositivo/navegador/sistema operativo y el país.',
            'Tipografías: se sirven desde este mismo sitio, sin llamadas a Google Fonts desde tu navegador.',
          ],
        },
        {
          heading: '3. Contenido de terceros bajo tu acción',
          paragraphs: [
            'Si abres un certificado en el visor integrado, se carga Google Drive dentro de la página, y si sigues enlaces a GitHub, LinkedIn, Instagram, Facebook o Platzi, esos servicios pueden instalar sus propias cookies según sus políticas. Esto solo ocurre cuando tú inicias esa acción.',
          ],
        },
        {
          heading: '4. Por qué no hay banner de cookies',
          paragraphs: [
            'Como el sitio no instala cookies ni almacenamiento no esencial propios, no se requiere pedirte consentimiento para ellas. Si en el futuro se añaden herramientas que usen cookies no esenciales, se actualizará esta política y se pedirá tu autorización previa.',
          ],
        },
        {
          heading: '5. Cómo controlar las cookies',
          paragraphs: [
            'Puedes borrar o bloquear cookies desde la configuración de tu navegador (Chrome, Firefox, Safari, Edge). Bloquear las de terceros no afecta el uso de este sitio, aunque el visor de certificados de Google Drive podría no cargar.',
          ],
        },
        {
          heading: '6. Contacto',
          paragraphs: [
            'Dudas sobre esta política: jhonse.tajumbina@gmail.com. Para el tratamiento de datos personales consulta la Política de Privacidad.',
          ],
        },
      ],
    },
  },
  en: {
    terms: {
      title: 'Terms and Conditions',
      summary: 'Rules for using this website and its contact form.',
      sections: [
        {
          heading: '1. Who operates the site',
          paragraphs: [
            `This site is operated by ${OWNER_EN}. By browsing it or using the contact form you accept these terms.`,
          ],
        },
        {
          heading: '2. Purpose',
          paragraphs: [
            'The site is an informational professional portfolio showcasing software projects, education, experience and digital marketing services.',
            'Content on the site is not a binding contractual offer. Any service (software development, Meta Ads management, etc.) is agreed separately in writing, with its own scope, price and conditions.',
          ],
        },
        {
          heading: '3. Acceptable use',
          items: [
            'Use the site in good faith and in accordance with Colombian law.',
            'Do not attempt unauthorized access to systems, data or accounts, or interfere with the site (Law 1273 of 2009).',
            'Do not submit spam, malware, unlawful, defamatory or offensive content, or third parties’ personal data without their authorization, through the form.',
            'Do not submit sensitive data (health, ethnic origin, sexual orientation, political or religious beliefs, biometrics) or data about minors.',
          ],
        },
        {
          heading: '4. Contact form',
          paragraphs: [
            'To send a message you must accept, in separate unchecked-by-default boxes, these Terms and Conditions and the Privacy Policy. The date, time and version of the accepted documents are recorded as proof of your consent (see Privacy Policy).',
            'Sending a message does not create a contractual relationship nor oblige the owner to reply within a set time.',
          ],
        },
        {
          heading: '5. Intellectual property',
          paragraphs: [
            'The site’s design, texts and original code belong to its owner and are protected by Colombian Law 23 of 1982, Andean Decision 351 of 1993 and other copyright rules. You may not reproduce, distribute or create derivative works without written permission, except for uses allowed by law.',
            'Third-party trademarks, logos and certificates (e.g. Platzi, Google, Meta, GitHub, LinkedIn, Laravel, Flutter) belong to their respective owners and are used only to identify technologies, credentials or links, without implying sponsorship or affiliation.',
            'Project screenshots are shown for portfolio purposes; personal data that may appear in them has been obscured. If you believe any content infringes your rights, write to jhonse.tajumbina@gmail.com and it will be reviewed and removed if appropriate.',
          ],
        },
        {
          heading: '6. Third-party links',
          paragraphs: [
            'The site links to external services (GitHub, LinkedIn, Instagram, Facebook, Google Drive, Platzi). They have their own terms and policies, over which the owner has no control or responsibility.',
          ],
        },
        {
          heading: '7. Disclaimer and liability',
          paragraphs: [
            'The site is provided "as is". Reasonable efforts are made to keep it accurate and current, but continuous availability or absence of errors is not guaranteed. To the extent permitted by law, the owner is not liable for indirect damages arising from use of the site. Nothing here limits non-waivable consumer rights or liabilities that cannot be excluded by law.',
          ],
        },
        {
          heading: '8. Changes',
          paragraphs: [
            'These terms may be updated. The current version is the one published on this page, with its version date. Material changes apply from publication.',
          ],
        },
        {
          heading: '9. Governing law and jurisdiction',
          paragraphs: [
            'These terms are governed by the laws of the Republic of Colombia. Data messages have full evidentiary value under Law 527 of 1999. Disputes are submitted to the competent Colombian courts, without prejudice to consumers’ right to go to the Superintendence of Industry and Commerce (Law 1480 of 2011).',
          ],
        },
        {
          heading: '10. Contact',
          paragraphs: ['jhonse.tajumbina@gmail.com'],
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy and Personal Data Processing',
      summary:
        'What data I collect, why, how long I keep it and how to exercise your rights (Colombian Law 1581 of 2012).',
      sections: [
        {
          heading: '1. Data controller',
          paragraphs: [
            `${OWNER_EN}. This policy is adopted under Colombian Law 1581 of 2012, Decree 1377 of 2013 (compiled in Decree 1074 of 2015) and other Colombian data protection rules.`,
            'Channel for queries and complaints: jhonse.tajumbina@gmail.com.',
          ],
        },
        {
          heading: '2. Data I collect (only what is necessary)',
          paragraphs: ['The contact form requests only:'],
          items: [
            'Name: to address you.',
            'Email: to reply to you.',
            'Message: the content of your inquiry.',
            'Consent record (see section 5): date and time, versions of accepted documents, language, source page and browser type.',
          ],
        },
        {
          heading: '3. Purposes',
          items: [
            'Reply to your inquiry or proposal about software development or digital marketing.',
            'Keep a record of the conversation and, if one arises, of the business relationship.',
            'Keep proof that you accepted the Terms and the Privacy Policy.',
            'Comply with legal obligations and requests from authorities.',
          ],
          closing: [
            'I do not use your data for advertising, profiling, sale or disclosure to third parties, and I will not send you commercial communications without your prior, express authorization.',
          ],
        },
        {
          heading: '4. Authorization',
          paragraphs: [
            'Processing is based on your prior, express and informed authorization, given by ticking the corresponding box before submitting the form. You may revoke it at any time by emailing the address above, unless there is a legal or contractual duty to retain the data.',
            'I do not request sensitive data or data about children or adolescents. The site is not aimed at people under 18. If you include sensitive data in your message you are not required to, and you may request its deletion.',
          ],
        },
        {
          heading: '5. Consent record',
          paragraphs: [
            'When you submit the form, a record proving when and how you accepted is stored with your message (Decree 1377 of 2013 – proof of authorization):',
          ],
          items: [
            'That you separately ticked the Terms and Conditions box and the Privacy Policy box.',
            'Exact date and time of acceptance (UTC and your device’s local time).',
            'Version of each accepted document.',
            'Site language, page address and browser type (user agent).',
            'Mechanism: unchecked-by-default checkbox on the contact form.',
          ],
        },
        {
          heading: '6. Processors and third parties',
          paragraphs: [
            'These providers process data on behalf of the Controller to operate the site:',
          ],
          items: [
            'FormSubmit (formsubmit.co): receives your name, email, message and consent record and forwards them by email to the Controller.',
            'Gmail / Google: stores the received email in the Controller’s inbox.',
            'Vercel Inc.: hosts the site and provides aggregated visit and performance analytics (cookie-free; see Cookie Policy).',
          ],
        },
        {
          heading: '7. International transfer',
          paragraphs: [
            'These providers operate mainly in the United States. By accepting this policy you expressly authorize the international transfer and transmission of your data for the purposes described (Law 1581 of 2012, art. 26). Only strictly necessary data is shared.',
          ],
        },
        {
          heading: '8. Retention',
          paragraphs: [
            'I keep your message and its consent record as long as needed to handle your request and, at most, 2 years from the last contact, unless a business relationship is established or the law requires longer retention. They are then securely deleted.',
          ],
        },
        {
          heading: '9. Your rights as data subject',
          items: [
            'Know, update and rectify your data.',
            'Request proof of the authorization you gave.',
            'Be informed about how your data has been used.',
            'File complaints with the Superintendence of Industry and Commerce (SIC) for legal violations (www.sic.gov.co).',
            'Revoke the authorization and/or request deletion of your data when legal principles and guarantees are not respected.',
            'Access your personal data free of charge.',
          ],
        },
        {
          heading: '10. How to exercise your rights',
          paragraphs: [
            'Email jhonse.tajumbina@gmail.com with your name, the email used on the form and your request.',
            'Queries are answered within 10 business days (extendable by 5 more, with reasons). Claims for correction, update or deletion are resolved within 15 business days (extendable by 8 more). You may complain to the SIC only after going through this procedure with the Controller.',
          ],
        },
        {
          heading: '11. Security',
          paragraphs: [
            'The site uses HTTPS and security headers and collects only essential data. No system is infallible; if an incident affects your data, the SIC and data subjects will be notified where the law requires.',
          ],
        },
        {
          heading: '12. National Database Registry',
          paragraphs: [
            'The Controller is an individual with a minimal database; if the Controller becomes obliged to register it in the SIC’s RNBD, it will be done within the legal deadlines.',
          ],
        },
        {
          heading: '13. Changes to this policy',
          paragraphs: [
            'If purposes or processing change materially, a new dated version will be published and, where required by law, new authorization will be requested.',
          ],
        },
      ],
    },
    cookies: {
      title: 'Cookie Policy',
      summary: 'Which cookies and similar technologies this site uses (and does not use).',
      sections: [
        {
          heading: '1. What cookies are',
          paragraphs: [
            'Cookies and local storage are small files or data a site stores on your device to remember information or measure usage.',
          ],
        },
        {
          heading: '2. What this site uses',
          items: [
            'First-party cookies: none.',
            'Local storage (localStorage/sessionStorage): none.',
            'Advertising, cross-site tracking or profiling cookies: none.',
            'Vercel Web Analytics and Speed Insights: measure visits and performance in aggregate, without cookies and without personally identifying you. They may process the visited URL, referrer, device/browser/OS type and country.',
            'Fonts: served from this same site, with no Google Fonts calls from your browser.',
          ],
        },
        {
          heading: '3. Third-party content triggered by you',
          paragraphs: [
            'If you open a certificate in the embedded viewer, Google Drive loads inside the page, and if you follow links to GitHub, LinkedIn, Instagram, Facebook or Platzi, those services may set their own cookies under their policies. This only happens when you initiate that action.',
          ],
        },
        {
          heading: '4. Why there is no cookie banner',
          paragraphs: [
            'Since the site sets no non-essential first-party cookies or storage, no cookie consent is needed. If tools using non-essential cookies are added later, this policy will be updated and your prior consent requested.',
          ],
        },
        {
          heading: '5. Controlling cookies',
          paragraphs: [
            'You can delete or block cookies in your browser settings (Chrome, Firefox, Safari, Edge). Blocking third-party cookies does not affect this site, though the Google Drive certificate viewer may fail to load.',
          ],
        },
        {
          heading: '6. Contact',
          paragraphs: [
            'Questions about this policy: jhonse.tajumbina@gmail.com. For personal data processing see the Privacy Policy.',
          ],
        },
      ],
    },
  },
};
