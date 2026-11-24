import { useEffect, useState } from 'react';
import logoUrl from "container:///mnt/data/src/assets/35aa86d26b0ad658-photo1627512010394509668.jpeg";
import imgKappingPoligel from "container:///mnt/data/src/assets/b5c001676f4e8c4c-image_20261116_104940.webp";
import imgKappingRubber from "container:///mnt/data/src/assets/efd91ffd27a81fb6-image_20261116_104939_1.webp";
import imgKappingGel from "container:///mnt/data/src/assets/7d1e6ec3257561a2-image_20261116_104939_3.webp";
import imgPedreria from "container:///mnt/data/src/assets/06c883439b666de1-image_20261116_104940_1.webp";
import imgEsculpidas from "container:///mnt/data/src/assets/324ecd3f9c4fe85a-image_20261116_104939_2.webp";
import imgSemi from "container:///mnt/data/src/assets/7076520a93b35029-image_20261116_104947.webp";
import imgSoftDiseno from "container:///mnt/data/src/assets/3b4bbbe445585be2-image_20261116_104939_5.webp";
import imgSoftLiso from "container:///mnt/data/src/assets/c0a85f7db79e451e-image_20261116_104938.webp";
import imgBabyBoomer from "container:///mnt/data/src/assets/5411774646482369-image_20261116_104939.webp";
import imgPediBasica from "container:///mnt/data/src/assets/d0c1feca524728e3-image_20261116_104941.webp";
import imgPediPremium from "container:///mnt/data/src/assets/5aea09ffd7079cbb-image_20261116_104940_2.webp";
import imgSpaPies from "container:///mnt/data/src/assets/786a5291c43defac-image_20261116_104939_4.webp";
import imgMasajeRelajante from "container:///mnt/data/src/assets/9a7c942ee0898be7-image_20261116_104948.webp";
import imgMasajeDescontract from "container:///mnt/data/src/assets/9fe781a4a0375df6-image_20261116_104941_1.webp";
import imgMasajePiernas from "container:///mnt/data/src/assets/85dc6f72340bfc4e-image_20261116_104947_1.webp";
import imgMasajeCraneo from "container:///mnt/data/src/assets/bfaab96321b3b512-image_20261116_104941_2.webp";
import imgLifting from "container:///mnt/data/src/assets/8ae277914ed248a5-image_20261116_105004_1.webp";
import imgLaminado from "container:///mnt/data/src/assets/5cc0762dc5d3a453-image_20261116_105003.webp";
import imgHenna from "container:///mnt/data/src/assets/4f054ca7878ea40a-image_20261116_105010.webp";
import imgLiftingLaminado from "container:///mnt/data/src/assets/66e34b4812cf0610-image_20261116_105004.webp";
import imgLaserAxilas from "container:///mnt/data/src/assets/9c8d9a1b73972a68-image_20261116_105005.webp";
import imgLaserPiernas from "container:///mnt/data/src/assets/f727614e4282e16d-image_20261116_105006.webp";
import imgLaserBikini from "container:///mnt/data/src/assets/cddd6e01e5d9b278-image_20261116_105007.webp";
import imgLaserFacial from "container:///mnt/data/src/assets/e804812658283e26-image_20261116_105010_1.webp";

type Reserva = {
  nombre: string;
  telefono: string;
  servicio: string;
  fecha: string;
  mensaje?: string;
};

const WHATSAPP = "https://wa.me/543718616895";
const BLACK = "#111111";

type CatalogoItem = {
  categoria: string;
  nombre: string;
  precio: string;
  desde?: boolean;
  imagen: string;
  alt: string;
  desc: string;
};

const categorias = [
  { id: "TODOS", label: "Todos" },
  { id: "Manicura", label: "Manicura" },
  { id: "Pedicura", label: "Pedicura" },
  { id: "Masajes", label: "Masajes" },
  { id: "Cejas y Pestañas", label: "Cejas y Pestañas" },
  { id: "Depilación Láser", label: "Depilación Láser" },
];

