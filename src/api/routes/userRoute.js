/**
* @swagger
* /user/register:
*   post:
*     summary: Enregistre un nouvel utilisateur
*     tags: [Utilisateurs]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             required:
*               - name
*               - email
*               - password
*             properties:
*               name:
*                 type: string
*               role:
*                 type: string
*                 enum: [user, admin]
*                 default: user
*               email:
*                 type: string
*                 format: email
*               password:
*                 type: string
*     responses:
*       200:
*         description: Utilisateur enregistré avec succès
*       400:
*         description: Données invalides
*       500:
*         description: Erreur serveur
* @swagger
* /user/login:
*   post:
*     summary: Connecte un utilisateur
*     tags: [Utilisateurs]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             required:
*               - email
*               - password
*             properties:
*               email:
*                 type: string
*                 format: email
*               password:
*                 type: string
*     responses:
*       200:
*         description: Connexion réussie
*       401:
*         description: Authentification échouée
*       500:
*         description: Erreur serveur
*/

module.exports = (server) => {
    const userController = require("../controllers/userController");
    
    server.post("/users/register", userController.userRegister);
    server.post("/users/login", userController.userLogin);
}