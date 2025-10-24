import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h2>🍽️ Liverooo!</h2>
          </div>
          <div className="nav-menu">
            <a href="#features" className="nav-link">Fonctionnalités</a>
            <a href="#how-it-works" className="nav-link">Comment ça marche</a>
            <a href="#contact" className="nav-link">Contact</a>
            <button className="nav-cta">Commencer</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Commandez votre déjeuner d'équipe en toute simplicité
            </h1>
            <p className="hero-subtitle">
              Liverooo! simplifie la commande de déjeuner pour les équipes de bureau. 
              Découvrez les restaurants autour de vous, filtrez selon vos préférences 
              et commandez ensemble avec un budget contrôlé.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Commencer maintenant</button>
              <button className="btn-secondary">Voir la démo</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="mockup-phone">
              <div className="phone-screen">
                <div className="app-preview">
                  <div className="restaurant-card">
                    <div className="restaurant-info">
                      <h4>🍕 Pizza Corner</h4>
                      <p>Italien • 15 min</p>
                    </div>
                    <div className="budget-indicator">€12/personne</div>
                  </div>
                  <div className="restaurant-card">
                    <div className="restaurant-info">
                      <h4>🥗 Green Bowl</h4>
                      <p>Salades • 10 min</p>
                    </div>
                    <div className="budget-indicator">€8/personne</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title">Pourquoi choisir Liverooo! ?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📍</div>
              <h3>Restaurants à proximité</h3>
              <p>Découvrez tous les restaurants disponibles autour de votre bureau avec des informations en temps réel.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3>Filtres intelligents</h3>
              <p>Filtrez par type de cuisine et délai de livraison pour trouver exactement ce que vous cherchez.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Commandes d'équipe</h3>
              <p>Créez des commandes groupées avec un budget par personne et une deadline claire.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Contrôle du budget</h3>
              <p>Soyez alertés automatiquement si le budget est dépassé pour garder le contrôle de vos dépenses.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Interface simple</h3>
              <p>Une interface intuitive et rapide pour des commandes sans friction.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⏰</div>
              <h3>Gestion du temps</h3>
              <p>Définissez des deadlines de commande pour organiser efficacement vos déjeuners d'équipe.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section id="how-it-works" className="how-it-works">
        <div className="container">
          <h2 className="section-title">Comment ça marche ?</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Consultez les restaurants</h3>
              <p>Parcourez la liste des restaurants disponibles autour de votre bureau avec leurs spécialités et délais.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Filtrez vos options</h3>
              <p>Utilisez les filtres pour affiner votre recherche selon le type de cuisine et le temps de préparation.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Créez votre commande</h3>
              <p>Définissez un budget par personne et une deadline pour votre commande d'équipe.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Commandez ensemble</h3>
              <p>Partagez la commande avec votre équipe et recevez des alertes si le budget est dépassé.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Prêt à simplifier vos déjeuners d'équipe ?</h2>
            <p>Rejoignez les équipes qui utilisent déjà Liverooo! pour organiser leurs repas de bureau.</p>
            <button className="btn-primary large">Commencer gratuitement</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>🍽️ Liverooo!</h3>
              <p>Simplifiez vos commandes de déjeuner d'équipe.</p>
            </div>
            <div className="footer-section">
              <h4>Produit</h4>
              <ul>
                <li><a href="#features">Fonctionnalités</a></li>
                <li><a href="#how-it-works">Comment ça marche</a></li>
                <li><a href="#">Tarifs</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Support</h4>
              <ul>
                <li><a href="#">Centre d'aide</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Entreprise</h4>
              <ul>
                <li><a href="#">À propos</a></li>
                <li><a href="#">Carrières</a></li>
                <li><a href="#">Presse</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Liverooo! Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
