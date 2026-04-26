export interface NavDropdown {
  label: string;
  items: Array<{ href: string; label: string }>;
}

export interface Dictionary {
  site: {
    title: string;
    subtitle: string;
    description: string;
  };
  nav: {
    home: string;
    about: NavDropdown;
    course: NavDropdown;
    emi_teaching: NavDropdown;
    observation: NavDropdown;
  };
  home: {
    hero_title: string;
    hero_subtitle: string;
    hero_description: string;
    cta_schedule: string;
    cta_about: string;
    features: {
      title: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    };
  };
  emi_plan: {
    title: string;
    description: string;
    download_label: string;
  };
  about: {
    title: string;
    intro: string;
    objectives_title: string;
    objectives: string[];
    process_title: string;
    process_steps: Array<{
      step: string;
      title: string;
      description: string;
    }>;
    principles_title: string;
    principles: string[];
  };
  syllabus: {
    title: string;
    description: string;
  };
  teaching_log: {
    title: string;
    description: string;
  };
  student_profile: {
    title: string;
    description: string;
  };
  teaching_methods: {
    title: string;
    description: string;
  };
  platforms_tools: {
    title: string;
    description: string;
  };
  emi_resources: {
    title: string;
    description: string;
  };
  schedule: {
    title: string;
    description: string;
    label_date: string;
    label_time: string;
    label_location: string;
    date: string;
    time: string;
    location: string;
  };
  resources: {
    title: string;
    description: string;
    categories: Array<{
      title: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    }>;
  };
  feedback: {
    title: string;
    description: string;
    form: {
      observer_name: string;
      observation_date: string;
      course_topic: string;
      strengths: string;
      suggestions: string;
      additional: string;
      submit: string;
      placeholder_strengths: string;
      placeholder_suggestions: string;
      placeholder_additional: string;
    };
  };
  footer: {
    copyright: string;
    department: string;
  };
}