const catalogo: CatalogoItem[] = [
  { categoria: "Manicura", nombre: "Kapping Poligel", precio: "$20.000", imagen: imgKappingPoligel, alt: "Uñas almond nude rosadas con kapping poligel", desc: "Largo elegante en tono nude rosado." },
  { categoria: "Manicura", nombre: "Kapping Rubber", precio: "$18.000", imagen: imgKappingRubber, alt: "Uñas naturales rosadas cortas con kapping rubber", desc: "Base flexible para uñas naturales." },
  { categoria: "Manicura", nombre: "Kapping Gel", precio: "$20.000", imagen: imgKappingGel, alt: "Uñas francesas blancas con kapping gel", desc: "Francesa clásica, limpia y brillante." },
  { categoria: "Manicura", nombre: "Uñas con Pedrería", precio: "$24.000", desde: true, imagen: imgPedreria, alt: "Uñas con cristales y pedrería brillante", desc: "Cristales aplicados a mano." },
  { categoria: "Manicura", nombre: "Uñas Esculpidas", precio: "$25.000", imagen: imgEsculpidas, alt: "Uñas stiletto nude con detalles dorados", desc: "Forma stiletto en nude dorado." },
  { categoria: "Manicura", nombre: "Esmaltado Semi", precio: "$15.000", imagen: imgSemi, alt: "Uñas cortas rojo y lavanda brillantes con esmaltado semipermanente", desc: "Color intenso y brillo duradero." },
  { categoria: "Manicura", nombre: "Soft Gel c/ Diseño", precio: "$23.000", imagen: imgSoftDiseno, alt: "Uñas soft gel con diseño floral, mariposa lavanda y dorado", desc: "Diseño floral con mariposa lavanda." },
  { categoria: "Manicura", nombre: "Soft Gel Liso", precio: "$20.000", imagen: imgSoftLiso, alt: "Uñas soft gel lisas en lavanda pastel", desc: "Lavanda pastel, liso y prolijo." },
  { categoria: "Manicura", nombre: "Baby Boomer", precio: "$20.000", desde: true, imagen: imgBabyBoomer, alt: "Uñas baby boomer con degradado blanco a rosa", desc: "Degradado blanco a rosa." },
  { categoria: "Pedicura", nombre: "Pedicura Básica", precio: "$16.000", imagen: imgPediBasica, alt: "Pies cuidados sobre toallas blancas en pedicura básica", desc: "Cuidado esencial y prolijo." },
  { categoria: "Pedicura", nombre: "Pedicura Premium", precio: "$20.000", imagen: imgPediPremium, alt: "Spa de pies de lujo con flores lavanda", desc: "Experiencia spa con flores lavanda." },
  { categoria: "Pedicura", nombre: "Spa de Pies", precio: "$25.000", imagen: imgSpaPies, alt: "Bowl con agua y pétalos para spa de pies", desc: "Baño relajante con pétalos." },
  { categoria: "Masajes", nombre: "Masaje Relajante", precio: "$30.000", imagen: imgMasajeRelajante, alt: "Espalda con aceite durante un masaje relajante", desc: "Para soltar tensión y descansar." },
  { categoria: "Masajes", nombre: "Masaje Descontracturante", precio: "$30.000", imagen: imgMasajeDescontract, alt: "Masaje en hombro y cuello para descontracturar", desc: "Trabajo profundo en hombros y cuello." },
  { categoria: "Masajes", nombre: "Masaje Piernas", precio: "$20.000", imagen: imgMasajePiernas, alt: "Masaje relajante en piernas", desc: "Piernas livianas y descansadas." },
  { categoria: "Masajes", nombre: "Masaje Craneofacial", precio: "$20.000", imagen: imgMasajeCraneo, alt: "Persona relajada recibiendo masaje craneofacial en cara y cabeza", desc: "Calma para cara y cabeza." },
  { categoria: "Cejas y Pestañas", nombre: "Lifting de Pestañas", precio: "$18.000", imagen: imgLifting, alt: "Primer plano de un ojo con pestañas largas y rizadas por lifting", desc: "Pestañas largas, rizadas y naturales." },
  { categoria: "Cejas y Pestañas", nombre: "Laminado de Cejas", precio: "$15.000", imagen: imgLaminado, alt: "Primer plano de cejas peinadas hacia arriba estilo fluffy", desc: "Cejas peinadas hacia arriba, fluffy." },
  { categoria: "Cejas y Pestañas", nombre: "Laminado c/ Henna", precio: "$20.000", imagen: imgHenna, alt: "Ceja con henna marrón y herramientas de henna", desc: "Color marrón y forma definida." },
  { categoria: "Cejas y Pestañas", nombre: "Lifting + Laminado", precio: "$30.000", imagen: imgLiftingLaminado, alt: "Ojo y ceja juntos con pestañas rizadas y cejas perfectas", desc: "Mirada completa: pestañas + cejas." },
  { categoria: "Depilación Láser", nombre: "Depi Axilas", precio: "$6.000", imagen: imgLaserAxilas, alt: "Sesión de depilación láser en axila", desc: "Sesión rápida y precisa." },
  { categoria: "Depilación Láser", nombre: "Depi Piernas", precio: "$15.000", imagen: imgLaserPiernas, alt: "Sesión de depilación láser en piernas", desc: "Piernas suaves por más tiempo." },
  { categoria: "Depilación Láser", nombre: "Depi Bikini", precio: "$16.000", imagen: imgLaserBikini, alt: "Tratamiento de depilación bikini en camilla", desc: "Tratamiento en camilla, cuidado y privado." },
  { categoria: "Depilación Láser", nombre: "Depi Facial", precio: "Consultar", imagen: imgLaserFacial, alt: "Depilación láser facial en mentón con gel", desc: "Zona facial con gel, consultá precio." },
];

const promos = [
  {
    title: "Kapping + Pedicura Básica",
    before: "38.000",
    now: "30.000",
    save: "8.000",
    tag: "Más pedido",
    desc: "Manos impecables y pies renovados en una sola visita.",
  },
  {
    title: "Lifting de Pestañas + Laminado de Cejas",
    before: "33.000",
    now: "25.000",
    save: "8.000",
    tag: "Mirada total",
    desc: "Define, levanta y potencia tu mirada natural.",
  },
  {
    title: "Limpieza Facial + Masaje Relajante",
    before: "48.000",
    now: "40.000",
    save: "8.000",
    tag: "Spa Day",
    desc: "Bienestar integral: piel radiante y relax profundo.",
  },
];

