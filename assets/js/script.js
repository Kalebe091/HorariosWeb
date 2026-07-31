/* ---------------- Sample / default data ---------------- */
const DEFAULT_DATA = [{"dia": "Seg", "sala": "4", "modalidade": "Presencial", "curso": "Direito", "disciplina": "Direito Processual Penal - Ação Penal e Procedimentos", "professor": "Higor Souza", "semestre": "6° SEMESTRE", "turma": "4831520241A"}, {"dia": "Seg", "sala": "5", "modalidade": "Presencial", "curso": "Psicologia", "disciplina": "MPP - Behaviorismo", "professor": "A Definir", "semestre": "4° SEMESTRE", "turma": "4433820251A"}, {"dia": "Seg", "sala": "6", "modalidade": "Semipresencial", "curso": "Biomedicina", "disciplina": "Introdução à Biologia Celular e do Desenvolvimento", "professor": "Ana Paula", "semestre": "1° e 2° SEMESTRE", "turma": ""}, {"dia": "Seg", "sala": "7", "modalidade": "Semipresencial", "curso": "Farmácia", "disciplina": "Fitoterapia", "professor": "Erick/Amanda", "semestre": "5° E 6° SEMESTRE", "turma": ""}, {"dia": "Seg", "sala": "9", "modalidade": "Semipresencial", "curso": "Nutrição", "disciplina": "Gastronomia Aplicada à Nutrição", "professor": "Mahyá Martins", "semestre": "7º E 8º SEMESTRE", "turma": ""}, {"dia": "Seg", "sala": "10", "modalidade": "Semipresencial", "curso": "Fisioterapia", "disciplina": "Introdução à Biologia Celular e do Desenvolvimento", "professor": "Diosé Lira", "semestre": "1° e 2° SEMESTRE", "turma": ""}, {"dia": "Seg", "sala": "11", "modalidade": "Semipresencial", "curso": "Fisioterapia", "disciplina": "Diagnóstico Cinético-Funcional e Imaginologia - Membros Inferiores e Coluna Vertebral", "professor": "Daise Alves", "semestre": "3º e 4º SEMESTRE", "turma": ""}, {"dia": "Seg", "sala": "12", "modalidade": "Presencial", "curso": "Direito", "disciplina": "Direito Civil - Contratos", "professor": "Janaina Nayara", "semestre": "3° SEMESTRE", "turma": "4831520252A"}, {"dia": "Seg", "sala": "16", "modalidade": "Semipresencial", "curso": "Agronomia", "disciplina": "Controle de Plantas Daninhas", "professor": "Wilkson Sá", "semestre": "5° SEMESTRE", "turma": ""}, {"dia": "Seg", "sala": "17", "modalidade": "Presencial", "curso": "Psicologia", "disciplina": "Psicoterapia Infantojuvenil", "professor": "Viviane Luz", "semestre": "10° SEMESTRE", "turma": "4433820221A"}, {"dia": "Seg", "sala": "18", "modalidade": "Presencial", "curso": "Engenharia Mecânica", "disciplina": "Química e Ciência dos Materiais", "professor": "Elenildo Barros", "semestre": "3° SEMESTRE", "turma": "494620252A"}, {"dia": "Seg", "sala": "19", "modalidade": "Presencial", "curso": "Psicologia", "disciplina": "Psicologia Hospitalar", "professor": "Julia Veloso", "semestre": "8° SEMESTRE", "turma": "4433820231A, 4433820231B"}, {"dia": "Seg", "sala": "20", "modalidade": "Presencial", "curso": "Engenharia Mecânica", "disciplina": "Fenômenos de Transporte", "professor": "Gabriel Nascimento", "semestre": "4° SEMESTRE", "turma": "494620251A"}, {"dia": "Seg", "sala": "29/30", "modalidade": "Presencial", "curso": "Direito", "disciplina": "Direito Civil - Sucessões", "professor": "Lais Moreira", "semestre": "10° SEMESTRE", "turma": "4831520221A, 4831520221B"}, {"dia": "Seg", "sala": "22", "modalidade": "Semipresencial", "curso": "Ciências Contábeis", "disciplina": "Contabilidade de Sociedades de Capital Aberto", "professor": "Lucivan Medina", "semestre": "5° E 6° SEMESTRE", "turma": ""}, {"dia": "Seg", "sala": "27", "modalidade": "Semipresencial", "curso": "Administração", "disciplina": "Pesquisa e Inteligência de Marketing", "professor": "Denise Pinheiro", "semestre": "5° E 6° SEMESTRE", "turma": ""}, {"dia": "Seg", "sala": "36", "modalidade": "Semipresencial", "curso": "Enfermagem", "disciplina": "Tópicos Especiais em Enfermagem", "professor": "Wenison", "semestre": "9° E 10° SEMESTRE", "turma": ""}, {"dia": "Seg", "sala": "29/30", "modalidade": "Presencial", "curso": "Psicologia", "disciplina": "Neuroanatomia", "professor": "Nayana Coutinho", "semestre": "2° SEMESTRE", "turma": "4433820261A"}, {"dia": "Seg", "sala": "31/32", "modalidade": "Presencial", "curso": "Direito", "disciplina": "Direito Internacional", "professor": "Iolindemberg Mendes", "semestre": "8º e 9º SEMESTRE", "turma": "4831520222A, 4831520231A"}, {"dia": "Ter", "sala": "1", "modalidade": "Semipresencial", "curso": "Agronomia", "disciplina": "Física Geral", "professor": "João Victor", "semestre": "2º SEMESTRE", "turma": "TURMA A"}, {"dia": "Ter", "sala": "2", "modalidade": "Presencial", "curso": "Direito", "disciplina": "Direito Processual Civil - Recursos e Tutelas de Causas Repetitivas", "professor": "Claudio Luan", "semestre": "8º e 9º SEMESTRE", "turma": "4831520222A, 4831520231A"}, {"dia": "Ter", "sala": "4", "modalidade": "Semipresencial", "curso": "Engenharia", "disciplina": "Cálculo Diferencial e Integral III", "professor": "Lucimar Pereira", "semestre": "3º e 4º SEMESTRE", "turma": ""}, {"dia": "Ter", "sala": "5", "modalidade": "Semipresencial", "curso": "Engenharia De Produção", "disciplina": "Gestão de Projetos", "professor": "Patrick", "semestre": "4° E 5° SEMESTRE", "turma": ""}, {"dia": "Ter", "sala": "6", "modalidade": "Presencial", "curso": "Psicologia", "disciplina": "MPP - Psicanálise", "professor": "Sandro Ueki", "semestre": "3° SEMESTRE", "turma": "4433820252A"}, {"dia": "Ter", "sala": "7", "modalidade": "Semipresencial", "curso": "Agronomia", "disciplina": "Ciência do Solo - Gênese, Morfologia e Classificação", "professor": "Fernanda Rodrigues", "semestre": "1° SEMESTRE", "turma": ""}, {"dia": "Ter", "sala": "9", "modalidade": "Presencial", "curso": "Psicologia", "disciplina": "Aconselhamento e Orientação", "professor": "Viviane Luz", "semestre": "9° SEMESTRE", "turma": "4433820222A"}, {"dia": "Ter", "sala": "10", "modalidade": "Presencial", "curso": "Psicologia", "disciplina": "Diagnóstico e Intervenção", "professor": "Emylle Leite", "semestre": "7° SEMESTRE", "turma": "4433820232A, 4433820242A"}, {"dia": "Ter", "sala": "11", "modalidade": "Semipresencial", "curso": "Biomedicina", "disciplina": "Instrumentação e Deontologia Biomédica", "professor": "Ana Paula", "semestre": "3° E 4° SEMESTRE", "turma": ""}, {"dia": "Ter", "sala": "12", "modalidade": "Presencial", "curso": "Direito", "disciplina": "Direito Civil - Obrigações", "professor": "Janaina Nayara", "semestre": "3° SEMESTRE", "turma": "4831520252A"}, {"dia": "Ter", "sala": "16", "modalidade": "Semipresencial", "curso": "Administração", "disciplina": "Comércio e Negócios Internacionais", "professor": "Denise Pinheiro", "semestre": "7° E 8° SEMESTRE", "turma": ""}, {"dia": "Ter", "sala": "17", "modalidade": "Presencial", "curso": "Direito", "disciplina": "Direito Processual do Trabalho", "professor": "Iolindemberg Mendes", "semestre": "7° SEMESTRE", "turma": "4831520232A"}, {"dia": "Ter", "sala": "18", "modalidade": "Semipresencial", "curso": "Farmácia", "disciplina": "Biotecnologia e Produção de Alimentos", "professor": "Erick/Amanda", "semestre": "7º E 8º SEMESTRE", "turma": ""}, {"dia": "Ter", "sala": "19", "modalidade": "Semipresencial", "curso": "Fisioterapia", "disciplina": "Fundamentos da Fisioterapia na Atenção Secundária e Terciária", "professor": "Diosé Lira", "semestre": "5° E 6° SEMESTRE", "turma": ""}, {"dia": "Ter", "sala": "20", "modalidade": "Presencial", "curso": "Psicologia", "disciplina": "Clínica Ampliada em Saúde Mental", "professor": "Danianisse Balieiro", "semestre": "10° SEMESTRE", "turma": "4433820221A"}, {"dia": "Ter", "sala": "22", "modalidade": "Semipresencial", "curso": "Ciências Contábeis", "disciplina": "Contabilidade do Agronegócio", "professor": "Lucivan Medina", "semestre": "7º E 8º SEMESTRE", "turma": ""}, {"dia": "Ter", "sala": "23", "modalidade": "Semipresencial", "curso": "Nutrição", "disciplina": "Gestão de Unidades de Alimentação e Nutrição", "professor": "Mahyá Martins", "semestre": "5º E 6º SEMESTRE", "turma": ""}, {"dia": "Ter", "sala": "24", "modalidade": "Semipresencial", "curso": "Pedagogia", "disciplina": "Ludicidade e Educação", "professor": "Eusilaine", "semestre": "3º e 4º SEMESTRE", "turma": ""}, {"dia": "Ter", "sala": "35", "modalidade": "Presencial", "curso": "Engenharia Civil", "disciplina": "Termodinâmica", "professor": "Antenor Neto", "semestre": "6° SEMESTRE", "turma": "496820241A"}, {"dia": "Ter", "sala": "36", "modalidade": "Semipresencial", "curso": "Enfermagem", "disciplina": "Enfermagem na Saúde da Mulher", "professor": "Wenison", "semestre": "5° E 6° SEMESTRE", "turma": ""}, {"dia": "Ter", "sala": "29/30", "modalidade": "Presencial", "curso": "Psicologia", "disciplina": "MPP - Existencial-Humanista", "professor": "Stella Cezimbra", "semestre": "4º e 6º SEMESTRE", "turma": "4433820241A, 4433820251A"}, {"dia": "Ter", "sala": "31/32", "modalidade": "Presencial", "curso": "Direito", "disciplina": "Fundamentos Históricos e Introdução ao Estudo do Direito", "professor": "Lais Moreira", "semestre": "2° SEMESTRE", "turma": "4831520261A"}, {"dia": "Qua", "sala": "1", "modalidade": "Presencial", "curso": "Direito", "disciplina": "Ética Profissional em Direito", "professor": "Celson Cunha", "semestre": "4° SEMESTRE", "turma": "4831520251A, 4831520251B"}, {"dia": "Qua", "sala": "2", "modalidade": "Presencial", "curso": "Psicologia", "disciplina": "MAP I", "professor": "Sandro Ueki", "semestre": "3º e 4º SEMESTRE", "turma": "4433820251A, 4433820252A"}, {"dia": "Qua", "sala": "4", "modalidade": "Presencial", "curso": "Direito", "disciplina": "Direito Processual Civil - Recursos e Tutelas de Causas Repetitivas", "professor": "Claudio Luan", "semestre": "6° SEMESTRE", "turma": "4831520241A"}, {"dia": "Qua", "sala": "5", "modalidade": "Presencial", "curso": "Direito", "disciplina": "Direito Processual Penal - Ação Penal e Procedimentos", "professor": "A Definir", "semestre": "5° SEMESTRE", "turma": "4831520242A"}, {"dia": "Qua", "sala": "6", "modalidade": "Semipresencial", "curso": "Farmácia", "disciplina": "Introdução à Biologia Celular e do Desenvolvimento", "professor": "Erick/Amanda", "semestre": "1° e 2° SEMESTRE", "turma": ""}, {"dia": "Qua", "sala": "7", "modalidade": "Semipresencial", "curso": "Agronomia", "disciplina": "Ciência do Solo - Gênese, Morfologia e Classificação", "professor": "Wilkson Sá", "semestre": "4° SEMESTRE", "turma": ""}, {"dia": "Qua", "sala": "9", "modalidade": "Semipresencial", "curso": "Nutrição", "disciplina": "Introdução à Biologia Celular e do Desenvolvimento", "professor": "Mahyá Martins", "semestre": "1° E 2º SEMESTRE", "turma": ""}, {"dia": "Qua", "sala": "10", "modalidade": "Semipresencial", "curso": "Fonoaudiologia/Terapia Ocupacional", "disciplina": "Olericultura", "professor": "Ana Paula", "semestre": "1° e 2° SEMESTRE", "turma": ""}, {"dia": "Qua", "sala": "11", "modalidade": "Semipresencial", "curso": "Administração", "disciplina": "Teorias da Administração", "professor": "Denise Pinheiro", "semestre": "3° E 4° SEMESTRE", "turma": ""}, {"dia": "Qua", "sala": "12", "modalidade": "Presencial", "curso": "Engenharia Mecânica", "disciplina": "Princípios de Eletricidade e Magnetismo", "professor": "Jhosefy Conde", "semestre": "2º e 5º SEMESTRE", "turma": "494620242A, 494620251A, 494620252A, 494620261A"}, {"dia": "Qua", "sala": "16", "modalidade": "Semipresencial", "curso": "Biomedicina", "disciplina": "Relações Parasitas e Hospedeiros", "professor": "Ana Paula", "semestre": "5° E 6° SEMESTRE", "turma": ""}, {"dia": "Qua", "sala": "17", "modalidade": "Semipresencial", "curso": "Engenharia Mecânica", "disciplina": "Fundição e Processos Siderúrgicos", "professor": "Lucimar - Elika", "semestre": "5° E 6° SEMESTRE", "turma": ""}, {"dia": "Qua", "sala": "18", "modalidade": "Semipresencial", "curso": "Engenharia De Produção", "disciplina": "Gestão de Operações e Serviços", "professor": "Patrick", "semestre": "8° SEMESTRE", "turma": ""}, {"dia": "Qua", "sala": "19", "modalidade": "Semipresencial", "curso": "Agronomia", "disciplina": "Controle de Plantas Daninhas", "professor": "Arthur", "semestre": "6° SEMESTRE", "turma": ""}, {"dia": "Qua", "sala": "21", "modalidade": "Presencial", "curso": "Direito", "disciplina": "Direito Internacional", "professor": "Iolindemberg Mendes", "semestre": "10° SEMESTRE", "turma": "4831520221A, 4831520221B"}, {"dia": "Qua", "sala": "22", "modalidade": "Semipresencial", "curso": "Fisioterapia", "disciplina": "Fisioterapia na Atenção Terciária", "professor": "Daise Alves", "semestre": "7º E 8º SEMESTRE", "turma": ""}, {"dia": "Qua", "sala": "23", "modalidade": "Semipresencial", "curso": "Ciências Contábeis", "disciplina": "Teoria da Contabilidade", "professor": "Lucivan Medina", "semestre": "3º e 4º SEMESTRE", "turma": ""}, {"dia": "Qua", "sala": "24", "modalidade": "Presencial", "curso": "Psicologia", "disciplina": "Teorias e Técnicas Psi Especiais", "professor": "Emylle Leite", "semestre": "8° SEMESTRE", "turma": "4433820231A"}, {"dia": "Qua", "sala": "25", "modalidade": "Presencial", "curso": "Engenharia Civil", "disciplina": "Instalações Hidrossanitárias", "professor": "Valerry Garcia", "semestre": "10° SEMESTRE", "turma": "494620221A, 494620231A"}, {"dia": "Qua", "sala": "26", "modalidade": "Semipresencial", "curso": "Enfermagem", "disciplina": "Processo de Cuidar em Enfermagem", "professor": "Wenison", "semestre": "3º e 4º SEMESTRE", "turma": ""}, {"dia": "Qua", "sala": "27", "modalidade": "Semipresencial", "curso": "Pedagogia", "disciplina": "Ensino e Aprendizagem da Geografia e História", "professor": "Eusilaine", "semestre": "5° E 6° SEMESTRE", "turma": ""}, {"dia": "Qua", "sala": "35", "modalidade": "Presencial", "curso": "Engenharia Civil", "disciplina": "Elementos de Máquinas Avançado", "professor": "Antenor Neto", "semestre": "3º e 6º SEMESTRE", "turma": "496820241A, 496820252A"}, {"dia": "Qua", "sala": "29/30", "modalidade": "Presencial", "curso": "Psicologia", "disciplina": "Psicologia Ciência e Profissão", "professor": "Danianisse Balieiro", "semestre": "2° SEMESTRE", "turma": "4433820261A"}, {"dia": "Qua", "sala": "31/32", "modalidade": "Presencial", "curso": "Psicologia", "disciplina": "MPP - Cognitivo-Comportamental", "professor": "Julia Veloso", "semestre": "5º 6º e 7º SEMESTRE", "turma": "4433820232A, 4433820241A, 4433820242A"}, {"dia": "Qua", "sala": "33/34", "modalidade": "Semipresencial", "curso": "Agronomia", "disciplina": "Física Geral", "professor": "João Victor", "semestre": "2º SEMESTRE", "turma": "TURMA B"}, {"dia": "Qui", "sala": "2", "modalidade": "Presencial", "curso": "Direito", "disciplina": "Direito Penal - Dos Crimes em Espécie", "professor": "Luiz Paulo", "semestre": "4° SEMESTRE", "turma": "4831520251A, 4831520251B"}, {"dia": "Qui", "sala": "4", "modalidade": "Presencial", "curso": "Direito", "disciplina": "Direito Coletivo do Trabalho e Tutelas Coletivas", "professor": "Iolindemberg Mendes", "semestre": "6° SEMESTRE", "turma": "4831520241A"}, {"dia": "Qui", "sala": "5", "modalidade": "Presencial", "curso": "Direito", "disciplina": "Direito Coletivo do Trabalho e Tutelas Coletivas", "professor": "Iolindemberg Mendes", "semestre": "5° SEMESTRE", "turma": "4831520242A"}, {"dia": "Qui", "sala": "6", "modalidade": "Presencial", "curso": "Psicologia", "disciplina": "Metodologia de Pesquisa Psi", "professor": "Nayana Coutinho", "semestre": "3° SEMESTRE", "turma": "4433820252A"}, {"dia": "Qui", "sala": "7", "modalidade": "Semipresencial", "curso": "Engenharia Mecânica", "disciplina": "Comandos Hidráulicos e Pneumáticos", "professor": "Patrick", "semestre": "7º E 8º SEMESTRE", "turma": ""}, {"dia": "Qui", "sala": "9", "modalidade": "Semipresencial", "curso": "Farmácia", "disciplina": "Biotecnologia e Produção de Alimentos", "professor": "Erick/Amanda", "semestre": "9° E 10° SEMESTRE", "turma": ""}, {"dia": "Qui", "sala": "10", "modalidade": "Semipresencial", "curso": "Engenharia", "disciplina": "Algoritmos e Lógica de Programação", "professor": "Lucimar Pereira", "semestre": "1° e 2° SEMESTRE", "turma": ""}, {"dia": "Qui", "sala": "11", "modalidade": "Semipresencial", "curso": "Administração E Ciências Contábeis", "disciplina": "Matemática Financeira", "professor": "Denise Pinheiro", "semestre": "1° e 2° SEMESTRE", "turma": ""}, {"dia": "Qui", "sala": "12", "modalidade": "Semipresencial", "curso": "Nutrição", "disciplina": "Higiene e Microbiologia dos Alimentos", "professor": "Mahyá Martins", "semestre": "3º e 4º SEMESTRE", "turma": ""}, {"dia": "Qui", "sala": "16", "modalidade": "Semipresencial", "curso": "Agronomia", "disciplina": "Física Geral", "professor": "Fernanda Rodrigues", "semestre": "3° SEMESTRE", "turma": ""}, {"dia": "Qui", "sala": "17", "modalidade": "Presencial", "curso": "Direito", "disciplina": "Direito Civil - Família", "professor": "Maria Clara", "semestre": "7° SEMESTRE", "turma": "4831520232A"}, {"dia": "Qui", "sala": "18", "modalidade": "Semipresencial", "curso": "Biomedicina", "disciplina": "Estética Aplicada nas Intervenções Médicas", "professor": "Ana Paula", "semestre": "7° E 8° SEMESTRE", "turma": ""}, {"dia": "Qui", "sala": "20", "modalidade": "Presencial", "curso": "Engenharia Civil/Mecânica", "disciplina": "Legislação, Segurança do Trabalho e Meio Ambiente", "professor": "Gabriel Nascimento", "semestre": "4º e 5º SEMESTRE", "turma": "494620231A, 494620241A, 496820222A, 496820241A, 496820252A"}, {"dia": "Qui", "sala": "21", "modalidade": "Semipresencial", "curso": "Engenharia Mecânica", "disciplina": "Motores de Combustão Interna", "professor": "Elika - Patrick", "semestre": "9º E 10º SEMESTRE", "turma": ""}, {"dia": "Qui", "sala": "22", "modalidade": "Semipresencial", "curso": "Fisioterapia", "disciplina": "Fisioterapia na Saúde do Trabalhador", "professor": "Diosé Lira", "semestre": "9° E 10° SEMESTRE", "turma": ""}, {"dia": "Qui", "sala": "25", "modalidade": "Presencial", "curso": "Engenharia Mecânica", "disciplina": "Pontes e Grandes Estruturas", "professor": "Valerry Garcia", "semestre": "1º e 10º SEMESTRE", "turma": "494620221A, 494620231A, 494620261A"}, {"dia": "Qui", "sala": "26", "modalidade": "Semipresencial", "curso": "Agronomia", "disciplina": "Olericultura", "professor": "Khayo Cardoso", "semestre": "9° E 10° SEMESTRE", "turma": ""}, {"dia": "Qui", "sala": "27", "modalidade": "Semipresencial", "curso": "Agronomia", "disciplina": "Máquinas e Mecanização Agrícola", "professor": "João Victor", "semestre": "7º e 8º  SEMESTRE", "turma": ""}, {"dia": "Qui", "sala": "36", "modalidade": "Semipresencial", "curso": "Enfermagem", "disciplina": "Enfermagem em Centro Cirúrgico", "professor": "Wenison", "semestre": "7º E 8º SEMESTRE", "turma": ""}, {"dia": "Qui", "sala": "29/30", "modalidade": "Presencial", "curso": "Psicologia", "disciplina": "História da Psicologia", "professor": "Stella Cezimbra", "semestre": "2° SEMESTRE", "turma": "4433820261A"}, {"dia": "Qui", "sala": "31/32", "modalidade": "Presencial", "curso": "Direito", "disciplina": "Teoria Geral do Processo", "professor": "Beatriz Sharon", "semestre": "2° SEMESTRE", "turma": "4831520261A"}, {"dia": "Qui", "sala": "33/34", "modalidade": "Presencial", "curso": "Psicologia", "disciplina": "Psi Social Avançada", "professor": "Clauber Torres", "semestre": "5º e 6º SEMESTRE", "turma": "4433820241A, 4433820242A"}, {"dia": "Sex", "sala": "2", "modalidade": "Presencial", "curso": "Psicologia", "disciplina": "Teorias e Técnicas Psi Gerais", "professor": "Viviane Luz", "semestre": "8° SEMESTRE", "turma": "4433820231A, 4433820231B"}, {"dia": "Sex", "sala": "4", "modalidade": "Presencial", "curso": "Psicologia", "disciplina": "Psicologia Escolar e Educacional", "professor": "Stella Cezimbra", "semestre": "6º e 7º SEMESTRE", "turma": "4433820232A, 4433820241A"}, {"dia": "Sex", "sala": "6", "modalidade": "Semipresencial", "curso": "Farmácia", "disciplina": "Biotecnologia e Produção de Alimentos", "professor": "Erick/Amanda", "semestre": "3º e 4º SEMESTRE", "turma": ""}, {"dia": "Sex", "sala": "7", "modalidade": "Semipresencial", "curso": "Engenharia Elétrica", "disciplina": "Engenharia de Software", "professor": "Elika Sousa", "semestre": "8º SEMESTRE", "turma": ""}, {"dia": "Sex", "sala": "9", "modalidade": "Presencial", "curso": "Engenharia Civil", "disciplina": "Manufatura Mecânica - Conformação e Soldagem", "professor": "Gabriel Nascimento", "semestre": "10° SEMESTRE", "turma": "496820222A"}, {"dia": "Sex", "sala": "10", "modalidade": "Semipresencial", "curso": "Pedagogia", "disciplina": "Infância em Foco: Teorias e Práticas", "professor": "Eusilaine", "semestre": "1° e 2° SEMESTRE", "turma": ""}, {"dia": "Sex", "sala": "12", "modalidade": "Presencial", "curso": "Engenharia Mecânica", "disciplina": "Física Geral e Experimental - Mecânica", "professor": "Jhosefy Conde", "semestre": "2° SEMESTRE", "turma": "494620261A"}, {"dia": "Sex", "sala": "18", "modalidade": "Presencial", "curso": "Engenharia Mecânica", "disciplina": "Fenômenos de Transporte", "professor": "Elenildo Barros", "semestre": "4° SEMESTRE", "turma": "494620251A"}, {"dia": "Sex", "sala": "18", "modalidade": "Presencial", "curso": "Engenharia Civil", "disciplina": "Metrologia e Controle Geométrico", "professor": "Elenildo Barros", "semestre": "6° SEMESTRE", "turma": "496820241A"}, {"dia": "Sex", "sala": "25", "modalidade": "Presencial", "curso": "Engenharia Mecânica", "disciplina": "Materiais de Construção Civil I", "professor": "Valerry Garcia", "semestre": "4º e 5º SEMESTRE", "turma": "494620241A, 494620242A, 494620251A"}, {"dia": "Sex", "sala": "35", "modalidade": "Presencial", "curso": "Engenharia Civil", "disciplina": "Máquinas de Fluxo", "professor": "Antenor Neto", "semestre": "3° SEMESTRE", "turma": "496820252A"}, {"dia": "Sex", "sala": "29/30", "modalidade": "Presencial", "curso": "Psicologia", "disciplina": "Psicologia e Políticas Públicas", "professor": "Clauber Torres", "semestre": "2° SEMESTRE", "turma": "4433820261A"}, {"dia": "Sex", "sala": "33/34", "modalidade": "Presencial", "curso": "Direito", "disciplina": "Direito do Trabalho", "professor": "Iolindemberg Mendes", "semestre": "2º e 3º SEMESTRE", "turma": "4831520261A, 4831520252A"}];

