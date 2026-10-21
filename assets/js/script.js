const DEFAULT_DATA = [
  { "dia": "Seg", "sala": "01", "modalidade": "PRESENCIAL", "curso": "DIREITO", "disciplina": "Direito Processual Penal - Ação Penal e Procedimentos", "professor": "HIGOR SOUZA", "semestre": "6º SEMESTRE", "turma": "4831520241A" },
  { "dia": "Seg", "sala": "02", "modalidade": "PRESENCIAL", "curso": "PSICOLOGIA", "disciplina": "Psicologia Hospitalar", "professor": "JULIA VELOSO", "semestre": "8º SEMESTRE", "turma": "4433820231A, 4433820231B" },
  { "dia": "Seg", "sala": "04", "modalidade": "PRESENCIAL", "curso": "DIREITO", "disciplina": "Teoria Geral do Direito Constitucional", "professor": "BEATRIZ SHARON", "semestre": "1º SEMESTRE", "turma": "4831520262A" },
  { "dia": "Seg", "sala": "05", "modalidade": "PRESENCIAL", "curso": "PSICOLOGIA", "disciplina": "MPP - Psicanálise", "professor": "DANIANISSE BALIEIRO", "semestre": "4º SEMESTRE", "turma": "4433820251A" },
  { "dia": "Seg", "sala": "06", "modalidade": "SEMIPRESENCIAL", "curso": "BIOMEDICINA", "disciplina": "Introdução à Biologia Celular e do Desenvolvimento", "professor": "ANA PAULA", "semestre": "1º e 2º SEMESTRE", "turma": "" },
  { "dia": "Seg", "sala": "07", "modalidade": "SEMIPRESENCIAL", "curso": "FARMÁCIA", "disciplina": "Fitoterapia", "professor": "BRENO", "semestre": "5º E 6º SEMESTRE", "turma": "" },
  { "dia": "Seg", "sala": "09", "modalidade": "SEMIPRESENCIAL", "curso": "NUTRIÇÃO", "disciplina": "Gastronomia Aplicada à Nutrição", "professor": "MAHYÁ MARTINS", "semestre": "7º E 8º SEMESTRE", "turma": "" },
  { "dia": "Seg", "sala": "10", "modalidade": "SEMIPRESENCIAL", "curso": "FISIOTERAPIA", "disciplina": "Introdução à Biologia Celular e do Desenvolvimento", "professor": "DIOSÉ LIRA", "semestre": "1º e 2º SEMESTRE", "turma": "" },
  { "dia": "Seg", "sala": "11", "modalidade": "SEMIPRESENCIAL", "curso": "FISIOTERAPIA", "disciplina": "Diagnóstico Cinético-Funcional e Imaginologia - Membros Inferiores e Coluna Vertebral", "professor": "DAISE ALVES", "semestre": "3º e 4º SEMESTRE", "turma": "" },
  { "dia": "Seg", "sala": "12", "modalidade": "PRESENCIAL", "curso": "DIREITO", "disciplina": "Direito Civil - Contratos", "professor": "JANAÍNA NAYARA", "semestre": "3º SEMESTRE", "turma": "4831520252A" },
  { "dia": "Seg", "sala": "16", "modalidade": "SEMIPRESENCIAL", "curso": "AGRONOMIA", "disciplina": "Controle de Plantas Daninhas", "professor": "WILKSON SÁ", "semestre": "5º SEMESTRE", "turma": "" },
  { "dia": "Seg", "sala": "17", "modalidade": "PRESENCIAL", "curso": "PSICOLOGIA", "disciplina": "Psicoterapia Infantojuvenil", "professor": "VIVIANE LUZ", "semestre": "10º SEMESTRE", "turma": "4433820221A" },
  { "dia": "Seg", "sala": "18", "modalidade": "PRESENCIAL", "curso": "ENGENHARIA MECÂNICA", "disciplina": "Química e Ciência dos Materiais", "professor": "ELENILDO BARROS", "semestre": "3º SEMESTRE", "turma": "494620252A" },
  { "dia": "Seg", "sala": "22", "modalidade": "SEMIPRESENCIAL", "curso": "CIÊNCIAS CONTÁBEIS", "disciplina": "Contabilidade de Sociedades de Capital Aberto", "professor": "LUCIVAN MEDINA", "semestre": "5º E 6º SEMESTRE", "turma": "" },
  { "dia": "Seg", "sala": "26", "modalidade": "PRESENCIAL", "curso": "ENGENHARIA MECÂNICA", "disciplina": "Fenômenos de Transporte", "professor": "GABRIEL NASCIMENTO", "semestre": "4º SEMESTRE", "turma": "494620251A" },
  { "dia": "Seg", "sala": "27", "modalidade": "SEMIPRESENCIAL", "curso": "ADMINISTRAÇÃO", "disciplina": "Pesquisa e Inteligência de Marketing", "professor": "TAYS CARVALHO", "semestre": "5º E 6º SEMESTRE", "turma": "" },
  { "dia": "Seg", "sala": "35", "modalidade": "PRESENCIAL", "curso": "PSICOLOGIA", "disciplina": "História da Psicologia", "professor": "STELLA CEZIMBRA", "semestre": "1º SEMESTRE", "turma": "4433820261A" },
  { "dia": "Seg", "sala": "36", "modalidade": "SEMIPRESENCIAL", "curso": "ENFERMAGEM", "disciplina": "Tópicos Especiais em Enfermagem", "professor": "WENISON", "semestre": "9º E 10º SEMESTRE", "turma": "" },
  { "dia": "Seg", "sala": "29/30", "modalidade": "PRESENCIAL", "curso": "DIREITO", "disciplina": "Direito Civil - Sucessões", "professor": "LAIS MOREIRA", "semestre": "10º SEMESTRE", "turma": "4831520221A, 4831520221B" },
  { "dia": "Seg", "sala": "31/32", "modalidade": "PRESENCIAL", "curso": "DIREITO", "disciplina": "Direito Internacional", "professor": "IOLINDEMBERG MENDES", "semestre": "8º e 9º SEMESTRE", "turma": "4831520222A, 4831520231A" },
  { "dia": "Seg", "sala": "33/34", "modalidade": "PRESENCIAL", "curso": "PSICOLOGIA", "disciplina": "Neuroanatomia", "professor": "NAYANA COUTINHO", "semestre": "2º SEMESTRE", "turma": "4433820261A" },

  // TERÇA-FEIRA
  { "dia": "Ter", "sala": "01", "modalidade": "SEMIPRESENCIAL", "curso": "AGRONOMIA", "disciplina": "Física Geral", "professor": "JOÃO VICTOR", "semestre": "2º SEMESTRE", "turma": "TURMA A" },
  { "dia": "Ter", "sala": "02", "modalidade": "PRESENCIAL", "curso": "DIREITO", "disciplina": "Direito Processual Civil - Recursos e Tutelas de Causas Repetitivas", "professor": "CLAUDIO LUAN", "semestre": "8º e 9º SEMESTRE", "turma": "4831520222A, 4831520231A" },
  { "dia": "Ter", "sala": "04", "modalidade": "SEMIPRESENCIAL", "curso": "ENGENHARIA", "disciplina": "Cálculo Diferencial e Integral III", "professor": "A DEFINIR", "semestre": "3º e 4º SEMESTRE", "turma": "" },
  { "dia": "Ter", "sala": "05", "modalidade": "SEMIPRESENCIAL", "curso": "NUTRIÇÃO", "disciplina": "Gestão de Unidades de Alimentação e Nutrição", "professor": "MAHYÁ MARTINS", "semestre": "5º E 6º SEMESTRE", "turma": "" },
  { "dia": "Ter", "sala": "06", "modalidade": "PRESENCIAL", "curso": "PSICOLOGIA", "disciplina": "MPP - Psicanálise", "professor": "SANDRO UEKI", "semestre": "3º SEMESTRE", "turma": "4433820252A" },
  { "dia": "Ter", "sala": "07", "modalidade": "SEMIPRESENCIAL", "curso": "AGRONOMIA", "disciplina": "Ciência do Solo - Gênese, Morfologia e Classificação", "professor": "FERNANDA RODRIGUES", "semestre": "1º SEMESTRE", "turma": "" },
  { "dia": "Ter", "sala": "09", "modalidade": "PRESENCIAL", "curso": "PSICOLOGIA", "disciplina": "Aconselhamento e Orientação", "professor": "VIVIANE LUZ", "semestre": "9º SEMESTRE", "turma": "4433820222A" },
  { "dia": "Ter", "sala": "10", "modalidade": "PRESENCIAL", "curso": "PSICOLOGIA", "disciplina": "Diagnóstico e Intervenção", "professor": "EMYLLE LEITE", "semestre": "7º SEMESTRE", "turma": "4433820232A, 4433820242A" },
  { "dia": "Ter", "sala": "11", "modalidade": "SEMIPRESENCIAL", "curso": "BIOMEDICINA", "disciplina": "Instrumentação e Deontologia Biomédica", "professor": "ANA PAULA", "semestre": "3º E 4º SEMESTRE", "turma": "" },
  { "dia": "Ter", "sala": "12", "modalidade": "PRESENCIAL", "curso": "DIREITO", "disciplina": "Direito Civil - Obrigações", "professor": "JANAÍNA NAYARA", "semestre": "3º SEMESTRE", "turma": "4831520252A" },
  { "dia": "Ter", "sala": "16", "modalidade": "SEMIPRESENCIAL", "curso": "ADMINISTRAÇÃO", "disciplina": "Comércio e Negócios Internacionais", "professor": "TAYS CARVALHO", "semestre": "7º E 8º SEMESTRE", "turma": "" },
  { "dia": "Ter", "sala": "17", "modalidade": "PRESENCIAL", "curso": "DIREITO", "disciplina": "Direito Processual do Trabalho", "professor": "IOLINDEMBERG MENDES", "semestre": "7º SEMESTRE", "turma": "4831520232A" },
  { "dia": "Ter", "sala": "18", "modalidade": "SEMIPRESENCIAL", "curso": "FARMÁCIA", "disciplina": "Biotecnologia e Produção de Alimentos", "professor": "BRENO", "semestre": "7º E 8º SEMESTRE", "turma": "" },
  { "dia": "Ter", "sala": "22", "modalidade": "SEMIPRESENCIAL", "curso": "CIÊNCIAS CONTÁBEIS", "disciplina": "Contabilidade do Agronegócio", "professor": "LUCIVAN MEDINA", "semestre": "7º E 8º SEMESTRE", "turma": "" },
  { "dia": "Ter", "sala": "23", "modalidade": "SEMIPRESENCIAL", "curso": "ENGENHARIA DE PRODUÇÃO", "disciplina": "Gestão de Projetos", "professor": "RAFAELA", "semestre": "4º E 5º SEMESTRE", "turma": "" },
  { "dia": "Ter", "sala": "24", "modalidade": "SEMIPRESENCIAL", "curso": "PEDAGOGIA", "disciplina": "Ludicidade e Educação", "professor": "EUCILANE", "semestre": "3º e 4º SEMESTRE", "turma": "" },
  { "dia": "Ter", "sala": "26", "modalidade": "PRESENCIAL", "curso": "ENGENHARIA MECÂNICA", "disciplina": "Fenômenos de Transporte", "professor": "ELENILDO BARROS", "semestre": "4º SEMESTRE", "turma": "494620251A" },
  { "dia": "Ter", "sala": "26", "modalidade": "SEMIPRESENCIAL", "curso": "FISIOTERAPIA", "disciplina": "Fundamentos da Fisioterapia na Atenção Secundária e Terciária", "professor": "DIOSÉ LIRA", "semestre": "5º E 6º SEMESTRE", "turma": "" },
  { "dia": "Ter", "sala": "27", "modalidade": "PRESENCIAL", "curso": "PSICOLOGIA", "disciplina": "Clínica Ampliada em Saúde Mental", "professor": "DANIANISSE BALIEIRO", "semestre": "10º SEMESTRE", "turma": "4433820221A" },
  { "dia": "Ter", "sala": "35", "modalidade": "PRESENCIAL", "curso": "ENGENHARIA CIVIL", "disciplina": "Termodinâmica", "professor": "ANTENOR NETO", "semestre": "6º SEMESTRE", "turma": "496820241A" },
  { "dia": "Ter", "sala": "36", "modalidade": "SEMIPRESENCIAL", "curso": "ENFERMAGEM", "disciplina": "Enfermagem na Saúde da Mulher", "professor": "WENISON", "semestre": "5º E 6º SEMESTRE", "turma": "" },
  { "dia": "Ter", "sala": "29/30", "modalidade": "PRESENCIAL", "curso": "PSICOLOGIA", "disciplina": "MPP - Existencial-Humanista", "professor": "STELLA CEZIMBRA", "semestre": "4º e 6º SEMESTRE", "turma": "4433820241A, 4433820251A" },
  { "dia": "Ter", "sala": "31/32", "modalidade": "PRESENCIAL", "curso": "DIREITO", "disciplina": "Fundamentos Históricos e Introdução ao Estudo do Direito", "professor": "LAIS MOREIRA", "semestre": "1º e 2º SEMESTRE", "turma": "4831520262A, 4831520261A" },

  // QUARTA-FEIRA
  { "dia": "Qua", "sala": "01", "modalidade": "PRESENCIAL", "curso": "DIREITO", "disciplina": "Ética Profissional em Direito", "professor": "CELSON CUNHA", "semestre": "4º SEMESTRE", "turma": "4831520251A, 4831520251B" },
  { "dia": "Qua", "sala": "02", "modalidade": "PRESENCIAL", "curso": "PSICOLOGIA", "disciplina": "MAP I", "professor": "SANDRO UEKI", "semestre": "3º e 4º SEMESTRE", "turma": "4433820251A, 4433820252A" },
  { "dia": "Qua", "sala": "04", "modalidade": "PRESENCIAL", "curso": "DIREITO", "disciplina": "Direito Processual Civil - Recursos e Tutelas de Causas Repetitivas", "professor": "CLAUDIO LUAN", "semestre": "6º SEMESTRE", "turma": "4831520241A" },
  { "dia": "Qua", "sala": "05", "modalidade": "PRESENCIAL", "curso": "DIREITO", "disciplina": "Direito Processual Penal - Ação Penal e Procedimentos", "professor": "PRISCILA GARRASTAZU", "semestre": "5º SEMESTRE", "turma": "4831520242A" },
  { "dia": "Qua", "sala": "06", "modalidade": "SEMIPRESENCIAL", "curso": "FARMÁCIA", "disciplina": "Introdução à Biologia Celular e do Desenvolvimento", "professor": "BRENO", "semestre": "1º e 2º SEMESTRE", "turma": "" },
  { "dia": "Qua", "sala": "07", "modalidade": "PRESENCIAL", "curso": "DIREITO", "disciplina": "Direito Civil - Parte Geral", "professor": "JANAÍNA NAYARA", "semestre": "1º SEMESTRE", "turma": "4831520262A" },
  { "dia": "Qua", "sala": "09", "modalidade": "SEMIPRESENCIAL", "curso": "NUTRIÇÃO", "disciplina": "Introdução à Biologia Celular e do Desenvolvimento", "professor": "MAHYÁ MARTINS", "semestre": "1º E 2º SEMESTRE", "turma": "" },
  { "dia": "Qua", "sala": "10", "modalidade": "SEMIPRESENCIAL", "curso": "FONOAUDIOLOGIA/TERAPIA OCUPACIONAL", "disciplina": "Olericultura", "professor": "ANA PAULA", "semestre": "1º e 2º SEMESTRE", "turma": "" },
  { "dia": "Qua", "sala": "11", "modalidade": "SEMIPRESENCIAL", "curso": "ADMINISTRAÇÃO", "disciplina": "Teorias da Administração", "professor": "TAYS CARVALHO", "semestre": "3º E 4º SEMESTRE", "turma": "" },
  { "dia": "Qua", "sala": "12", "modalidade": "PRESENCIAL", "curso": "ENGENHARIA MECÂNICA", "disciplina": "Princípios de Eletricidade e Magnetismo", "professor": "JHOSEFY CONDE", "semestre": "1º, 2º e 5º SEMESTRE", "turma": "494620242A, 494620251A, 494620252A, 494620261A, 494620262A" },
  { "dia": "Qua", "sala": "16", "modalidade": "SEMIPRESENCIAL", "curso": "BIOMEDICINA", "disciplina": "Relações Parasitas e Hospedeiros", "professor": "ANA PAULA", "semestre": "5º E 6º SEMESTRE", "turma": "" },
  { "dia": "Qua", "sala": "17", "modalidade": "SEMIPRESENCIAL", "curso": "AGRONOMIA", "disciplina": "Controle de Plantas Daninhas", "professor": "ARTHUR", "semestre": "6º SEMESTRE", "turma": "" },
  { "dia": "Qua", "sala": "18", "modalidade": "SEMIPRESENCIAL", "curso": "AGRONOMIA", "disciplina": "Ciência do Solo - Gênese, Morfologia e Classificação", "professor": "WILKSON SÁ", "semestre": "4º SEMESTRE", "turma": "" },
  { "dia": "Qua", "sala": "19", "modalidade": "SEMIPRESENCIAL", "curso": "ENGENHARIA MECÂNICA", "disciplina": "Fundição e Processos Siderúrgicos", "professor": "A DEFINIR", "semestre": "5º E 6º SEMESTRE", "turma": "" },
  { "dia": "Qua", "sala": "20", "modalidade": "SEMIPRESENCIAL", "curso": "ENGENHARIA DE PRODUÇÃO", "disciplina": "Gestão de Operações e Serviços", "professor": "RAFAELA", "semestre": "8º SEMESTRE", "turma": "" },
  { "dia": "Qua", "sala": "21", "modalidade": "PRESENCIAL", "curso": "DIREITO", "disciplina": "Direito Internacional", "professor": "IOLINDEMBERG MENDES", "semestre": "10º SEMESTRE", "turma": "4831520221A, 4831520221B" },
  { "dia": "Qua", "sala": "22", "modalidade": "SEMIPRESENCIAL", "curso": "FISIOTERAPIA", "disciplina": "Fisioterapia na Atenção Terciária", "professor": "DAISE ALVES", "semestre": "7º E 8º SEMESTRE", "turma": "" },
  { "dia": "Qua", "sala": "23", "modalidade": "SEMIPRESENCIAL", "curso": "CIÊNCIAS CONTÁBEIS", "disciplina": "Teoria da Contabilidade", "professor": "LUCIVAN MEDINA", "semestre": "3º e 4º SEMESTRE", "turma": "" },
  { "dia": "Qua", "sala": "24", "modalidade": "PRESENCIAL", "curso": "PSICOLOGIA", "disciplina": "Teorias e Técnicas Psi Especiais", "professor": "EMYLLE LEITE", "semestre": "8º SEMESTRE", "turma": "4433820231A" },
  { "dia": "Qua", "sala": "25", "modalidade": "PRESENCIAL", "curso": "ENGENHARIA CIVIL", "disciplina": "Instalações Hidrossanitárias", "professor": "VALERRY GARCIA", "semestre": "10º SEMESTRE", "turma": "494620221A, 494620231A" },
  { "dia": "Qua", "sala": "26", "modalidade": "SEMIPRESENCIAL", "curso": "ENFERMAGEM", "disciplina": "Processo de Cuidar em Enfermagem", "professor": "WENISON", "semestre": "3º e 4º SEMESTRE", "turma": "" },
  { "dia": "Qua", "sala": "27", "modalidade": "SEMIPRESENCIAL", "curso": "PEDAGOGIA", "disciplina": "Ensino e Aprendizagem da Geografia e História", "professor": "EUCILANE", "semestre": "5º E 6º SEMESTRE", "turma": "" },
  { "dia": "Qua", "sala": "35", "modalidade": "PRESENCIAL", "curso": "ENGENHARIA CIVIL", "disciplina": "Elementos de Máquinas Avançado", "professor": "ANTENOR NETO", "semestre": "3º e 6º SEMESTRE", "turma": "496820241A, 496820252A" },
  { "dia": "Qua", "sala": "36", "modalidade": "SEMIPRESENCIAL", "curso": "EDUCAÇÃO FÍSICA", "disciplina": "Psicologia da Educação e da Aprendizagem", "professor": "SALOMÃO DOS SANTOS", "semestre": "5º e 6º SEMESTRE", "turma": "" },
  { "dia": "Qua", "sala": "37", "modalidade": "PRESENCIAL", "curso": "ENGENHARIA CIVIL", "disciplina": "Metrologia e Controle Geométrico", "professor": "ELENILDO BARROS", "semestre": "6º SEMESTRE", "turma": "496820241A" },
  { "dia": "Qua", "sala": "29/30", "modalidade": "PRESENCIAL", "curso": "PSICOLOGIA", "disciplina": "Psicologia Ciência e Profissão", "professor": "DANIANISSE BALIEIRO", "semestre": "2º SEMESTRE", "turma": "4433820261A" },
  { "dia": "Qua", "sala": "31/32", "modalidade": "PRESENCIAL", "curso": "PSICOLOGIA", "disciplina": "MPP - Cognitivo-Comportamental", "professor": "JULIA VELOSO", "semestre": "5º, 6º e 7º SEMESTRE", "turma": "4433820232A, 4433820241A, 4433820242A" },
  { "dia": "Qua", "sala": "33/34", "modalidade": "SEMIPRESENCIAL", "curso": "AGRONOMIA", "disciplina": "Física Geral", "professor": "JOÃO VICTOR", "semestre": "2º SEMESTRE", "turma": "TURMA B" },

  // QUINTA-FEIRA
  { "dia": "Qui", "sala": "01", "modalidade": "PRESENCIAL", "curso": "PSICOLOGIA", "disciplina": "História da Psicologia", "professor": "STELLA CEZIMBRA", "semestre": "2º SEMESTRE", "turma": "4433820261A" },
  { "dia": "Qui", "sala": "02", "modalidade": "PRESENCIAL", "curso": "DIREITO", "disciplina": "Direito Penal - Dos Crimes em Espécie", "professor": "LUIZ PAULO", "semestre": "4º SEMESTRE", "turma": "4831520251A, 4831520251B" },
  { "dia": "Qui", "sala": "05", "modalidade": "SEMIPRESENCIAL", "curso": "ENGENHARIA", "disciplina": "Algoritmos e Lógica de Programação", "professor": "A DEFINIR", "semestre": "1º e 2º SEMESTRE", "turma": "" },
  { "dia": "Qui", "sala": "06", "modalidade": "PRESENCIAL", "curso": "PSICOLOGIA", "disciplina": "Metodologia de Pesquisa Psi", "professor": "NAYANA COUTINHO", "semestre": "3º SEMESTRE", "turma": "4433820252A" },
  { "dia": "Qui", "sala": "07", "modalidade": "SEMIPRESENCIAL", "curso": "ENGENHARIA MECÂNICA", "disciplina": "Comandos Hidráulicos e Pneumáticos", "professor": "A DEFINIR", "semestre": "7º E 8º SEMESTRE", "turma": "" },
  { "dia": "Qui", "sala": "09", "modalidade": "SEMIPRESENCIAL", "curso": "FARMÁCIA", "disciplina": "Biotecnologia e Produção de Alimentos", "professor": "BRENO", "semestre": "9º E 10º SEMESTRE", "turma": "" },
  { "dia": "Qui", "sala": "11", "modalidade": "SEMIPRESENCIAL", "curso": "ADMINISTRAÇÃO E CIÊNCIAS CONTÁBEIS", "disciplina": "Matemática Financeira", "professor": "TAYS CARVALHO", "semestre": "1º e 2º SEMESTRE", "turma": "" },
  { "dia": "Qui", "sala": "12", "modalidade": "SEMIPRESENCIAL", "curso": "NUTRIÇÃO", "disciplina": "Higiene e Microbiologia dos Alimentos", "professor": "MAHYÁ MARTINS", "semestre": "3º e 4º SEMESTRE", "turma": "" },
  { "dia": "Qui", "sala": "16", "modalidade": "SEMIPRESENCIAL", "curso": "AGRONOMIA", "disciplina": "Física Geral", "professor": "FERNANDA RODRIGUES", "semestre": "3º SEMESTRE", "turma": "" },
  { "dia": "Qui", "sala": "17", "modalidade": "PRESENCIAL", "curso": "DIREITO", "disciplina": "Direito Civil - Família", "professor": "MARIA CLARA", "semestre": "7º SEMESTRE", "turma": "4831520232A" },
  { "dia": "Qui", "sala": "18", "modalidade": "SEMIPRESENCIAL", "curso": "BIOMEDICINA", "disciplina": "Estética Aplicada nas Intervenções Médicas", "professor": "ANA PAULA", "semestre": "7º E 8º SEMESTRE", "turma": "" },
  { "dia": "Qui", "sala": "21", "modalidade": "SEMIPRESENCIAL", "curso": "ENGENHARIA MECÂNICA", "disciplina": "Motores de Combustão Interna", "professor": "A DEFINIR", "semestre": "9º E 10º SEMESTRE", "turma": "" },
  { "dia": "Qui", "sala": "22", "modalidade": "SEMIPRESENCIAL", "curso": "FISIOTERAPIA", "disciplina": "Fisioterapia na Saúde do Trabalhador", "professor": "DIOSÉ LIRA", "semestre": "9º E 10º SEMESTRE", "turma": "" },
  { "dia": "Qui", "sala": "24", "modalidade": "PRESENCIAL", "curso": "ENGENHARIA CIVIL E MECÂNICA", "disciplina": "Legislação, Segurança do Trabalho e Meio Ambiente", "professor": "GABRIEL NASCIMENTO", "semestre": "1º, 4º e 5º SEMESTRE", "turma": "494620231A, 494620241A, 496820222A, 496820241A, 496820252A, 494620262A" },
  { "dia": "Qui", "sala": "25", "modalidade": "PRESENCIAL", "curso": "ENGENHARIA CIVIL", "disciplina": "Pontes e Grandes Estruturas", "professor": "VALERRY GARCIA", "semestre": "1º e 10º SEMESTRE", "turma": "494620221A, 494620231A, 494620261A" },
  { "dia": "Qui", "sala": "26", "modalidade": "SEMIPRESENCIAL", "curso": "AGRONOMIA", "disciplina": "Olericultura", "professor": "KHAYO CARDOSO", "semestre": "9º E 10º SEMESTRE", "turma": "" },
  { "dia": "Qui", "sala": "27", "modalidade": "SEMIPRESENCIAL", "curso": "AGRONOMIA", "disciplina": "Máquinas e Mecanização Agrícola", "professor": "JOÃO VICTOR", "semestre": "7º e 8º SEMESTRE", "turma": "" },
  { "dia": "Qui", "sala": "36", "modalidade": "SEMIPRESENCIAL", "curso": "ENFERMAGEM", "disciplina": "Enfermagem em Centro Cirúrgico", "professor": "WENISON", "semestre": "7º E 8º SEMESTRE", "turma": "" },
  { "dia": "Qui", "sala": "37", "modalidade": "PRESENCIAL", "curso": "PSICOLOGIA", "disciplina": "TCC - Trabalho de Conclusão de Curso", "professor": "VIVIANE LUZ", "semestre": "10º SEMESTRE", "turma": "4433820221A" },
  { "dia": "Qui", "sala": "29/30", "modalidade": "PRESENCIAL", "curso": "PSICOLOGIA", "disciplina": "Psi Social Avançada", "professor": "CLAUBER TORRES", "semestre": "5º e 6º SEMESTRE", "turma": "4433820241A, 4433820242A" },
  { "dia": "Qui", "sala": "31/32", "modalidade": "PRESENCIAL", "curso": "DIREITO", "disciplina": "Teoria Geral do Processo", "professor": "BEATRIZ SHARON", "semestre": "2º SEMESTRE", "turma": "4831520261A" },
  { "dia": "Qui", "sala": "33/34", "modalidade": "PRESENCIAL", "curso": "DIREITO", "disciplina": "Direito Coletivo do Trabalho e Tutelas Coletivas", "professor": "IOLINDEMBERG MENDES", "semestre": "6º SEMESTRE", "turma": "4831520241A" },
  { "dia": "Qui", "sala": "33/34", "modalidade": "PRESENCIAL", "curso": "DIREITO", "disciplina": "Direito Coletivo do Trabalho e Tutelas Coletivas", "professor": "IOLINDEMBERG MENDES", "semestre": "5º SEMESTRE", "turma": "4831520242A" },

  // SEXTA-FEIRA
  { "dia": "Sex", "sala": "02", "modalidade": "PRESENCIAL", "curso": "PSICOLOGIA", "disciplina": "Teorias e Técnicas Psi Gerais", "professor": "VIVIANE LUZ", "semestre": "8º SEMESTRE", "turma": "4433820231A, 4433820231B" },
  { "dia": "Sex", "sala": "04", "modalidade": "PRESENCIAL", "curso": "PSICOLOGIA", "disciplina": "Psicologia Escolar e Educacional", "professor": "CARLA GIRARD", "semestre": "6º e 7º SEMESTRE", "turma": "4433820232A, 4433820241A" },
  { "dia": "Sex", "sala": "06", "modalidade": "SEMIPRESENCIAL", "curso": "FARMÁCIA", "disciplina": "Biotecnologia e Produção de Alimentos", "professor": "BRENO", "semestre": "3º e 4º SEMESTRE", "turma": "" },
  { "dia": "Sex", "sala": "07", "modalidade": "SEMIPRESENCIAL", "curso": "ENGENHARIA ELÉTRICA", "disciplina": "Engenharia de Software", "professor": "ELIKA SOUSA", "semestre": "8º SEMESTRE", "turma": "" },
  { "dia": "Sex", "sala": "09", "modalidade": "PRESENCIAL", "curso": "ENGENHARIA CIVIL", "disciplina": "Manufatura Mecânica - Conformação e Soldagem", "professor": "GABRIEL NASCIMENTO", "semestre": "10º SEMESTRE", "turma": "496820222A" },
  { "dia": "Sex", "sala": "10", "modalidade": "SEMIPRESENCIAL", "curso": "PEDAGOGIA", "disciplina": "Infância em Foco: Teorias e Práticas", "professor": "EUCILANE", "semestre": "1º e 2º SEMESTRE", "turma": "" },
  { "dia": "Sex", "sala": "11", "modalidade": "SEMIPRESENCIAL", "curso": "EDUCAÇÃO FÍSICA", "disciplina": "Introdução à Educação Física", "professor": "SALOMÃO DOS SANTOS", "semestre": "1º e 2º SEMESTRE", "turma": "" },
  { "dia": "Sex", "sala": "12", "modalidade": "PRESENCIAL", "curso": "ENGENHARIA MECÂNICA", "disciplina": "Física Geral e Experimental - Mecânica", "professor": "JHOSEFY CONDE", "semestre": "1º e 2º SEMESTRE", "turma": "494620261A, 494620262A" },
  { "dia": "Sex", "sala": "18", "modalidade": "PRESENCIAL", "curso": "ENGENHARIA MECÂNICA", "disciplina": "Fenômenos de Transporte", "professor": "ELENILDO BARROS", "semestre": "4º SEMESTRE", "turma": "494620251A" },
  { "dia": "Sex", "sala": "25", "modalidade": "PRESENCIAL", "curso": "ENGENHARIA MECÂNICA", "disciplina": "Materiais de Construção Civil I", "professor": "VALERRY GARCIA", "semestre": "4º e 5º SEMESTRE", "turma": "494620241A, 494620242A, 494620251A" },
  { "dia": "Sex", "sala": "35", "modalidade": "PRESENCIAL", "curso": "ENGENHARIA CIVIL", "disciplina": "Máquinas de Fluxo", "professor": "ANTENOR NETO", "semestre": "3º SEMESTRE", "turma": "496820252A" },
  { "dia": "Sex", "sala": "29/30", "modalidade": "PRESENCIAL", "curso": "PSICOLOGIA", "disciplina": "Psicologia e Políticas Públicas", "professor": "CLAUBER TORRES", "semestre": "2º SEMESTRE", "turma": "4433820261A" },
  { "dia": "Sex", "sala": "31/32", "modalidade": "PRESENCIAL", "curso": "DIREITO", "disciplina": "Direito do Trabalho", "professor": "IOLINDEMBERG MENDES", "semestre": "2º e 3º SEMESTRE", "turma": "4831520261A, 4831520252A" }
];