const pasos = [
  { n: "1", title: "Elegí tu servicio", desc: "Explorá el catálogo por servicio, mirá la foto y el precio, y elegí lo que querés hacerte." },
  { n: "2", title: "Escribinos por WhatsApp", desc: "Tocá Pedí Cita y escribinos. Contanos el servicio y el día y horario que preferís." },
  { n: "3", title: "Confirmá tu turno", desc: "Te confirmamos disponibilidad y dejamos tu turno reservado. Te esperamos en el estudio." },
];

const diferenciales = [
  { title: "Atención personalizada", desc: "Escuchamos tu estilo, tu rutina y lo que querés lograr, y adaptamos cada tratamiento a vos." },
  { title: "Productos profesionales", desc: "Trabajamos con productos y técnicas profesionales para un resultado cuidado y duradero." },
  { title: "Turnos a tu medida", desc: "Reservás con anticipación y coordinamos el horario que mejor te quede." },
];

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [filtro, setFiltro] = useState("TODOS");
  const [showReserva, setShowReserva] = useState(false);
  const [reservaForm, setReservaForm] = useState<Reserva>({ nombre: "", telefono: "", servicio: "Kapping + Pedicura Básica", fecha: "", mensaje: "" });
  const [reservas, setReservas] = useState<any[]>([]);
  const [saving, setSaving] = useState(false);
  const [savedMsg, setSavedMsg] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("actions", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ action: "records.list", args: { collection: "reservas", limit: 50 } })
        });
        const json = await res.json();
        if (json.data?.records) setReservas(json.data.records);
      } catch {}
    }
    load();
  }, []);

  async function handleReserva(e: React.FormEvent) {
    e.preventDefault();
    if (!reservaForm.nombre || !reservaForm.telefono) return;
    setSaving(true);
    setSavedMsg(null);
    try {
      const res = await fetch("actions", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          action: "records.create",
          args: {
            collection: "reservas",
            value: reservaForm,
            idempotency_key: `${reservaForm.telefono}-${reservaForm.fecha}-${Date.now()}`
          }
        })
      });
      const json = await res.json();
      if (json.error) throw new Error(json.error);
      setReservas(prev => [...prev, json.data]);
      setSavedMsg("Reserva guardada. Te contactaremos por WhatsApp para confirmar.");
      setTimeout(() => {
        setShowReserva(false);
        setSavedMsg(null);
        setReservaForm({ nombre: "", telefono: "", servicio: "Kapping + Pedicura Básica", fecha: "", mensaje: "" });
      }, 2500);
    } catch (err: any) {
      setSavedMsg(err.message || "No se pudo guardar. Intentá de nuevo por WhatsApp.");
    } finally {
      setSaving(false);
    }
  }

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const openReserva = (servicio: string) => {
    setReservaForm(r => ({ ...r, servicio }));
    setShowReserva(true);
  };

  const filtrados = filtro === "TODOS" ? catalogo : catalogo.filter(c => c.categoria === filtro);

  return (
    <div data-safe-area-inset-root className="min-h-screen bg-[#FFFBFE] overflow-x-clip" style={{ boxSizing: 'border-box', paddingTop: 'var(--safe-area-inset-top)', color: BLACK }}>
      <header data-safe-area-sticky-top className="sticky z-50 backdrop-blur-xl border-b border-[#C9A86A]" style={{ top: 'var(--safe-area-inset-top)', background: 'rgba(255,251,254,0.96)' }}>
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 h-[72px] flex items-center justify-between gap-3">
          <button onClick={() => scrollTo("inicio")} className="flex items-center gap-3 text-left" aria-label="Ir al inicio">
            <span className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-[#C9A86A] ring-offset-2 ring-offset-white shadow-md shrink-0 block">
              <img src={logoUrl} alt="Romy Colman Beauty Studio" width={40} height={40} className="w-full h-full object-cover" loading="eager" />
            </span>
            <span className="leading-none">
              <span className="serif font-semibold tracking-tight text-[17px] block" style={{ color: BLACK }}>Romy Colman</span>
              <span className="text-[11px] tracking-[0.2em] uppercase font-semibold block mt-1" style={{ color: BLACK }}>Beauty Studio</span>
            </span>
          </button>
          <nav className="hidden lg:flex items-center gap-7 text-[14px] font-medium" aria-label="Navegación principal">
            {[
              { l: "Inicio", id: "inicio" },
              { l: "Nosotros", id: "nosotros" },
              { l: "Servicios", id: "catalogo" },
              { l: "Promos", id: "promos" },
              { l: "Cómo Reservar", id: "como-reservar" },
              { l: "Contacto", id: "contacto" },
            ].map(item => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="hover:underline underline-offset-4" style={{ color: BLACK }}>
                {item.l}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href={WHATSAPP} target="_blank" rel="noopener" className="hidden sm:inline-flex h-9 px-5 rounded-full bg-[#5B3A96] text-white text-[13px] font-semibold tracking-wide items-center hover:bg-[#4A2F7A] transition-all shadow-md">
              Pedí Cita
            </a>
            <button aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={mobileOpen} className="lg:hidden w-10 h-10 rounded-full bg-white border border-[#C9A86A] flex items-center justify-center" onClick={() => setMobileOpen(!mobileOpen)}>
              <span className="space-y-1 block" aria-hidden="true">
                <span className={`block w-4 h-0.5 transition ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`} style={{ background: BLACK }} />
                <span className={`block w-4 h-0.5 transition ${mobileOpen ? 'opacity-0' : ''}`} style={{ background: BLACK }} />
                <span className={`block w-4 h-0.5 transition ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`} style={{ background: BLACK }} />
              </span>
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="lg:hidden border-t border-[#C9A86A] bg-white px-4 py-4 space-y-1">
            {[
              { l: "Inicio", id: "inicio" },
              { l: "Nosotros", id: "nosotros" },
              { l: "Servicios", id: "catalogo" },
              { l: "Promos", id: "promos" },
              { l: "Cómo Reservar", id: "como-reservar" },
              { l: "Contacto", id: "contacto" },
            ].map(item => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="w-full text-left py-3 px-3 rounded-xl hover:bg-[#F5F0FF] text-[15px] font-medium" style={{ color: BLACK }}>
                {item.l}
              </button>
            ))}
            <a href={WHATSAPP} target="_blank" rel="noopener" className="mt-2 flex w-full h-11 items-center justify-center rounded-full bg-[#5B3A96] text-white font-semibold">Pedí Cita por WhatsApp</a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5F0FF] via-[#FFFBFE] to-[#FFF6E8]" />
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 relative py-10 sm:py-16 lg:py-20 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
          <div>
            <p className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#C9A86A] text-[11px] tracking-widest uppercase font-semibold shadow-sm mb-5" style={{ color: BLACK }}>
              <span className="w-2 h-2 rounded-full bg-[#C9A86A] inline-block" aria-hidden="true" />
              Estudio boutique en San Vicente 1.529, Clorinda, Formosa
            </p>
            <h1 className="serif text-[clamp(32px,6vw,62px)] leading-[0.95] font-bold tracking-tight" style={{ color: BLACK }}>
              Romy Colman
              <span className="block font-light italic">Beauty Studio</span>
            </h1>
            <p className="mt-6 text-[15px] sm:text-[16px] leading-7 max-w-[56ch] font-medium" style={{ color: BLACK }}>
              Creemos que cada persona merece sentirse bien consigo misma. Personalizamos cada tratamiento, priorizamos la calidad y el bienestar, y trabajamos con productos y técnicas profesionales para realzar tu belleza natural.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WHATSAPP} target="_blank" rel="noopener" className="inline-flex h-[48px] px-7 items-center rounded-full bg-[#5B3A96] text-white font-semibold text-[14px] shadow-lg hover:bg-[#4A2F7A] transition-all">
                Pedí Cita
                <span className="ml-2" aria-hidden="true">→</span>
              </a>
              <button onClick={() => scrollTo("catalogo")} className="inline-flex h-[48px] px-7 items-center rounded-full bg-white border border-[#C9A86A] font-semibold text-[14px] hover:bg-[#F5F0FF] transition-all" style={{ color: BLACK }}>
                Ver Servicios
              </button>
            </div>
            <p className="mt-6 text-[13px] font-medium" style={{ color: BLACK }}>Atención con turno previo. Escribinos y coordinamos tu visita.</p>
          </div>
          <div className="relative">
            <div className="relative rounded-[32px] overflow-hidden bg-white shadow-xl border border-[#C9A86A] p-2">
              <div className="rounded-[24px] overflow-hidden relative aspect-[4/3] lg:aspect-[4/5]">
                <img src={imgSoftLiso} alt="Uñas soft gel lisas en lavanda pastel en el estudio Romy Colman" width={600} height={400} loading="eager" className="absolute inset-0 w-full h-full object-cover" style={{ objectFit: 'cover', borderRadius: '8px' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" aria-hidden="true" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="rounded-2xl bg-white p-3 border border-[#C9A86A] shadow">
                    <p className="text-[11px] uppercase tracking-widest font-bold" style={{ color: BLACK }}>Estudio boutique</p>
                    <p className="serif text-[14px] font-semibold leading-tight mt-1" style={{ color: BLACK }}>Higiene impecable. Atención cálida y privada.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="py-16 sm:py-20 bg-white border-y border-[#C9A86A]">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
          <p className="text-[12px] tracking-[0.25em] uppercase font-bold" style={{ color: BLACK }}>Nosotros</p>
          <h2 className="serif text-[clamp(28px,4vw,44px)] leading-[1.05] font-semibold mt-3 max-w-[22ch]" style={{ color: BLACK }}>Belleza con alma, cuidado con ciencia</h2>
          <div className="mt-6 grid lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-4 text-[15px] leading-7 font-medium" style={{ color: BLACK }}>
              <p>Somos un estudio boutique donde cada detalle importa. Romy Colman fundó este espacio pensando en la mujer real: que busca verse bien sin perder naturalidad.</p>
              <p>Combinamos manicura, soft gel, lifting, laminado, masajes y depilación láser. Nada de protocolos genéricos: escuchamos tu historia, tu estilo de vida y tu tipo de piel.</p>
              <p>Menos es más. Realzamos lo que ya tenés, sin transformarte en otra persona. Belleza que se siente, no que se nota.</p>
              <div className="rounded-2xl bg-[#F5F0FF] border border-[#C9A86A] p-5">
                <p className="serif text-[18px] font-semibold" style={{ color: BLACK }}>Nuestra filosofía</p>
                <p className="text-[14px] leading-6 mt-2" style={{ color: BLACK }}>Cada clienta sale como quiere sentirse, no como dicta una moda.</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-4">
              {diferenciales.map(d => (
                <article key={d.title} className="rounded-[20px] bg-white border border-[#C9A86A] p-5 shadow-md">
                  <p className="serif text-[18px] font-semibold leading-tight" style={{ color: BLACK }}>{d.title}</p>
                  <p className="text-[13px] leading-6 mt-3 font-medium" style={{ color: BLACK }}>{d.desc}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="mt-8 rounded-[20px] bg-[#FFFBFE] border border-[#C9A86A] p-5 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-bold text-[15px]" style={{ color: BLACK }}>San Vicente 1.529, Clorinda, Formosa</p>
              <p className="text-[13px] font-medium mt-1" style={{ color: BLACK }}>Lunes a Sábado, 9 a 19 hs. Con turno previo.</p>
            </div>
            <button onClick={() => scrollTo("contacto")} className="h-11 px-6 rounded-full bg-[#5B3A96] text-white text-[13px] font-semibold hover:bg-[#4A2F7A] transition">Ver contacto</button>
          </div>
        </div>
      </section>

      {/* CATÁLOGO */}
      <section id="catalogo" className="py-16 sm:py-20 bg-[#FFFBFE]">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
          <p className="text-[12px] tracking-[0.25em] uppercase font-bold" style={{ color: BLACK }}>Catálogo por Servicio</p>
          <div className="flex flex-wrap items-end justify-between gap-6 mt-3">
            <div>
              <h2 className="serif text-[clamp(28px,4vw,44px)] font-semibold leading-[1.05]" style={{ color: BLACK }}>Servicios, con foto y precio</h2>
              <p className="mt-4 text-[15px] font-medium max-w-[62ch]" style={{ color: BLACK }}>Elegí un servicio para ver solo esa categoría. Cada servicio tiene su foto, su nombre y su precio.</p>
            </div>
            <a href={WHATSAPP} target="_blank" rel="noopener" className="inline-flex h-11 px-6 items-center rounded-full bg-[#111111] text-white text-[13px] font-semibold hover:bg-black transition">Pedí Cita</a>
          </div>

          <div className="mt-8 flex gap-2 overflow-x-auto pb-2 -mx-1 px-1" role="tablist" aria-label="Filtrar catálogo por servicio">
            {categorias.map(c => {
              const count = c.id === "TODOS" ? catalogo.length : catalogo.filter(x => x.categoria === c.id).length;
              const active = filtro === c.id;
              return (
                <button key={c.id} role="tab" aria-selected={active} onClick={() => setFiltro(c.id)} className={`whitespace-nowrap shrink-0 px-4 h-11 rounded-full text-[13px] font-bold border transition-all ${active ? 'bg-[#5B3A96] text-white border-[#5B3A96] shadow-md' : 'bg-white border-[#C9A86A] hover:bg-[#F5F0FF]'}`} style={active ? undefined : { color: BLACK }}>
                  {c.label.toUpperCase()} <span className={`ml-1 text-[11px] px-1.5 py-0.5 rounded-full ${active ? 'bg-white text-black' : 'bg-[#F5F0FF]'}`} style={active ? { color: BLACK } : { color: BLACK }}>{count}</span>
                </button>
              );
            })}
          </div>

          <p className="mt-4 text-[13px] font-semibold" style={{ color: BLACK }} aria-live="polite">
            {filtro === "TODOS" ? "Todos los servicios" : filtro} · {filtrados.length} servicio{filtrados.length !== 1 ? 's' : ''} en esta vista
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtrados.map(item => (
              <article key={item.nombre} className="group rounded-[20px] bg-white border border-[#C9A86A] overflow-hidden shadow-md hover:-translate-y-1 hover:shadow-xl transition-all flex flex-col">
                <div className="overflow-hidden">
                  <img src={item.imagen} alt={item.alt} width={600} height={400} loading="lazy" className="w-full aspect-[3/2] object-cover transition duration-700 group-hover:scale-[1.05]" style={{ objectFit: 'cover', borderRadius: '8px' }} />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: BLACK }}>{item.categoria}</p>
                      <h3 className="serif text-[20px] font-semibold leading-tight mt-1" style={{ color: BLACK }}>{item.nombre}</h3>
                      <p className="text-[13px] mt-1 leading-5 font-medium" style={{ color: BLACK }}>{item.desc}</p>
                    </div>
                    <div className="shrink-0 text-right">
                      {item.desde && <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: BLACK }}>Desde</p>}
                      <p className="inline-block mt-1 px-3 py-1.5 rounded-full bg-[#C9A86A] font-bold text-[16px] shadow whitespace-nowrap" style={{ color: BLACK }}>{item.precio}</p>
                    </div>
                  </div>
                  <button onClick={() => openReserva(item.nombre)} className="mt-5 w-full h-11 inline-flex items-center justify-center rounded-full bg-[#5B3A96] text-white text-[13px] font-semibold hover:bg-[#4A2F7A] transition">Reservar</button>
                  <p className="mt-3 text-[11px] text-center font-medium" style={{ color: BLACK }}>Efectivo / Transferencia · Con turno previo</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROMOS */}
      <section id="promos" className="py-16 sm:py-20 bg-white border-y border-[#C9A86A]">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
          <div className="max-w-[760px]">
            <p className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#111111] text-white text-[11px] font-bold tracking-widest uppercase">Solo por esta semana</p>
            <h2 className="serif text-[clamp(30px,5vw,52px)] font-semibold leading-[0.95] mt-4" style={{ color: BLACK }}>Promos de la Semana</h2>
            <p className="serif text-[18px] sm:text-[20px] leading-7 font-medium mt-4" style={{ color: BLACK }}>Tu belleza y bienestar integral en un solo lugar.</p>
            <p className="text-[14px] leading-7 font-medium mt-3" style={{ color: BLACK }}>Manicura, pestañas, tratamientos faciales, masajes y depilación láser. Atención personalizada y turnos a tu medida.</p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {promos.map(p => (
              <article key={p.title} className="rounded-[24px] bg-white border border-[#C9A86A] shadow-md p-6 sm:p-7 flex flex-col">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#F5F0FF] border border-[#C9A86A] text-[11px] font-bold uppercase tracking-wide" style={{ color: BLACK }}>{p.tag}</span>
                  <span className="px-3 py-1 rounded-full bg-[#C9A86A] text-[11px] font-bold" style={{ color: BLACK }}>Ahorrá ${p.save}</span>
                </div>
                <h3 className="serif text-[24px] font-semibold leading-[1.1] mt-4" style={{ color: BLACK }}>{p.title}</h3>
                <p className="text-[14px] mt-3 leading-6 font-medium" style={{ color: BLACK }}>{p.desc}</p>
                <div className="mt-6 flex items-baseline gap-4">
                  <div>
                    <p className="text-[12px] uppercase tracking-widest font-bold" style={{ color: BLACK }}>Antes</p>
                    <p className="text-[18px] line-through font-semibold" style={{ color: BLACK }}>${p.before}</p>
                  </div>
                  <div className="h-10 w-[1px] bg-[#C9A86A]" aria-hidden="true" />
                  <div>
                    <p className="text-[12px] uppercase tracking-widest font-bold" style={{ color: BLACK }}>Ahora</p>
                    <p className="serif text-[34px] font-bold leading-none" style={{ color: BLACK }}>${p.now}</p>
                  </div>
                </div>
                <div className="mt-6 space-y-2 text-[12px] font-medium" style={{ color: BLACK }}>
                  <p>Válido hasta domingo</p>
                  <p>Con reserva previa</p>
                  <p>Pago en efectivo o transferencia</p>
                  <p>No acumulable con otras promos</p>
                </div>
                <button onClick={() => openReserva(p.title)} className="mt-6 w-full h-[48px] rounded-full bg-[#5B3A96] text-white font-semibold text-[14px] hover:bg-[#4A2F7A] transition">Reservar mi turno</button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CÓMO RESERVAR */}
      <section id="como-reservar" className="py-16 sm:py-20 bg-[#FFFBFE]">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
          <p className="text-[12px] tracking-[0.25em] uppercase font-bold" style={{ color: BLACK }}>Cómo Reservar</p>
          <h2 className="serif text-[clamp(28px,4vw,44px)] font-semibold leading-[1.05] mt-3" style={{ color: BLACK }}>Reservá en 3 pasos</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pasos.map(paso => (
              <article key={paso.n} className="rounded-[20px] bg-white border border-[#C9A86A] p-6 shadow-md">
                <p className="w-11 h-11 rounded-full bg-[#C9A86A] flex items-center justify-center serif text-[20px] font-bold" style={{ color: BLACK }}>{paso.n}</p>
                <h3 className="serif text-[20px] font-semibold mt-4" style={{ color: BLACK }}>{paso.title}</h3>
                <p className="text-[14px] leading-6 mt-2 font-medium" style={{ color: BLACK }}>{paso.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO + FORM */}
      <section id="contacto" className="py-16 sm:py-20 bg-white border-t border-[#C9A86A]">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 grid lg:grid-cols-[0.9fr_1.1fr] gap-10">
          <div>
            <p className="text-[12px] tracking-[0.25em] uppercase font-bold" style={{ color: BLACK }}>Contacto</p>
            <h2 className="serif text-[36px] font-semibold leading-[1.05] mt-3" style={{ color: BLACK }}>Pedí tu cita</h2>
            <p className="text-[14px] mt-4 leading-6 font-medium" style={{ color: BLACK }}>Estamos en San Vicente 1.529, Clorinda, Formosa. Atendemos con turno. Escribinos y coordinamos tu momento de bienestar.</p>
            <div className="mt-8 space-y-4">
              <div className="flex gap-3 p-4 rounded-2xl bg-white border border-[#C9A86A] shadow-md">
                <div className="w-10 h-10 rounded-xl bg-[#F5F0FF] flex items-center justify-center text-[18px]" aria-hidden="true">📞</div>
                <div>
                  <p className="text-[12px] uppercase tracking-wide font-bold" style={{ color: BLACK }}>WhatsApp</p>
                  <p className="font-bold" style={{ color: BLACK }}>3718-616895</p>
                  <a href={WHATSAPP} target="_blank" rel="noopener" className="text-[12px] font-bold underline underline-offset-2" style={{ color: BLACK }}>Enviar mensaje →</a>
                </div>
              </div>
              <div className="flex gap-3 p-4 rounded-2xl bg-white border border-[#C9A86A] shadow-md">
                <div className="w-10 h-10 rounded-xl bg-[#FFF7ED] flex items-center justify-center text-[18px]" aria-hidden="true">📍</div>
                <div>
                  <p className="text-[12px] uppercase tracking-wide font-bold" style={{ color: BLACK }}>Dirección</p>
                  <p className="font-bold" style={{ color: BLACK }}>San Vicente 1.529, Clorinda, Formosa</p>
                  <p className="text-[12px] font-medium mt-1" style={{ color: BLACK }}>Turnos Lunes a Sábado, 9 a 19 hs</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 rounded-2xl bg-white border border-[#C9A86A] shadow-md">
                <div className="w-10 h-10 rounded-xl bg-[#F5F0FF] flex items-center justify-center text-[18px]" aria-hidden="true">📸</div>
                <div>
                  <p className="text-[12px] uppercase tracking-wide font-bold" style={{ color: BLACK }}>Instagram</p>
                  <p className="font-bold" style={{ color: BLACK }}>@romycolman_nails</p>
                  <p className="text-[12px] font-medium mt-1" style={{ color: BLACK }}>Trabajos diarios y promos</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 rounded-2xl bg-white border border-[#C9A86A] shadow-md">
                <div className="w-10 h-10 rounded-xl bg-[#F5F0FF] flex items-center justify-center text-[18px]" aria-hidden="true">🕘</div>
                <div>
                  <p className="text-[12px] uppercase tracking-wide font-bold" style={{ color: BLACK }}>Horarios</p>
                  <p className="font-bold" style={{ color: BLACK }}>Lunes a Sábado: 9:00 a 19:00 hs</p>
                  <p className="text-[12px] font-medium mt-1" style={{ color: BLACK }}>Con turno previo</p>
                </div>
              </div>
            </div>
            <a href={WHATSAPP} target="_blank" rel="noopener" className="mt-6 w-full h-[52px] rounded-full bg-[#5B3A96] text-white font-bold text-[15px] inline-flex items-center justify-center hover:bg-[#4A2F7A] transition shadow-lg">
              Pedí Cita
            </a>
          </div>
          <div className="rounded-[28px] bg-white border border-[#C9A86A] shadow-lg p-6 sm:p-8 h-fit">
            <div className="flex items-center justify-between gap-3">
              <h3 className="serif text-[22px] font-semibold" style={{ color: BLACK }}>Reservar mi turno</h3>
              <span className="text-[11px] px-3 py-1 rounded-full bg-[#C9A86A] font-bold whitespace-nowrap" style={{ color: BLACK }}>Con turno previo</span>
            </div>
            <form onSubmit={handleReserva} className="mt-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="text-[12px] font-bold block" style={{ color: BLACK }}>
                  Nombre completo
                  <input required value={reservaForm.nombre} onChange={e=>setReservaForm({...reservaForm, nombre: e.target.value})} placeholder="Tu nombre" className="mt-1.5 w-full h-11 rounded-xl border border-[#C9A86A] px-3 text-[14px] font-medium focus:outline-none focus:ring-2 focus:ring-[#5B3A96] bg-[#FFFBFE]" style={{ color: BLACK }} />
                </label>
                <label className="text-[12px] font-bold block" style={{ color: BLACK }}>
                  WhatsApp
                  <input required value={reservaForm.telefono} onChange={e=>setReservaForm({...reservaForm, telefono: e.target.value})} placeholder="3718..." className="mt-1.5 w-full h-11 rounded-xl border border-[#C9A86A] px-3 text-[14px] font-medium focus:outline-none focus:ring-2 focus:ring-[#5B3A96] bg-[#FFFBFE]" style={{ color: BLACK }} />
                </label>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="text-[12px] font-bold block" style={{ color: BLACK }}>
                  Servicio deseado
                  <select value={reservaForm.servicio} onChange={e=>setReservaForm({...reservaForm, servicio: e.target.value})} className="mt-1.5 w-full h-11 rounded-xl border border-[#C9A86A] px-3 text-[14px] font-medium bg-[#FFFBFE]" style={{ color: BLACK }}>
                    <option>Kapping + Pedicura Básica</option>
                    <option>Lifting de Pestañas + Laminado de Cejas</option>
                    <option>Limpieza Facial + Masaje Relajante</option>
                    <option>Manicura completa</option>
                    <option>Pedicura Premium</option>
                    <option>Depilación Láser</option>
                    <option>Masaje</option>
                  </select>
                </label>
                <label className="text-[12px] font-bold block" style={{ color: BLACK }}>
                  Fecha preferida
                  <input type="date" value={reservaForm.fecha} onChange={e=>setReservaForm({...reservaForm, fecha: e.target.value})} className="mt-1.5 w-full h-11 rounded-xl border border-[#C9A86A] px-3 text-[14px] font-medium bg-[#FFFBFE]" style={{ color: BLACK }} />
                </label>
              </div>
              <label className="text-[12px] font-bold block" style={{ color: BLACK }}>
                Mensaje (opcional)
                <textarea value={reservaForm.mensaje} onChange={e=>setReservaForm({...reservaForm, mensaje: e.target.value})} placeholder="Contanos si tenés alergias, preferencia horaria, etc." rows={3} className="mt-1.5 w-full rounded-xl border border-[#C9A86A] p-3 text-[14px] font-medium bg-[#FFFBFE] resize-none focus:outline-none focus:ring-2 focus:ring-[#5B3A96]" style={{ color: BLACK }} />
              </label>
              <button disabled={saving} type="submit" className="w-full h-[48px] rounded-full bg-[#5B3A96] text-white font-semibold text-[14px] shadow-lg hover:bg-[#4A2F7A] disabled:opacity-60 transition">
                {saving ? 'Guardando...' : 'Reservar mi turno →'}
              </button>
              <p className="text-[11px] text-center font-medium" style={{ color: BLACK }}>Al reservar aceptás que te contactemos por WhatsApp. Pago en efectivo o transferencia. Promos válidas hasta domingo, con reserva previa.</p>
              {savedMsg && (
                <div className="rounded-xl bg-[#F0FDF4] border border-green-600 text-[13px] p-3 text-center font-semibold" style={{ color: BLACK }}>{savedMsg}</div>
              )}
            </form>
          </div>
        </div>
      </section>

      {showReserva && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Reservar turno">
          <div className="w-full max-w-[440px] rounded-[24px] bg-white p-6 shadow-2xl border border-[#C9A86A]">
            <div className="flex items-center justify-between gap-3">
              <h3 className="serif text-[20px] font-semibold" style={{ color: BLACK }}>Reservar: {reservaForm.servicio}</h3>
              <button onClick={()=>setShowReserva(false)} aria-label="Cerrar" className="w-8 h-8 rounded-full bg-[#F5F0FF] flex items-center justify-center font-bold shrink-0" style={{ color: BLACK }}>✕</button>
            </div>
            <p className="text-[13px] mt-2 font-medium" style={{ color: BLACK }}>Completá tus datos y te confirmamos el turno por WhatsApp.</p>
            <form onSubmit={handleReserva} className="mt-5 space-y-3">
              <input required value={reservaForm.nombre} onChange={e=>setReservaForm({...reservaForm, nombre: e.target.value})} placeholder="Nombre" className="w-full h-11 rounded-xl border border-[#C9A86A] px-3 text-[14px] font-medium" style={{ color: BLACK }} />
              <input required value={reservaForm.telefono} onChange={e=>setReservaForm({...reservaForm, telefono: e.target.value})} placeholder="WhatsApp" className="w-full h-11 rounded-xl border border-[#C9A86A] px-3 text-[14px] font-medium" style={{ color: BLACK }} />
              <input type="date" value={reservaForm.fecha} onChange={e=>setReservaForm({...reservaForm, fecha: e.target.value})} className="w-full h-11 rounded-xl border border-[#C9A86A] px-3 text-[14px] font-medium" style={{ color: BLACK }} />
              <button disabled={saving} className="w-full h-11 rounded-full bg-[#5B3A96] text-white font-semibold">Confirmar reserva</button>
              {savedMsg && <p className="text-[12px] text-center font-semibold bg-green-50 border border-green-600 rounded-lg p-2" style={{ color: BLACK }}>{savedMsg}</p>}
            </form>
            <p className="text-[11px] text-center font-medium mt-3" style={{ color: BLACK }}>Efectivo / transferencia · Con reserva previa · Hasta domingo</p>
          </div>
        </div>
      )}

      <a href={WHATSAPP} target="_blank" rel="noopener" aria-label="Escribinos por WhatsApp" className="fixed bottom-5 right-5 z-[90] w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:scale-105 transition-transform border-2 border-white">
        <span className="text-[26px] leading-none" aria-hidden="true">💬</span>
      </a>

      <footer className="bg-white border-t border-[#C9A86A] py-12">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 grid md:grid-cols-3 gap-8">
          <div className="flex gap-3">
            <img src={logoUrl} alt="Romy Colman Beauty Studio" width={44} height={44} loading="lazy" className="w-11 h-11 rounded-full object-cover ring-1 ring-[#C9A86A] shrink-0" />
            <div>
              <p className="serif text-[16px] font-semibold" style={{ color: BLACK }}>Romy Colman Beauty Studio</p>
              <p className="text-[12px] leading-5 mt-1 font-medium" style={{ color: BLACK }}>Belleza y bienestar integral con atención personalizada y turnos a tu medida.</p>
            </div>
          </div>
          <div className="text-[13px] space-y-2 font-medium" style={{ color: BLACK }}>
            <p className="font-bold tracking-wide text-[12px] uppercase" style={{ color: BLACK }}>Contacto</p>
            <p>3718-616895</p>
            <p>San Vicente 1.529, Clorinda, Formosa</p>
            <p>@romycolman_nails</p>
            <a href={WHATSAPP} target="_blank" rel="noopener" className="inline-flex mt-2 text-[12px] px-3 py-1.5 rounded-full bg-[#5B3A96] text-white font-semibold">WhatsApp directo</a>
          </div>
          <div className="text-[13px] font-medium" style={{ color: BLACK }}>
            <p className="font-bold tracking-wide text-[12px] uppercase" style={{ color: BLACK }}>Horarios</p>
            <p className="mt-2">Lunes a Sábado: 9:00 a 19:00 hs</p>
            <p className="text-[12px] mt-3">Productos profesionales · Técnicas certificadas · Higiene cuidada</p>
            <p className="mt-6 text-[11px]">© 2026 Romina Colman. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
