/* ═══════════════════════════════════════════════
   BRIGHTER PERÚ — app.js · Lógica compartida
   ═══════════════════════════════════════════════ */

// ── PRODUCTS DATA ──
const PRODUCTS = [
  {
    id: 1, cat: 'educacion', isNew: true,
    name: 'Pantalla Interactiva BTOUCH Clásica',
    subtitle: 'Serie BT-LKT · Android 15 · Certificación Google EDLA',
    shortDesc: 'La evolución de la pizarra. Pantalla 4K táctil con software educativo preinstalado.',
    emoji: '🖥️',
    sizes: [65, 75, 86, 98],
    basePrices: { 65: 4500, 75: 5800, 86: 7200, 98: 9500 },
    models: [
      { id: 'clasica', name: 'Versión Clásica', desc: 'Pantalla táctil estándar para aulas', extraPrice: 0 },
      { id: 'hub',    name: 'Modelo HUB',      desc: 'Con cámara + micrófonos integrados para aulas híbridas', extraPrice: 850 }
    ],
    features: [
      '4K UHD · 50 puntos multitáctiles',
      'Android 15 · WiFi + Ethernet LAN',
      'Certificación Google EDLA (compatible Google Workspace)',
      'Atlas · Eshare · Uboardmate preinstalados',
      'NFC para desbloqueo seguro con tarjeta',
      'Antirreflejo · Ideal para luz solar directa'
    ],
    apps: ['Atlas', 'Eshare', 'Uboardmate', 'Google Play', 'Google Meet'],
    targets: ['Colegios', 'Universidades', 'Aulas híbridas']
  },
  {
    id: 2, cat: 'educacion', isNew: false,
    name: 'Pizarra Electrónica BTOUCH 105"',
    subtitle: 'Gran formato · Android 15 · Ideal para auditorios',
    shortDesc: 'Pantalla de gran impacto para espacios grandes, auditorios y salas de conferencia.',
    emoji: '📺',
    sizes: [105],
    basePrices: { 105: 12000 },
    models: [
      { id: 'std', name: 'Estándar 105"', desc: 'Con sistema táctil avanzado y Android 15', extraPrice: 0 }
    ],
    features: [
      '105" · Máximo impacto visual',
      '4K UHD · Tecnología táctil de alta precisión',
      'Android 15 · Google EDLA',
      'Software educativo preinstalado',
      'Ideal para presentaciones masivas'
    ],
    apps: ['Google Meet', 'Uboardmate', 'Google Play'],
    targets: ['Auditorios', 'Salas grandes', 'Universidades']
  },
  {
    id: 3, cat: 'educacion', isNew: false,
    name: 'Pizarra Interactiva BTOUCH 110"',
    subtitle: 'La más grande · Android 15 · Experiencia inmersiva',
    shortDesc: 'La pantalla más grande del portafolio Brighter para experiencias verdaderamente inmersivas.',
    emoji: '📺',
    sizes: [110],
    basePrices: { 110: 14000 },
    models: [
      { id: 'std', name: 'Estándar 110"', desc: 'El más grande del catálogo Brighter', extraPrice: 0 }
    ],
    features: [
      '110" · Experiencia inmersiva total',
      '4K UHD · 50 puntos multitáctiles',
      'Android 15 · Google EDLA',
      'Ideal para auditorios y aulas de uso intensivo',
      'Stock disponible en Arequipa'
    ],
    apps: ['Google Meet', 'Uboardmate', 'MozaBook', 'Google Play'],
    targets: ['Auditorios', 'Universidades', 'Colegios grandes']
  },
  {
    id: 4, cat: 'empresa', isNew: false,
    name: 'Tótem Interactivo BT-55XTD',
    subtitle: 'Kiosko digital · Conexión remota · UHD',
    shortDesc: 'Kiosko digital para lobbies, recepciones y puntos de atención al cliente.',
    emoji: '🏧',
    sizes: [55],
    basePrices: { 55: 5200 },
    models: [
      { id: 'vertical', name: 'Vertical (portrait)', desc: 'Orientación estándar, mástil resistente', extraPrice: 0 },
      { id: 'doble',    name: 'Doble cara',          desc: 'Pantalla en ambas caras del tótem', extraPrice: 1400 }
    ],
    features: [
      'Pantalla táctil UHD · Sonido incorporado',
      'Conexión remota para gestión de contenido',
      'Estructura de aluminio resistente',
      'Fácil actualización de contenido',
      'Ideal para self-service y señalización'
    ],
    apps: ['CMS remoto', 'Gestión de contenido'],
    targets: ['Empresas', 'Centros comerciales', 'Municipalidades']
  },
  {
    id: 5, cat: 'totem', isNew: false,
    name: 'Panel LED BTOUCH 55"',
    subtitle: 'Señalización digital · Alto contraste · UHD',
    shortDesc: 'Panel LED de alto impacto para publicidad y comunicación corporativa.',
    emoji: '📣',
    sizes: [55],
    basePrices: { 55: 3800 },
    models: [
      { id: 'std', name: 'Panel estándar', desc: 'UHD · Sonido incorporado · Conexión remota', extraPrice: 0 }
    ],
    features: [
      'Resolución UHD · Alto contraste',
      'Sonido incorporado',
      'Gestión remota de contenido',
      'Estructura aluminio resistente · Desplazamiento sencillo',
      'Flexibilidad de contenido en tiempo real'
    ],
    apps: ['CMS remoto'],
    targets: ['Retail', 'Empresas', 'Eventos']
  },
  {
    id: 6, cat: 'totem', isNew: false,
    name: 'Pantalla LED All in One 136"',
    subtitle: 'Mega formato · LED modular · Alta luminosidad',
    shortDesc: 'Pantalla LED de mega formato para eventos, auditorios y espacios de gran escala.',
    emoji: '🎬',
    sizes: [136],
    basePrices: { 136: 28000 },
    models: [
      { id: 'std', name: 'LED Modular 136"', desc: 'Sistema modular escalable de alta luminosidad', extraPrice: 0 }
    ],
    features: [
      '136" · Mega formato modular',
      'Alta luminosidad interior y exterior',
      'Sistema escalable y personalizable',
      'Ideal para eventos y grandes auditorios'
    ],
    apps: [],
    targets: ['Eventos', 'Auditorios', 'Espacios públicos']
  },
  {
    id: 7, cat: 'software', isNew: false,
    name: 'ERP Odoo — Partner Oficial',
    subtitle: 'Socio oficial Odoo · Implementación certificada',
    shortDesc: 'Sistema de gestión empresarial integral: inventario, CRM, contabilidad, RRHH y más.',
    emoji: '⚙️',
    sizes: [],
    basePrices: { default: 2500 },
    models: [
      { id: 'basico',    name: 'Plan Básico',    desc: 'CRM + Contabilidad + Recursos Humanos', extraPrice: 0 },
      { id: 'completo',  name: 'Plan Completo',  desc: '+ Inventario + eCommerce + Proyectos + Compras', extraPrice: 1800 }
    ],
    features: [
      'Implementación y configuración completa',
      'Capacitación del equipo incluida',
      'Acceso en la nube · Escalable',
      'Módulos: CRM, Contabilidad, RRHH, Inventario',
      'Soporte en español · Partner oficial Odoo',
      'Integración con tienda online'
    ],
    apps: ['Odoo CRM', 'Odoo Accounting', 'Odoo HR', 'Odoo eCommerce'],
    targets: ['Empresas', 'Municipalidades', 'Instituciones educativas']
  },
  {
    id: 8, cat: 'software', isNew: false,
    name: 'LMS Educativo',
    subtitle: 'Plataforma de aprendizaje · Compatible BTOUCH',
    shortDesc: 'Plataforma de gestión de aprendizaje integrada con las pantallas BTOUCH y el ecosistema Google.',
    emoji: '📚',
    sizes: [],
    basePrices: { default: 1200 },
    models: [
      { id: 'anual',         name: 'Licencia Anual',        desc: 'Hasta 500 usuarios activos', extraPrice: 0 },
      { id: 'institucional', name: 'Plan Institucional',    desc: 'Usuarios ilimitados + soporte premium', extraPrice: 900 }
    ],
    features: [
      'Compatible con pantallas BTOUCH',
      'Moodle o Odoo eLearning a elección',
      'Cursos, evaluaciones y reportes',
      'Capacitación docente incluida',
      'Integración Google Workspace',
      'Seguimiento de progreso en tiempo real'
    ],
    apps: ['Moodle', 'Odoo eLearning', 'Google Classroom'],
    targets: ['Colegios', 'Universidades', 'Centros de capacitación']
  },
  {
    id: 9, cat: 'software', isNew: false,
    name: 'EnglishIB — Pronunciación en Inglés',
    subtitle: 'Alianza Australia · Profesores nativos · Desde 2021',
    shortDesc: 'Plataforma de inglés con profesores nativos australianos para mejorar pronunciación desde temprana edad.',
    emoji: '🇦🇺',
    sizes: [],
    basePrices: { default: 800 },
    models: [
      { id: 'basico',  name: 'Plan Básico',   desc: 'Hasta 100 estudiantes · Pronunciación y fluidez', extraPrice: 0 },
      { id: 'premium', name: 'Plan Premium',  desc: 'Estudiantes ilimitados + clases en vivo con nativos', extraPrice: 1200 }
    ],
    features: [
      'Profesores nativos australianos (READY TEACHER)',
      'Alianza con EduGrowth Australia desde 2021',
      'Enfoque en pronunciación y fluidez',
      'Diseñado para estudiantes desde temprana edad',
      'Metodología de países de habla inglesa',
      'Compatible con LMS y BTOUCH'
    ],
    apps: ['EnglishIB', 'READY TEACHER'],
    targets: ['Colegios', 'Institutos de idiomas', 'Familias']
  }
];

