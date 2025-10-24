# Guide de contribution – Liverooo!

Merci de contribuer au projet **Liverooo!**  
Ce document définit les règles de collaboration technique de l’équipe DevOps.

---

##  Règles de branches

- La branche `main` est **protégée** → aucun commit direct dessus.  
- Toute nouvelle fonctionnalité ou correction doit se faire sur une **branche dédiée**.

### Convention de nommage des branches :
| Type de branche | Exemple | Description |
|-----------------|----------|-------------|
| `feat/` | `feat/ajout-authentification` | Nouvelle fonctionnalité |
| `fix/` | `fix/bug-commande` | Correction de bug |
| `docs/` | `docs/mise-a-jour-readme` | Documentation |
| `test/` | `test/ajout-tests-unitaires` | Ajout ou modification de tests |
| `chore/` | `chore/nettoyage-code` | Maintenance, configuration, etc. |

---

##  Workflow PR / MR

Le processus de contribution au projet **Liverooo!** se déroule selon les étapes suivantes :

1. **Créer une nouvelle branche** à partir de `main`  
   → Nommer la branche selon la convention (`feat/`, `fix/`, etc.)

2. **Développer la fonctionnalité ou la correction** sur cette branche.

3. **Faire un commit** en respectant la convention suivante :  
<type>: <courte description>


Exemple :  
feat: ajout du module de commande collective



4. **Pousser la branche** vers le dépôt distant :  
git push origin nom-de-la-branche


5. **Ouvrir une Pull Request (PR)** (ou Merge Request (MR)) vers la branche `main`.

6. **Faire relire la PR/MR** par un autre membre de l’équipe avant le merge.

7. Une fois la revue validée et les tests passés, **fusionner (merge)** la branche dans `main`.

---

 **Résumé du workflow :**  
Créer branche → Commit → Push → Ouvrir PR/MR → Review → Merge


---

##  Conventions de commit

Nous suivons le format **Conventional Commits** pour des messages clairs et homogènes :

<type>: <courte description>



**Exemples :**
feat: ajout du module de commande collective
fix: correction du bug d'affichage des restaurants
docs: mise à jour du guide d’installation
test: ajout des tests unitaires pour l’API
chore: suppression des fichiers temporaires



---

##  Checklist de revue de code

Lors d’une revue de code, vérifier que :

- [ ] Le nom de branche respecte la convention  
- [ ] Les commits sont clairs et bien nommés  
- [ ] Le code est lisible et cohérent  
- [ ] Les tests sont présents et passent avec succès  
- [ ] Aucun fichier inutile ou secret n’est commité  
- [ ] La documentation est mise à jour si nécessaire  

---

##  Definition of Ready (DoR)

Une **user story** est prête lorsqu’elle :
- A des **critères d’acceptation clairs**  
- A toutes les dépendances identifiées  
- A les **maquettes** ou spécifications nécessaires  
- Est **assez petite** pour être réalisée dans un sprint  

---

##  Definition of Done (DoD)

Une **user story** est terminée lorsqu’elle :
- Respecte tous les critères d’acceptation  
- Est **testée et validée** par l’équipe  
- A été **relue et mergée** dans `main`  
- N’introduit **aucune régression**  
- A la documentation mise à jour  

---

Merci de contribuer à **Liverooo!** 
Votre rigueur garantit la qualité du projet et une collaboration fluide.
