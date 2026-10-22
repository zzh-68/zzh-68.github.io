const translations = {
  en: {
    navAbout: 'About', navProjects: 'Projects', navExperience: 'Experience', navContact: 'Contact',
    eyebrow: 'Data Science Undergraduate',
    heroSummary: 'Interested in data engineering, business data analysis, and applied AI. I enjoy turning complex data into reliable and explainable results.',
    viewProjects: 'View projects', downloadCv: 'Download CV',
    aboutTitle: 'About', projectsTitle: 'Selected Projects', experienceTitle: 'Experience', skillsTitle: 'Skills', contactLabel: 'Contact',
    aboutTextZh: 'I am a Data Science and Big Data Technology undergraduate at Xi’an Jiaotong-Liverpool University. I have received an academic excellence award in the top 5% of my cohort. My practical experience covers enterprise data, government data, and large-scale business data, with a focus on data cleaning, data modelling, data quality, and applied AI.',
    aboutTextEn: 'I am a Data Science and Big Data Technology undergraduate at Xi’an Jiaotong-Liverpool University. My experience covers enterprise data, government data, and large-scale business data, with a focus on data cleaning, data modelling, data quality, and applied AI.',
    projectOne: 'I designed a resume improvement loop covering upload, evaluation, revision, and re-evaluation. I defined structured feedback fields, the top three issues, and process metrics, then helped the team deliver an end-to-end demo through a shared API contract.',
    projectTwo: 'I independently produced an eight-minute AI animation about cultural heritage, covering IP development, scriptwriting, storyboarding, prompt design for characters and scenes, and final video production.',
    projectThree: 'Used Python, Pandas, and MySQL to process 100K+ enterprise records and 1M+ intellectual property records, including multi-table matching, label classification, and query optimisation.',
    roleThree: 'Data Analysis Intern', roleTwo: 'Data Collection Assistant', roleOne: 'Technology Intern',
    expThree: 'Helped build more than 30 DWD data tables, integrated source databases, and used Hive / Spark SQL for data processing and quality checks.',
    expTwo: 'Supported a government responsiveness study across more than 50 cities and helped design consistent collection, anomaly labelling, and re-test procedures.',
    expOne: 'Used Python for enterprise data classification and completed intellectual property data cleaning, multi-table matching, and MySQL database construction.'
  }
};

const toggle = document.querySelector('#languageToggle');
let language = 'zh';

toggle.addEventListener('click', () => {
  language = language === 'zh' ? 'en' : 'zh';
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  toggle.textContent = language === 'zh' ? 'EN' : '中';
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (language === 'en' && translations.en[key]) element.textContent = translations.en[key];
    if (language === 'zh') element.textContent = element.dataset.zh || element.textContent;
  });
});

document.querySelectorAll('[data-i18n]').forEach((element) => {
  element.dataset.zh = element.textContent;
});