const ADDONS = [
  { id: 'lms',      icon: '📚', name: 'Sistema LMS',        desc: 'Plataforma de aprendizaje online', price: 1200, unit: '/año' },
  { id: 'erp',      icon: '⚙️', name: 'ERP Odoo básico',   desc: 'CRM + Contabilidad + RRHH',        price: 2500, unit: '' },
  { id: 'english',  icon: '🇦🇺', name: 'EnglishIB',        desc: 'Inglés con profesores nativos',     price: 800,  unit: '/año' },
  { id: 'soporte',  icon: '🛡️', name: 'Soporte Premium',   desc: 'Atención técnica prioritaria 24/7', price: 600,  unit: '/año' }
];

// ── CART (localStorage) ──
const CART_KEY = 'brighter_cart';

function getCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch { return []; }
}
function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}
function addToCart(item) {
  const cart = getCart();
  cart.push({ ...item, cartId: Date.now() });
  saveCart(cart);
  updateCartBadges();
  showToast('🛒 Agregado al carrito');
}
function removeFromCart(cartId) {
  const cart = getCart().filter(i => i.cartId !== cartId);
  saveCart(cart);
  updateCartBadges();
}
function clearCart() {
  saveCart([]);
  updateCartBadges();
}
function getCartTotal() {
  return getCart().reduce((sum, i) => sum + i.price, 0);
}
function updateCartBadges() {
  const count = getCart().length;
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = count;
    el.style.display = count === 0 ? 'none' : 'flex';
  });
}

