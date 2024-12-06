// Seleção de elementos
const paymentModal = document.getElementById('paymentModal');
const closeModal = document.querySelector('.close');

// Função para abrir o pop-up
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
        paymentModal.style.display = 'flex';
    });
});

// Fecha o pop-up ao clicar no "X"
closeModal.addEventListener('click', () => {
    paymentModal.style.display = 'none';
});

// Fecha o pop-up ao clicar fora dele
window.addEventListener('click', (e) => {
    if (e.target === paymentModal) {
        paymentModal.style.display = 'none';
    }
});

// Ações de pagamento
document.getElementById('cardPayment').addEventListener('click', () => {
    alert('Pagamento via Cartão selecionado!');
    paymentModal.style.display = 'none';
});

document.getElementById('pixPayment').addEventListener('click', () => {
    alert('Pagamento via Pix selecionado!');
    paymentModal.style.display = 'none';
});
document.getElementById('boletoPayment').addEventListener('click', () => {
    alert('Pagamento via Boleto selecionado!');
    paymentModal.style.display = 'none';
});