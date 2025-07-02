<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Login - @Mih_Estelar</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #121212;
      color: #f00;
      font-family: Arial, sans-serif;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    #loginContent {
      background: #1e1e1e;
      padding: 30px 25px;
      border-radius: 15px;
      box-shadow: 0 0 20px #ff6666aa;
      width: 360px;
      text-align: center;
    }
    #loginContent h1 {
      font-size: 3rem;
      margin-bottom: 15px;
      text-shadow: 0 0 8px #ff9999cc;
      color: #ff9999;
    }
    #loginContent p {
      font-size: 1.2rem;
      margin-bottom: 30px;
      color: #ffb3b3;
    }
    #loginContent input[type="text"],
    #loginContent input[type="email"] {
      width: 100%;
      padding: 14px 15px;
      margin-bottom: 20px;
      border-radius: 30px;
      border: 2px solid #ff6666;
      background-color: #2a2a2a;
      color: #ffcccc;
      font-size: 1.1rem;
      box-sizing: border-box;
    }
    #loginContent input:focus {
      border-color: #ff9999;
      outline: none;
      background-color: #3a3a3a;
    }
    #loginContent button {
      width: 100%;
      padding: 14px 0;
      background-color: #ff0000;
      border: none;
      border-radius: 30px;
      font-size: 1.2rem;
      font-weight: 700;
      color: white;
      cursor: pointer;
      box-shadow: 0 0 15px #ff0000aa;
      transition: background-color 0.3s ease;
    }
    #loginContent button:hover {
      background-color: #cc0000;
    }
  </style>
</head>
<body>
  <div id="loginContent">
    <h1>Bem-vindo!</h1>
    <p>Por favor, coloque seu nome e Gmail</p>
    <input type="text" id="nome" placeholder="Seu nome" />
    <input type="email" id="email" placeholder="Seu Gmail" />
    <button onclick="entrar()">Começar</button>
  </div>

  <script>
    function entrar() {
      const nome = document.getElementById('nome').value.trim();
      const email = document.getElementById('email').value.trim();

      if (!nome || !email) {
        alert('Por favor, preencha seu nome e Gmail.');
        return;
      }

      // Passa o nome e email via query string para a segunda página
      const params = new URLSearchParams({ nome, email });
      window.location.href = 'canal.html?' + params.toString();
    }
  </script>
</body>
</html>
