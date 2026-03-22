import Link from "next/link";

export function MobileAppSection() {
  return (
    <>
      {/*  MOBILE APP  */}
<section id="mobile-app">
  <div className="app-layout" style={{ 'maxWidth': '1100px', 'margin': '0 auto' }}>
    {/*  Left: text  */}
    <div>
      <div className="section-tag">Aplikasi Mobile</div>
      <div className="section-title">Android & iOS<br/>Native & Cross-Platform</div>
      <p className="section-desc">Kami bangun aplikasi mobile berkualitas tinggi untuk Google Play Store dan Apple App Store — dari konsep hingga publish.</p>
      <div className="tech-stack">
        <div className="tech-pill"><span>🤖</span> Android / Kotlin</div>
        <div className="tech-pill"><span>🍎</span> iOS / Swift</div>
        <div className="tech-pill"><span>💙</span> Flutter</div>
        <div className="tech-pill"><span>⚛️</span> React Native</div>
        <div className="tech-pill"><span>🔥</span> Firebase</div>
        <div className="tech-pill"><span>🗺️</span> Google Maps API</div>
      </div>
      <div className="app-features">
        <div className="app-feature">
          <div className="app-feature-icon android">🤖</div>
          <div>
            <h4>Aplikasi Android Native</h4>
            <p>Dibangun dengan Kotlin & Jetpack Compose. Performa optimal, UI smooth, dan dioptimasi untuk berbagai ukuran layar Android.</p>
          </div>
        </div>
        <div className="app-feature">
          <div className="app-feature-icon ios">🍎</div>
          <div>
            <h4>Aplikasi iOS Native</h4>
            <p>Dikembangkan dengan Swift & SwiftUI mengikuti Human Interface Guidelines Apple. Siap publish ke App Store.</p>
          </div>
        </div>
        <div className="app-feature">
          <div className="app-feature-icon cross">💙</div>
          <div>
            <h4>Flutter Cross-Platform</h4>
            <p>Satu codebase untuk Android & iOS sekaligus. Hemat biaya tanpa mengorbankan performa dan tampilan.</p>
          </div>
        </div>
        <div className="app-feature">
          <div className="app-feature-icon api">🔗</div>
          <div>
            <h4>Backend & API Integration</h4>
            <p>Integrasi REST API, notifikasi push, pembayaran in-app, GPS, kamera, dan berbagai fitur native lainnya.</p>
          </div>
        </div>
      </div>
      <div className="store-badges">
        <Link href="#kontak" className="store-badge">
          <div className="store-badge-icon">🤖</div>
          <div className="store-badge-text">
            <span className="store-badge-sub">Publish ke</span>
            <span className="store-badge-name">Google Play</span>
          </div>
        </Link>
        <Link href="#kontak" className="store-badge">
          <div className="store-badge-icon">🍎</div>
          <div className="store-badge-text">
            <span className="store-badge-sub">Publish ke</span>
            <span className="store-badge-name">App Store</span>
          </div>
        </Link>
      </div>
    </div>
    {/*  Right: phone mockups  */}
    <div className="phones-showcase">
      {/*  Android phone  */}
      <div className="phone-frame phone-android">
        <div className="phone-notch-android"></div>
        <div className="phone-screen">
          <div className="phone-app-bar" style={{ 'background': 'rgba(61,220,132,0.15)', 'color': '#3ddc84' }}>🤖 MyApp Android</div>
          <div className="phone-row">
            <div className="phone-col-lg" style={{ 'background': 'linear-gradient(135deg,rgba(61,220,132,0.2),rgba(61,220,132,0.05))', 'borderRadius': '8px', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'fontSize': '1.2rem' }}>📊</div>
            <div className="phone-col-lg" style={{ 'background': 'rgba(255,255,255,0.04)', 'borderRadius': '8px', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'fontSize': '1.2rem' }}>🛒</div>
          </div>
          <div className="phone-list-item" style={{ 'background': 'rgba(255,255,255,0.04)' }}>
            <div className="phone-list-dot" style={{ 'background': 'linear-gradient(135deg,#3ddc84,#00c853)' }}></div>
            <div className="phone-list-lines"><div className="phone-list-line"></div><div className="phone-list-line short"></div></div>
          </div>
          <div className="phone-list-item" style={{ 'background': 'rgba(255,255,255,0.04)' }}>
            <div className="phone-list-dot" style={{ 'background': 'linear-gradient(135deg,#667eea,#764ba2)' }}></div>
            <div className="phone-list-lines"><div className="phone-list-line"></div><div className="phone-list-line short"></div></div>
          </div>
          <div className="phone-list-item" style={{ 'background': 'rgba(255,255,255,0.04)' }}>
            <div className="phone-list-dot" style={{ 'background': 'linear-gradient(135deg,#f7971e,#ffd200)' }}></div>
            <div className="phone-list-lines"><div className="phone-list-line"></div><div className="phone-list-line short"></div></div>
          </div>
          <div className="phone-row">
            <div className="phone-col-sm" style={{ 'background': 'rgba(61,220,132,0.15)', 'borderRadius': '8px', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'fontSize': '0.7rem', 'fontWeight': '700', 'color': '#3ddc84' }}>ORDER</div>
            <div className="phone-col-sm" style={{ 'background': 'rgba(255,255,255,0.04)', 'borderRadius': '8px' }}></div>
          </div>
          <div className="phone-bottom-nav">
            <div className="phone-nav-dot" style={{ 'background': '#3ddc84', 'borderRadius': '3px' }}></div>
            <div className="phone-nav-dot" style={{ 'background': 'rgba(255,255,255,0.15)', 'borderRadius': '50%', 'width': '16px', 'height': '16px' }}></div>
            <div className="phone-nav-dot" style={{ 'background': 'rgba(255,255,255,0.15)', 'borderRadius': '50%', 'width': '16px', 'height': '16px' }}></div>
            <div className="phone-nav-dot" style={{ 'background': 'rgba(255,255,255,0.15)', 'borderRadius': '50%', 'width': '16px', 'height': '16px' }}></div>
          </div>
        </div>
      </div>
      {/*  iOS phone  */}
      <div className="phone-frame phone-ios">
        <div className="phone-notch-ios"></div>
        <div className="phone-screen">
          <div className="phone-app-bar" style={{ 'background': 'rgba(124,92,252,0.15)', 'color': '#a78bfa', 'justifyContent': 'center', 'borderRadius': '8px' }}>🍎 MyApp iOS</div>
          <div style={{ 'height': '60px', 'borderRadius': '12px', 'background': 'linear-gradient(135deg,rgba(124,92,252,0.25),rgba(92,240,252,0.1))', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'gap': '6px' }}>
            <span style={{ 'fontSize': '1rem' }}>👤</span>
            <div style={{ 'display': 'flex', 'flexDirection': 'column', 'gap': '3px' }}>
              <div style={{ 'height': '5px', 'width': '60px', 'background': 'rgba(255,255,255,0.3)', 'borderRadius': '2px' }}></div>
              <div style={{ 'height': '4px', 'width': '40px', 'background': 'rgba(255,255,255,0.15)', 'borderRadius': '2px' }}></div>
            </div>
          </div>
          <div className="phone-row">
            <div className="phone-col-sm" style={{ 'background': 'rgba(124,92,252,0.12)', 'borderRadius': '8px', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'fontSize': '0.9rem' }}>📍</div>
            <div className="phone-col-sm" style={{ 'background': 'rgba(252,92,125,0.12)', 'borderRadius': '8px', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'fontSize': '0.9rem' }}>❤️</div>
            <div className="phone-col-sm" style={{ 'background': 'rgba(92,240,252,0.12)', 'borderRadius': '8px', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'fontSize': '0.9rem' }}>💬</div>
          </div>
          <div className="phone-list-item" style={{ 'background': 'rgba(255,255,255,0.04)' }}>
            <div className="phone-list-dot" style={{ 'background': 'linear-gradient(135deg,#a78bfa,#7c5cfc)' }}></div>
            <div className="phone-list-lines"><div className="phone-list-line"></div><div className="phone-list-line short"></div></div>
          </div>
          <div className="phone-list-item" style={{ 'background': 'rgba(255,255,255,0.04)' }}>
            <div className="phone-list-dot" style={{ 'background': 'linear-gradient(135deg,#fc5c7d,#6a3093)' }}></div>
            <div className="phone-list-lines"><div className="phone-list-line"></div><div className="phone-list-line short"></div></div>
          </div>
          <div style={{ 'height': '28px', 'borderRadius': '50px', 'background': 'linear-gradient(135deg,#7c5cfc,#5c3cdc)', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'fontSize': '0.6rem', 'fontWeight': '700', 'color': '#fff', 'letterSpacing': '0.5px', 'marginTop': '2px' }}>MULAI SEKARANG</div>
          <div className="phone-bottom-nav">
            <div style={{ 'width': '80px', 'height': '4px', 'background': 'rgba(255,255,255,0.3)', 'borderRadius': '2px', 'margin': 'auto' }}></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
