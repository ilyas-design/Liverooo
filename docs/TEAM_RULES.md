# Règles d'équipe - Projet Liverooo!

Ce document définit les règles de qualité et les critères que doit respecter chaque story pour garantir une collaboration efficace et un développement de qualité.

## Definition of Ready (DoR)

Une story est prête à être démarrée lorsqu'elle respecte les critères suivants :

| Critère | Description |
|---------|-------------|
| **Story claire, petite, testable** | La story est rédigée au format "En tant que [persona], je veux [besoin] afin de [valeur]" et peut être réalisée en moins d'une demi-journée |
| **Contexte et AC bien définis** | Le contexte métier est expliqué et les Acceptance Criteria sont clairs, testables et complets |
| **Données d'exemple fournies** | Des données d'exemple (JSON ou texte) sont fournies pour faciliter le développement et les tests |
| **Dépendances identifiées** | Toutes les dépendances techniques ou fonctionnelles sont documentées |
| **Story : moins de ½ journée** | L'estimation de développement ne dépasse pas 4 heures de travail |

## Definition of Done (DoD)

Une story est considérée comme terminée lorsque les critères suivants sont remplis :

| Critère | Description |
|---------|-------------|
| **Code et tests passent localement et en CI** | Tous les tests unitaires et d'intégration passent avec succès |
| **Lint / format OK** | Le code respecte les règles de style et de formatage définies |
| **Docs (README / ADR) mises à jour** | La documentation technique est à jour (README, Architecture Decision Records si nécessaire) |
| **PR/MR approuvée, issue close** | La Pull Request a été revue et approuvée par au moins un autre membre de l'équipe |
| **Fonctionnalité déployable sans dette technique** | Le code est propre, maintenable et ne crée pas de dette technique |

## WIP Limit (Work In Progress)

- La colonne **In Progress** a une limite de **2 tâches maximum**
- Objectif : forcer l'équipe à terminer les tâches en cours avant d'en commencer de nouvelles
- Cela réduit la dispersion et améliore la vitesse de livraison

## Labels

Utilisez les labels suivants pour catégoriser les issues :

- **feature** : Nouvelle fonctionnalité
- **backend** : Travail côté serveur / API
- **frontend** : Travail côté interface utilisateur
- **bug** : Correction de bug
- **documentation** : Amélioration de la documentation

## Bonnes pratiques

1. **Assignation** : Chaque issue doit être assignée à au moins un membre de l'équipe
2. **Revue de code** : Toute PR doit être revue par au moins un autre développeur
3. **Communication** : Utilisez les commentaires dans les issues pour communiquer sur l'avancement
4. **Tests** : Chaque fonctionnalité doit avoir des tests appropriés (unitaires, intégration, UI selon le cas)