// ── TOAST ──
function showToast(msg, type = 'default') {
  const t = document.createElement('div');
  t.className = 'toast';
  if (type === 'success') t.style.background = '#166534';
  if (type === 'error')   t.style.background = '#991b1b';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => {
    t.classList.add('hide');
    setTimeout(() => t.remove(), 350);
  }, 2800);
}

// ── FORMAT ──
function formatPrice(n) {
  return 'S/ ' + Number(n).toLocaleString('es-PE');
}

// ── LOGO SVG ──
function logoSVG(size = 38) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 38 38" fill="none" class="logo-icon">
    <path d="M19 4 L32 12 L32 30 L19 34 L6 30 L6 12 Z" fill="#0d1f2d" opacity=".08"/>
    <path d="M11 19 L21 8 L30 14 L23 23 Z" fill="#00a3a3"/>
    <path d="M11 19 L21 30 L30 24 L23 15 Z" fill="#f97316" opacity=".75"/>
    <path d="M11 19 L4 13 L13 6 L19 15 Z" fill="#22c55e" opacity=".85"/>
  </svg>`;
}

// ── HEADER ──
function renderHeader(activePage) {
  const pages = [
    { href: 'index.html',   label: 'Inicio' },
    { href: 'tienda.html',  label: 'Tienda' },
    { href: 'academy.html', label: 'Academy' },
    { href: 'demo.html',    label: 'Demostración' }
  ];
  const nav = pages.map(p =>
    `<a href="${p.href}" class="${activePage === p.href ? 'active' : ''}">${p.label}</a>`
  ).join('');
  const cartCount = getCart().length;
  return `
  <header>
    <div class="header-inner">
      <a href="index.html" class="logo">
        ${logoSVG(38)}
        <span class="logo-text">Brighter</span>
      </a>
      <nav>${nav}</nav>
      <div class="header-actions">
        <a href="carrito.html" class="cart-btn">
          🛒 Carrito
          <span class="cart-count" style="${cartCount === 0 ? 'display:none' : ''}">${cartCount}</span>
        </a>
      </div>
    </div>
  </header>`;
}

// ── FOOTER ──
function renderFooter() {
  return `
  <footer>
    <div class="footer-inner">
      <div class="footer-brand">
        <div class="flex gap-8" style="align-items:center;margin-bottom:12px;">
          ${logoSVG(32)}
          <span class="logo-text">Brighter</span>
        </div>
        <p>12 años modernizando el aprendizaje en el Perú. Soluciones EdTech para colegios, universidades y empresas.</p>
        <p style="margin-top:10px;">📍 Arequipa, Perú<br>📞 +51 949 688 879<br>✉️ ventas@ibrighter.com</p>
      </div>
      <div class="footer-col">
        <h5>Productos</h5>
        <a href="tienda.html">Pantallas BTOUCH</a>
        <a href="tienda.html">Tótems Interactivos</a>
        <a href="tienda.html">ERP Odoo</a>
        <a href="tienda.html">LMS Educativo</a>
        <a href="tienda.html">EnglishIB</a>
      </div>
      <div class="footer-col">
        <h5>Soluciones</h5>
        <a href="#">Para colegios</a>
        <a href="#">Para universidades</a>
        <a href="#">Para empresas</a>
        <a href="#">Para municipalidades</a>
      </div>
      <div class="footer-col">
        <h5>Empresa</h5>
        <a href="academy.html">Brighter Academy</a>
        <a href="demo.html">Solicitar demo</a>
        <a href="#">Blog</a>
        <a href="#">Contacto</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2024 Brighter Perú S.A.C. · Todos los derechos reservados.</span>
      <span style="display:flex;gap:16px;">
        <span>🤝 Partner oficial <strong style="color:#00a3a3">Odoo</strong></span>
        <span>🇦🇺 Alianza <strong style="color:#f97316">BTOUCH Australia</strong></span>
        <span>🎓 <strong style="color:#22c55e">EduGrowth</strong></span>
      </span>
    </div>
  </footer>`;
}

// ── INIT (run on every page) ──
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadges();
  injectLearnBubble();
});

// ── BURBUJA: Aprende Programación ──
function injectLearnBubble() {
  const style = document.createElement('style');
  style.textContent = `
    #learn-bubble {
      position: fixed;
      bottom: 28px;
      right: 28px;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 10px;
      font-family: 'Segoe UI', system-ui, sans-serif;
    }
    #learn-bubble-tooltip {
      background: #1a2332;
      border: 1px solid rgba(0,163,163,.35);
      color: #e2e8f0;
      font-size: 13px;
      font-weight: 600;
      border-radius: 12px;
      padding: 10px 14px;
      max-width: 200px;
      line-height: 1.5;
      box-shadow: 0 4px 20px rgba(0,0,0,.5);
      opacity: 0;
      transform: translateY(6px) scale(.95);
      transition: all .25s cubic-bezier(.34,1.56,.64,1);
      pointer-events: none;
    }
    #learn-bubble:hover #learn-bubble-tooltip,
    #learn-bubble-tooltip.show {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
    #learn-bubble-btn {
      width: 58px;
      height: 58px;
      border-radius: 50%;
      background: linear-gradient(135deg, #00a3a3, #8b5cf6);
      border: none;
      cursor: pointer;
      box-shadow: 0 4px 20px rgba(0,163,163,.4);
      font-size: 26px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform .2s, box-shadow .2s;
      text-decoration: none;
    }
    #learn-bubble-btn:hover {
      transform: scale(1.12) rotate(-5deg);
      box-shadow: 0 6px 28px rgba(0,163,163,.6);
    }
  `;
  document.head.appendChild(style);

  const bubble = document.createElement('div');
  bubble.id = 'learn-bubble';
  bubble.innerHTML = `
    <div id="learn-bubble-tooltip">🚀 <strong>¿Nuevo en programación?</strong><br>Aprende Kotlin y Android Studio</div>
    <a id="learn-bubble-btn" href="aprende-programacion.html" title="Aprende a programar">🧑‍💻</a>
  `;
  document.body.appendChild(bubble);

  // Mostrar el tooltip automáticamente por 3 seg al cargar
  setTimeout(() => {
    const tip = document.getElementById('learn-bubble-tooltip');
    if (tip) { tip.classList.add('show'); setTimeout(() => tip.classList.remove('show'), 3000); }
  }, 1500);
}