const DAY_ORDER = { "Seg": 1, "Ter": 2, "Qua": 3, "Qui": 4, "Sex": 5, "Sáb": 6, "Sab": 6, "Dom": 7 };

const FIELDS = [
  { key: "dia", label: "Dia" },
  { key: "sala", label: "Sala" },
  { key: "curso", label: "Curso" },
  { key: "semestre", label: "Semestre" },
  { key: "turma", label: "Turma" },
  { key: "professor", label: "Professor/Mediador" },
];

let allData = [];
let quickQuery = "";
let activeFilters = {};
let mode = "all"; // all | student | teacher

/* ---------------- Rendering ---------------- */
function uniqueSorted(list) {
  return [...new Set(list)].sort((a, b) => a.localeCompare(b, 'pt-BR', { numeric: true }));
}

/* Extract individual semester numbers from strings like "2º e 3º SEMESTRE" -> ["2","3"] */
function semestreTokens(str) {
  if (!str) return [];
  const nums = str.match(/\d+/g) || [];
  return [...new Set(nums)];
}

/* Extract individual turma codes from strings like "A123, B456" -> ["A123","B456"] */
function turmaTokens(str) {
  if (!str) return [];
  return str.split(',').map(s => s.trim()).filter(Boolean);
}

/* Values for a filter field: dia keeps weekday order, semestre/turma are split into
   individual options so combined cells (e.g. two semesters together) don't create
   duplicate/garbled entries. */
