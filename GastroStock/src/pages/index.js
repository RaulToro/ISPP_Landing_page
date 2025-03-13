import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Layout title="GastroStock" description="Optimiza tu inventario con IA">
      <header className={styles.hero} style={{ paddingTop: '100px', paddingBottom: '150px', backgroundImage: 'url(/img/hero-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container" data-aos="fade-up" style={{ textAlign: 'center' }}>
          <img src="/img/logo_letras.png" alt="GastroStock Logo" className={styles.logo} style={{ width: '250px', marginBottom: '20px' }} />
          <h1>Almacén en orden, ¡cocina en marcha! 🍽️📦</h1>
          <p>Optimiza tu inventario, reduce desperdicios y aumenta tus beneficios con GastroStock.</p>
          <div className={styles.buttons}>
            <a className="button button--primary" href="#contact">Solicita una demo</a>
          </div>
        </div>
      </header>

      <section className={styles.features} style={{ backgroundColor: '#a92e4f', color: 'white', textAlign: 'left', paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="container">
          <h2 data-aos="fade-right">¿Por qué elegir GastroStock? 🤔</h2>
          <div className={styles.grid}>
            <div className={styles.feature} data-aos="fade-right" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
              <img src="/img/ia.jpg" alt="IA Predictiva" style={{ width: '400px', marginBottom: '15px' }} />
              <h3>IA Predictiva</h3>
              <p>Anticípate a la demanda y optimiza compras con inteligencia artificial.</p>
            </div>
            <div className={styles.feature} data-aos="fade-up" data-aos-delay="200" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <img src="/img/tpv.jpg" alt="TPV Integrado" style={{ width: '400px', marginBottom: '15px' }} />
              <h3>TPV Integrado</h3>
              <p>Gestión de cobros y stock en un solo lugar.</p>
            </div>
            <div className={styles.feature} data-aos="fade-left" data-aos-delay="400" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', textAlign: 'right' }}>
              <img src="/img/alerta.jpg" alt="Alertas Inteligentes" style={{ width: '400px', marginBottom: '15px' }} />
              <h3>Alertas Inteligentes</h3>
              <p>Recibe avisos antes de que te quedes sin ingredientes clave.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.team} style={{ backgroundColor: '#ffffff', textAlign: 'center', paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="container" data-aos="fade-up">
          <h2>👨‍💼 Nuestro Equipo</h2>
          <p>Conoce a las personas que hacen posible GastroStock</p>
          <div className={styles.teamGrid} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px', marginTop: '40px' }}>
            {[
              {
                title: 'Project Manager 👔', members: [
                  { name: 'Raúl Toro', role: '', img: '/img/team/raul.jpg' }
                ]
              },
              {
                title: 'Relaciones Públicas 📞', members: [
                  { name: 'Jesús Salas', role: 'TM', img: '/img/team/jesus.jpg' },
                  { name: 'Alonso Portillo', role: '', img: '/img/team/alonso.jpg' },
                  { name: 'Alexis Molins', role: '', img: '/img/team/alexis.jpg' }
                ]
              },
              {
                title: 'Android 📱', members: [
                  { name: 'Carlos Martín de Prado', role: 'TM', img: '/img/team/carlos.jpg' },
                  { name: 'Óscar Menéndez', role: '', img: '/img/team/oscar.jpg' },
                  { name: 'Lidia Jiménez', role: '', img: '/img/team/lidia.jpg' },
                  { name: 'Álvaro Ruiz', role: '', img: '/img/team/alvaro.jpg' }
                ]
              },
              {
                title: 'QA/Testing 🧪', members: [
                  { name: 'Julio Solís', role: 'TM', img: '/img/team/julio.jpg' },
                  { name: 'Mario Zambrano', role: '', img: '/img/team/mario.jpg' }
                ]
              },
              {
                title: 'FullStack 💻', members: [
                  { name: 'Alejandro Vargas', role: 'TM', img: '/img/team/alejandro.jpg' },
                  { name: 'José Miguel Iborra', role: '', img: '/img/team/josibocon.jpg' },
                  { name: 'Ibai Pérez', role: '', img: '/img/team/ibai.jpg' },
                  { name: 'Francisco Manuel Sabido', role: '', img: '/img/team/fran.jpg' },
                  { name: 'David Vicente', role: '', img: '/img/team/david.jpg' }
                ]
              },
              {
                title: 'Inteligencia Artificial 🤖', members: [
                  { name: 'Pablo Rufián', role: 'TM', img: '/img/team/pablo.jpg' },
                  { name: 'Rafael Molina', role: '', img: '/img/team/rafa.jpg' }
                ]
              }
            ].map((department, deptIndex) => (
              <div key={deptIndex} style={{ width: '100%', marginBottom: '40px' }}>
                <h3 style={{ fontSize: '2rem', fontWeight: 'bold' }}>{department.title}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px', marginTop: '20px' }}>
                  {department.members.map((member, index) => (
                    <div key={index} className={styles.teamMember} style={{ width: '200px', textAlign: 'center' }}>
                      <img src={member.img} alt={member.name} style={{ width: '180px', height: '180px', objectFit: 'cover', borderRadius: '50%', marginBottom: '10px' }} />
                      <h4>{member.name}</h4>
                      <p>{member.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.testimonials} style={{ backgroundColor: '#a92e4f', color: 'white', textAlign: 'left', paddingTop: '120px', paddingBottom: '120px', }}>
        <div className="container" data-aos="fade-left" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/img/mascota.png" alt="Mascota GastroStock" className={styles.mascota} style={{ width: '300px', marginRight: '30px' }} />
          <div>
            <h2>Lo que dicen nuestros clientes ⭐</h2>
            <div className={styles.testimonial}>
              <p>"Desde que usamos GastroStock, nuestro desperdicio ha bajado un 30% y siempre sabemos qué comprar."</p>
              <h4>- Restaurante La Parrilla</h4>
            </div>
            <div className={styles.testimonial}>
              <p>"El TPV integrado nos ha ahorrado mucho tiempo y nos permite controlar las ventas y el stock en tiempo real."</p>
              <h4>- Bar El Buen Sabor</h4>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.comparisonTable} style={{ backgroundColor: '#ffffff', textAlign: 'center', paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="container" data-aos="fade-up">
          <h2>📊 ¿En qué se diferencia GastroStock?</h2>
          <table style={{
            width: '100%',
            maxWidth: '500px',
            margin: '0 auto',
            borderCollapse: 'collapse',
            background: '#a92e4f',
            color: '#fff',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
          }}>
            <thead>
              <tr style={{ background: '#000', color: 'white' }}>
                <th style={{ padding: '15px', textAlign: 'center', width: '40%' }}>Característica</th>
                <th style={{ padding: '15px', textAlign: 'center', width: '30%' }}>GastroStock</th>
                <th style={{ padding: '15px', textAlign: 'center', width: '30%' }}>Otras soluciones</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ background: '#a92e4f' }}>
                <td style={{ padding: '15px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>🧠 IA predictiva</td>
                <td style={{ padding: '15px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>✅ Sí</td>
                <td style={{ padding: '15px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>❌ No</td>
              </tr>
              <tr>
                <td style={{ padding: '15px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>🔔 Alertas personalizadas</td>
                <td style={{ padding: '15px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>✅ Sí</td>
                <td style={{ padding: '15px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>🔶 Parcial</td>
              </tr>
              <tr>
                <td style={{ padding: '15px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>📦 Reabastecimiento y control de pérdidas</td>
                <td style={{ padding: '15px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>✅ Sí</td>
                <td style={{ padding: '15px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>❌ No</td>
              </tr>
              <tr>
                <td style={{ padding: '15px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>🔮 Predicción de oferta y demanda</td>
                <td style={{ padding: '15px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>✅ Sí</td>
                <td style={{ padding: '15px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>❌ No</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className={styles.pricing} style={{ backgroundColor: '#a92e4f', color: 'white', textAlign: 'center', paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="container" data-aos="fade-up">
          <h2>💰 Elige tu plan</h2>
          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '40px' }}>
            <div style={{ background: 'white', color: '#000', padding: '20px', borderRadius: '10px', width: '30%' }}>
              <h3>FREE</h3>
              <p>💵 Gratis</p>
              <p>✔ Gestión de stock básico</p>
              <p>✔ Gestión de la oferta y demanda básico</p>
              <p>✔ Gestión de la base de datos básico</p>
            </div>
            <div style={{ background: 'white', color: '#000', padding: '20px', borderRadius: '10px', width: '30%' }}>
              <h3>PREMIUM</h3>
              <p>💵 25€/mes</p>
              <p>✔ Gestión de stock con implementación de IA</p>
              <p>✔ Gestión de proveedores</p>
              <p>✔ Mejora significativa de las funciones FREE</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.social} style={{ backgroundColor: '#ffffff', textAlign: 'center', paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="container" data-aos="fade-up">
          <h2>¡Síguenos en redes sociales! 📱</h2>
          <p>Conéctate con nosotros en Instagram y TikTok para más novedades.</p>
          <div className={styles.qrContainer} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginRight: '50px' }}>
              <img src="/img/qr_insta.png" alt="QR Instagram" className={styles.qr} style={{ width: '100px', marginRight: '15px' }} />
              <div className={styles.qrArrow}>
                <svg width="50" height="20" viewBox="0 0 50 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 10h40l-5-5m5 5l-5 5" stroke="black" strokeWidth="3" fill="none" />
                </svg>
              </div>
              <p>Instagram</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src="/img/qr_tiktok.png" alt="QR TikTok" className={styles.qr} style={{ width: '100px', marginRight: '15px' }} />
              <div className={styles.qrArrow}>
                <svg width="50" height="20" viewBox="0 0 50 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 10h40l-5-5m5 5l-5 5" stroke="black" strokeWidth="3" fill="none" />
                </svg>
              </div>
              <p>TikTok</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className={styles.contact} style={{ backgroundColor: '#a92e4f', color: 'white', textAlign: 'center', paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="container" data-aos="fade-up">
          <h2>📩 ¿Tienes dudas? Contáctanos</h2>
          <form style={{ maxWidth: '500px', margin: '0 auto' }}>
            <input type="text" placeholder="Tu nombre" required style={{ width: '100%', padding: '10px', marginBottom: '10px' }} />
            <input type="email" placeholder="Tu correo" required style={{ width: '100%', padding: '10px', marginBottom: '10px' }} />
            <textarea placeholder="Tu mensaje" required style={{ width: '100%', padding: '10px', marginBottom: '10px' }}></textarea>
            <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>Enviar</button>
          </form>
        </div>
      </section>
    </Layout>
  );
}