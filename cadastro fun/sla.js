
document.getElementById('cep').addEventListener('input', (e) => {
  let v = e.target.value.replace(/\D/g, '').slice(0, 8);
  if (v.length > 5) v = v.slice(0, 5) + '-' + v.slice(5);
  e.target.value = v;
});


document.getElementById('cpf').addEventListener('input', (e) => {
  let v = e.target.value.replace(/\D/g, '').slice(0, 11);
  v = v.replace(/(\d{3})(\d)/, '$1.$2')
       .replace(/(\d{3})(\d)/, '$1.$2')
       .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  e.target.value = v;
});


document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();

  const senha = document.getElementById('senha').value;
  const confirmar = document.getElementById('confirmarSenha').value;

  if (senha !== confirmar) {
    alert('As senhas não coincidem.');
    return;
  }

  alert('Cadastro realizado com sucesso!');
  e.target.reset();
})
