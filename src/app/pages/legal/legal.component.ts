import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-legal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="legal-hero">
      <div class="legal-hero__content">
        <h1>Impressum &amp; Datenschutz</h1>
        <p>
          Transparenz ist uns wichtig. Hier findest Du alle gesetzlichen Angaben sowie Informationen zur
          Verarbeitung Deiner Daten.
        </p>
        <a href="/" class="back-link">Zurück zur Startseite</a>
      </div>
    </section>

    <section class="legal-content">
      <article id="impressum">
        <h2>Impressum</h2>

        <div class="card">
          <h3>Angaben gemäß § 5 TMG und § 18 Abs. 2 MStV</h3>
          <p>
            <strong>Friseursalon [NAME DES SALONS]</strong><br />
            Inhaber: <strong>[VORNAME NACHNAME]</strong><br />
            [STRAßE + HAUSNUMMER]<br />
            [PLZ + ORT]<br />
            Deutschland
          </p>
          <p>
            <strong>Berufsbezeichnung:</strong><br />
            Friseur/in (Deutschland)
          </p>
          <p>
            <strong>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:</strong><br />
            [VORNAME NACHNAME]<br />
            [STRAßE + HAUSNUMMER]<br />
            [PLZ + ORT]
          </p>
        </div>

        <div class="card">
          <h3>Kontakt &amp; Umsatzsteuer-ID</h3>
          <p>
            Telefon: [TELEFONNUMMER]<br />
            E-Mail: <a href="mailto:[E-MAIL-ADRESSE]">[E-MAIL-ADRESSE]</a>
          </p>
          <p>
            <strong>Umsatzsteuer-ID:</strong><br />
            (Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG)<br />
            [UST-ID ODER „Nicht vorhanden“]
          </p>
        </div>

        <div class="card">
          <h3>Online-Streitbeilegung</h3>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
              https://ec.europa.eu/consumers/odr
            </a
            >.
          </p>
          <p>
            Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </article>

      <article id="datenschutz">
        <h2>Datenschutzerklärung</h2>

        <div class="card">
          <h3>1. Verantwortlicher</h3>
          <p>Verantwortlich im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:</p>
          <p>
            <strong>Friseursalon [NAME DES SALONS]</strong><br />
            Inhaber: <strong>[VORNAME NACHNAME]</strong><br />
            [STRAßE + HAUSNUMMER]<br />
            [PLZ + ORT]<br />
            E-Mail: <a href="mailto:[E-MAIL-ADRESSE]">[E-MAIL-ADRESSE]</a>
          </p>
        </div>

        <div class="card">
          <h3>2. Erhebung und Speicherung personenbezogener Daten</h3>

          <h4>2.1 Beim Besuch der Website</h4>
          <p>
            Beim Aufrufen unserer Website werden automatisch Informationen an den Server übermittelt und
            temporär in Server-Logfiles gespeichert:
          </p>
          <ul>
            <li>IP-Adresse des anfragenden Rechners</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>Name und URL der abgerufenen Datei</li>
            <li>Referrer-URL</li>
            <li>genutzter Browser und Betriebssystem</li>
          </ul>
          <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).</p>

          <h4>2.2 Kontaktformular</h4>
          <p>Folgende Daten verarbeiten wir bei Kontaktanfragen:</p>
          <ul>
            <li>Name</li>
            <li>E-Mail-Adresse</li>
            <li>Nachrichteninhalt</li>
          </ul>
          <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. a und lit. b DSGVO.</p>

          <h4>2.3 Online-Terminbuchung</h4>
          <p>Bei Online-Buchungen verarbeiten wir insbesondere:</p>
          <ul>
            <li>Name &amp; E-Mail-Adresse</li>
            <li>gewünschter Service und Stylist</li>
            <li>Datum, Uhrzeit und optionale Notizen</li>
          </ul>
          <p>
            Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung bzw. vorvertragliche Maßnahmen).
          </p>
        </div>

        <div class="card">
          <h3>3. Cookies und Tracking</h3>
          <p>
            Es kommen derzeit keine Analyse- oder Tracking-Tools zum Einsatz. Wir verwenden ausschließlich
            technisch notwendige Cookies, soweit diese für den Betrieb der Website erforderlich sind.
          </p>
        </div>

        <div class="card">
          <h3>4. Nutzung von Drittanbietern</h3>

          <h4>4.1 Hosting über Vercel</h4>
          <p>
            Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA – Verarbeitung auf Basis eines
            Auftragsverarbeitungsvertrags gem. Art. 28 DSGVO inkl. EU-Standardvertragsklauseln.
          </p>

          <h4>4.2 E-Mail-Versand über Resend</h4>
          <p>
            Resend, Inc., 2261 Market Street #5130, San Francisco, CA 94114, USA – Verarbeitung von Termin- und
            Kontaktdaten zum Versand von E-Mails, Rechtsgrundlage Art. 6 Abs. 1 lit. b DSGVO.
          </p>

          <h4>4.3 Firebase / Firestore</h4>
          <p>
            Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland – Speicherung von Termin- und
            Kundendaten; mögliche Übermittlung in Drittstaaten auf Basis von EU-Standardvertragsklauseln.
          </p>
        </div>

        <div class="card">
          <h3>5. Speicherdauer</h3>
          <p>
            Wir speichern personenbezogene Daten nur solange dies erforderlich oder gesetzlich vorgeschrieben ist.
          </p>
          <ul>
            <li>Termindaten: bis zu 12 Monate nach Durchführung</li>
            <li>Kontaktanfragen: bis zu 6 Monate nach Abschluss</li>
            <li>Server-Logfiles: 7–30 Tage</li>
            <li>Buchhaltungsunterlagen: bis zu 10 Jahre</li>
          </ul>
        </div>

        <div class="card">
          <h3>6. Ihre Rechte</h3>
          <p>Sie haben folgende Rechte nach DSGVO:</p>
          <ul>
            <li>Auskunft, Berichtigung, Löschung</li>
            <li>Einschränkung der Verarbeitung</li>
            <li>Datenübertragbarkeit</li>
            <li>Widerspruch gegen die Verarbeitung</li>
            <li>Widerruf erteilter Einwilligungen</li>
          </ul>
          <p>Kontakt: <a href="mailto:[E-MAIL-ADRESSE]">[E-MAIL-ADRESSE]</a></p>
          <p>
            Beschwerderecht bei der zuständigen Aufsichtsbehörde, z. B. BayLDA, Promenade 18, 91522 Ansbach,
            Deutschland.
          </p>
        </div>

        <div class="card">
          <h3>7. SSL-/TLS-Verschlüsselung</h3>
          <p>
            Unsere Website nutzt SSL-/TLS-Verschlüsselung, erkennbar an „https://“ sowie dem Schloss-Symbol in
            der Browserzeile.
          </p>
        </div>

        <div class="card">
          <h3>8. Aktualität und Änderung dieser Datenschutzerklärung</h3>
          <p>
            Diese Datenschutzerklärung hat den Stand [JAHR, z.&nbsp;B. 2025] und wird bei Bedarf angepasst, etwa
            bei Änderungen eingesetzter Dienste oder gesetzlicher Vorgaben.
          </p>
        </div>
      </article>
    </section>

    <footer class="legal-footer">
      <p>© {{ currentYear }} City-Style Salon · Alle Rechte vorbehalten.</p>
      <a href="/">Zurück zur Startseite</a>
    </footer>
  `,
  styleUrl: './legal.component.css'
})
export class LegalComponent {
  protected readonly currentYear = new Date().getFullYear();
}