const DAY_ORDER = {"Seg":1,"Ter":2,"Qua":3,"Qui":4,"Sex":5,"Sáb":6,"Sab":6,"Dom":7};

const FIELDS = [
  {key:"dia", label:"Dia"},
  {key:"sala", label:"Sala"},
  {key:"curso", label:"Curso"},
  {key:"semestre", label:"Semestre"},
  {key:"turma", label:"Turma"},
  {key:"professor", label:"Professor/Mediador"},
];

let allData = [];
let quickQuery = "";
let activeFilters = {};
let mode = "all"; // all | student | teacher

/* ---------------- Rendering ---------------- */
function uniqueSorted(list){
  return [...new Set(list)].sort((a,b)=> a.localeCompare(b, 'pt-BR', {numeric:true}));
}

function visibleFieldsForMode(){
  if(mode === "student") return ["curso","semestre","turma"];
  if(mode === "teacher") return ["professor"];
  return FIELDS.map(f=>f.key);
}

function renderFilters(){
  const grid = document.getElementById('filterGrid');
  const title = document.getElementById('filtersTitle');
  const visible = visibleFieldsForMode();

  title.textContent = mode === "student" ? "Encontre a grade da sua turma"
    : mode === "teacher" ? "Encontre suas aulas"
    : "Filtrar horários";

  grid.innerHTML = "";
  FIELDS.filter(f => visible.includes(f.key)).forEach(f=>{
    const values = uniqueSorted(allData.map(d => d[f.key]).filter(Boolean));
    const wrap = document.createElement('div');
    wrap.className = 'field';

    if(f.key === 'professor' && mode === 'teacher'){
      wrap.innerHTML = `<label for="filter-${f.key}">${f.label}</label>
        <input list="list-${f.key}" id="filter-${f.key}" placeholder="Digite seu nome...">
        <datalist id="list-${f.key}">${values.map(v=>`<option value="${escapeHtml(v)}">`).join('')}</datalist>`;
    } else {
      wrap.innerHTML = `<label for="filter-${f.key}">${f.label}</label>
        <select id="filter-${f.key}">
          <option value="">Todos</option>
          ${values.map(v=>`<option value="${escapeHtml(v)}">${escapeHtml(v)}</option>`).join('')}
        </select>`;
    }
    grid.appendChild(wrap);
  });

  visible.forEach(key=>{
    const el = document.getElementById('filter-'+key);
    if(!el) return;
    el.value = activeFilters[key] || "";
    const evt = el.tagName === 'INPUT' ? 'input' : 'change';
    el.addEventListener(evt, ()=>{
      activeFilters[key] = el.value.trim();
      renderTable();
    });
  });
}