function fieldValues(key) {
  if (key === 'dia') {
    const present = new Set(allData.map(d => d.dia).filter(Boolean));
    return [...present].sort((a, b) => (DAY_ORDER[a] || 99) - (DAY_ORDER[b] || 99));
  }
  if (key === 'semestre') {
    const nums = new Set();
    allData.forEach(d => semestreTokens(d.semestre).forEach(n => nums.add(n)));
    return [...nums].sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
  }
  if (key === 'turma') {
    const set = new Set();
    allData.forEach(d => turmaTokens(d.turma).forEach(t => set.add(t)));
    return [...set].sort((a, b) => a.localeCompare(b, 'pt-BR', { numeric: true }));
  }
  return uniqueSorted(allData.map(d => d[key]).filter(Boolean));
}

function visibleFieldsForMode() {
  if (mode === "student") return ["curso", "semestre", "turma"];
  if (mode === "teacher") return ["professor"];
  return FIELDS.map(f => f.key);
}

function renderFilters() {
  const grid = document.getElementById('filterGrid');
  const title = document.getElementById('filtersTitle');
  const visible = visibleFieldsForMode();

  title.textContent = mode === "student" ? "Encontre a grade da sua turma"
    : mode === "teacher" ? "Encontre suas aulas"
      : "Filtrar horários";

  grid.innerHTML = "";
  FIELDS.filter(f => visible.includes(f.key)).forEach(f => {
    const values = fieldValues(f.key);
    const wrap = document.createElement('div');
    wrap.className = 'field';

    if (f.key === 'professor' && mode === 'teacher') {
      wrap.innerHTML = `<label for="filter-${f.key}">${f.label}</label>
        <input list="list-${f.key}" id="filter-${f.key}" placeholder="Digite seu nome...">
        <datalist id="list-${f.key}">${values.map(v => `<option value="${escapeHtml(v)}">`).join('')}</datalist>`;
    } else if (f.key === 'semestre') {
      wrap.innerHTML = `<label for="filter-${f.key}">${f.label}</label>
        <select id="filter-${f.key}">
          <option value="">Todos</option>
          ${values.map(v => `<option value="${escapeHtml(v)}">${escapeHtml(v)}° Semestre</option>`).join('')}
        </select>`;
    } else {
      wrap.innerHTML = `<label for="filter-${f.key}">${f.label}</label>
        <select id="filter-${f.key}">
          <option value="">Todos</option>
          ${values.map(v => `<option value="${escapeHtml(v)}">${escapeHtml(v)}</option>`).join('')}
        </select>`;
    }
    grid.appendChild(wrap);
  });

  visible.forEach(key => {
    const el = document.getElementById('filter-' + key);
    if (!el) return;
    el.value = activeFilters[key] || "";
    const evt = el.tagName === 'INPUT' ? 'input' : 'change';
    el.addEventListener(evt, () => {
      activeFilters[key] = el.value.trim();
      renderTable();
    });
  });
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
}

