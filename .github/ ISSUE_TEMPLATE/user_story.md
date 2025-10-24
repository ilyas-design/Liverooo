---
name: User Story - Liste des restaurants
about: Permet de consulter la liste des restaurants autour du bureau
title: "[US] Voir la liste des restaurants"
labels: user-story
assignees: ''
---

## Story
En tant que collaborateur, je veux voir la liste des restaurants autour du bureau afin de choisir rapidement mon déjeuner.

## Contexte
L’équipe peut consulter les restaurants disponibles chaque jour.

## Acceptance Criteria (AC)
- [ ] La liste affiche au moins 5 restaurants
- [ ] Nom, type de cuisine et délai moyen visibles

## Tests attendus
- [ ] Vérifier l’affichage correct de la liste
- [ ] Vérifier le temps d’affichage
- [ ] Vérifier le style et la mise en page


## Données d’exemple
```json
{
  "restaurants": [
    {
      "id": 1,
      "name": "Sushi Zen",
      "cuisine": "Japonaise",
      "delaiMoyen": 25,
      "prixMoyen": 15.5,
      "imageUrl": "/images/sushi-zen.jpg"
    },
    {
      "id": 2,
      "name": "Pasta Bella",
      "cuisine": "Italienne",
      "delaiMoyen": 30,
      "prixMoyen": 12.0,
      "imageUrl": "/images/pasta-bella.jpg"
    },
    {
      "id": 3,
      "name": "Burger King Office",
      "cuisine": "Fast-Food",
      "delaiMoyen": 15,
      "prixMoyen": 9.5,
      "imageUrl": "/images/burger-king.jpg"
    },
    {
      "id": 4,
      "name": "Salade & Co",
      "cuisine": "Healthy",
      "delaiMoyen": 20,
      "prixMoyen": 11.0,
      "imageUrl": "/images/salade-co.jpg"
    },
    {
      "id": 5,
      "name": "Le Tajine d'Or",
      "cuisine": "Marocaine",
      "delaiMoyen": 35,
      "prixMoyen": 13.5,
      "imageUrl": "/images/tajine-or.jpg"
    }
  ]
}