function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}

function getFilteredSorted(){
  const visible = visibleFieldsForMode();
  let rows = allData.filter(row=>{
    for(const key of visible){
      const fv = (activeFilters[key]||"").toLowerCase();
      if(!fv) continue;
      const cell = (row[key]||"").toLowerCase();
      if(key === 'professor'){
        if(!cell.includes(fv)) return false;
      } else {
        if(cell !== fv) return false;
      }
    }
    if(quickQuery){
      const hay = Object.values(row).join(' ').toLowerCase();
      if(!hay.includes(quickQuery.toLowerCase())) return false;
    }
    return true;
  });

  rows.sort((a,b)=>{
    const da = DAY_ORDER[a.dia] || 99;
    const db = DAY_ORDER[b.dia] || 99;
    if(da !== db) return da - db;
    const sa = parseInt(a.sala,10); const sb = parseInt(b.sala,10);
    if(!isNaN(sa) && !isNaN(sb) && sa !== sb) return sa - sb;
    return String(a.sala).localeCompare(String(b.sala), 'pt-BR', {numeric:true});
  });
  return rows;
}

function renderTable(){
  const rows = getFilteredSorted();
  document.getElementById('resultCount').innerHTML =
    rows.length === 0 ? '' : `<b>${rows.length}</b> horário${rows.length===1?'':'s'} encontrado${rows.length===1?'':'s'}`;

  const wrap = document.getElementById('tableWrap');

  if(rows.length === 0){
    wrap.innerHTML = `
      <div class="empty-state">
        <div class="tri"></div>
        <b>Nenhum horário encontrado</b>
        Tente ajustar os filtros ou a busca.
      </div>`;
    return;
  }

  wrap.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Dia</th><th>Sala</th><th>Modalidade</th><th>Curso</th><th>Disciplina</th>
          <th>Professor/Mediador</th><th>Semestre</th><th>Turma</th>
        </tr>
      </thead>
      <tbody>
        ${rows.map(r => `
          <tr>
            <td class="dia">${escapeHtml(r.dia||'')}</td>
            <td>${escapeHtml(r.sala||'')}</td>
            <td><span class="badge ${/online|ead|remot/i.test(r.modalidade||'')?'online':''}">${escapeHtml(r.modalidade||'-')}</span></td>
            <td>${escapeHtml(r.curso||'')}</td>
            <td class="disciplina">${escapeHtml(r.disciplina||'')}</td>
            <td>${escapeHtml(r.professor||'')}</td>
            <td>${escapeHtml(r.semestre||'')}</td>
            <td>${escapeHtml(r.turma||'')}</td>
          </tr>`).join('')}
      </tbody>
    </table>`;
}

/* ---------------- Mode switching ---------------- */
document.getElementById('modes').addEventListener('click', (e)=>{
  const btn = e.target.closest('.mode-btn');
  if(!btn) return;
  document.querySelectorAll('.mode-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  mode = btn.dataset.mode;
  activeFilters = {};
  renderFilters();
  renderTable();
});

document.getElementById('quickSearch').addEventListener('input', (e)=>{
  quickQuery = e.target.value;
  renderTable();
});

document.getElementById('clearFilters').addEventListener('click', ()=>{
  activeFilters = {};
  quickQuery = "";
  document.getElementById('quickSearch').value = "";
  renderFilters();
  renderTable();
});

/* ---------------- Init ---------------- */
(function init(){
  allData = DEFAULT_DATA;
  renderFilters();
  renderTable();
})();