function getFilteredSorted() {
  const visible = visibleFieldsForMode();
  let rows = allData.filter(row => {
    for (const key of visible) {
      const fv = activeFilters[key] || "";
      if (!fv) continue;
      if (key === 'professor') {
        if (!(row.professor || '').toLowerCase().includes(fv.toLowerCase())) return false;
      } else if (key === 'semestre') {
        if (!semestreTokens(row.semestre).includes(fv)) return false;
      } else if (key === 'turma') {
        if (!turmaTokens(row.turma).includes(fv)) return false;
      } else {
        if ((row[key] || '').toLowerCase() !== fv.toLowerCase()) return false;
      }
    }
    if (quickQuery) {
      const hay = Object.values(row).join(' ').toLowerCase();
      if (!hay.includes(quickQuery.toLowerCase())) return false;
    }
    return true;
  });

  rows.sort((a, b) => {
    const da = DAY_ORDER[a.dia] || 99;
    const db = DAY_ORDER[b.dia] || 99;
    if (da !== db) return da - db;
    const sa = parseInt(a.sala, 10); const sb = parseInt(b.sala, 10);
    if (!isNaN(sa) && !isNaN(sb) && sa !== sb) return sa - sb;
    return String(a.sala).localeCompare(String(b.sala), 'pt-BR', { numeric: true });
  });
  return rows;
}

