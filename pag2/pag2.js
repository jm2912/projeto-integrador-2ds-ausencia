        const professores = [
            { id: 1, nome: "Ana Silva", turma: "9º Ano A", presente: false },
            { id: 2, nome: "Mateus Maidel", turma: "2ºDS", presente: true },
            { id: 3, nome: "Mariana Costa", turma: "3º Ano EM", presente: false },
            { id: 4, nome: "Ricardo Oliveira", turma: "8º Ano B", presente: true }
        ];

        const tableBody = document.getElementById('teacher-table-body');
        
        function renderTable() {
            tableBody.innerHTML = '';

            professores.forEach(prof => {
                const tr = document.createElement('tr');
                if (prof.presente) {
                    tr.classList.add('is-present');
                }

                tr.innerHTML = `
                    <td><strong>${prof.nome}</strong></td>
                    <td>${prof.turma}</td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" ${prof.presente ? 'checked' : ''} onchange="togglePresenca(${prof.id}, this)">
                            <span class="slider"></span>
                        </label>
                    </td>
                `;
                tableBody.appendChild(tr);
            });
        }

        // Função para alternar o estado de presença e atualizar a classe da linha
        function togglePresenca(id, checkbox) {
            const professor = professores.find(p => p.id === id);
            if (professor) {
                professor.presente = checkbox.checked;
                
                // Atualiza o fundo da linha visualmente sem precisar dar um refresh na tabela inteira
                const row = checkbox.closest('tr');
                if (checkbox.checked) {
                    row.classList.add('is-present');
                } else {
                    row.classList.remove('is-present');
                }
            }
        }

        // Inicializa a tabela ao carregar a página
        renderTable();