function renderTable() {
  const rows = getFilteredSorted();
  document.getElementById('resultCount').innerHTML =
    rows.length === 0 ? '' : `<b>${rows.length}</b> horário${rows.length === 1 ? '' : 's'} encontrado${rows.length === 1 ? '' : 's'}`;

  const wrap = document.getElementById('tableWrap');

  if (rows.length === 0) {
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
            <td class="dia">${escapeHtml(r.dia || '')}</td>
            <td>${escapeHtml(r.sala || '')}</td>
            <td><span class="badge ${/online|ead|remot/i.test(r.modalidade || '') ? 'online' : ''}">${escapeHtml(r.modalidade || '-')}</span></td>
            <td>${escapeHtml(r.curso || '')}</td>
            <td class="disciplina">${escapeHtml(r.disciplina || '')}</td>
            <td>${escapeHtml(r.professor || '')}</td>
            <td>${escapeHtml(r.semestre || '')}</td>
            <td>${escapeHtml(r.turma || '')}</td>
          </tr>`).join('')}
      </tbody>
    </table>`;
}

/* ---------------- Mode switching ---------------- */
document.getElementById('modes').addEventListener('click', (e) => {
  const btn = e.target.closest('.mode-btn');
  if (!btn) return;
  document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  mode = btn.dataset.mode;
  activeFilters = {};
  renderFilters();
  renderTable();
});

document.getElementById('quickSearch').addEventListener('input', (e) => {
  quickQuery = e.target.value;
  renderTable();
});

document.getElementById('clearFilters').addEventListener('click', () => {
  activeFilters = {};
  quickQuery = "";
  document.getElementById('quickSearch').value = "";
  renderFilters();
  renderTable();
});

/* ---------------- Init ---------------- */
(function init() {
  allData = DEFAULT_DATA;
  renderFilters();
  renderTable();
})();
