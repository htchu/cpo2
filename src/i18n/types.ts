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
    download_label: string;
    plan_name: string;
    plan_name_en: string;
    period: string;
    applicant: string;
    institution: string;
    category: string;
    info_labels: {
      plan_name: string;
      period: string;
      applicant: string;
      institution: string;
      category: string;
    };
    members_title: string;
    members: Array<{ name: string; school: string; role: string }>;
    theme_title: string;
    theme: string;
    goals: Array<{ title: string; description: string }>;
    activities_title: string;
    activities: Array<{
      number: string;
      title: string;
      type: string;
      time: string;
      description: string;
      speaker: string;
    }>;
    outputs_title: string;
    outputs: string[];
    outcomes_title: string;
    qualitative_title: string;
    qualitative: string[];
    quantitative_title: string;
    quantitative: string[];
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
    emi_tdc: {
      title: string;
      intro: string;
      services: Array<{
        title: string;
        description: string;
      }>;
      links: Array<{
        label: string;
        url: string;
      }>;
    };
  };
  syllabus: {
    title: string;
    plan_name: string;
    info: {
      label_instructor: string;
      instructor: string;
      label_department: string;
      department: string;
      label_course: string;
      course: string;
      label_semester: string;
      semester: string;
      label_credits: string;
      credits: string;
      label_class: string;
      class_name: string;
      label_students: string;
      students: string;
      label_venue: string;
      venue: string;
      label_attribute: string;
      attribute: string;
    };
    summary_title: string;
    summary: string;
    design_title: string;
    phases: Array<{
      title: string;
      description: string;
      steps: Array<{ title: string; description: string }>;
    }>;
    weekly_title: string;
    weekly_headers: {
      week: string;
      topic: string;
      content: string;
      note: string;
    };
    weeks: Array<{
      week: string;
      topic: string;
      content: string;
      note: string;
    }>;
    outcomes_title: string;
    outcomes: Array<{ title: string; description: string }>;
    deliverables_title: string;
    deliverables: string[];
  };
  teaching_log: {
    title: string;
    description: string;
    materials: Array<{
      code: string;
      title: string;
      description: string;
      file: string;
    }>;
  };
  student_profile: {
    title: string;
    description: string;
    total_label: string;
    total: number;
    charts: Array<{
      title: string;
      segments: Array<{
        label: string;
        value: number;
        color: string;
      }>;
    }>;
  };
  teaching_methods: {
    title: string;
    description: string;
    methods: Array<{
      title: string;
      subtitle: string;
      description: string;
      points: string[];
    }>;
  };
  platforms_tools: {
    title: string;
    description: string;
    items: Array<{
      name: string;
      image: string;
      description: string;
    }>;
  };
  emi_resources: {
    title: string;
    description: string;
    tdc: {
      title: string;
      url: string;
      intro: string;
      sections: Array<{
        title: string;
        description: string;
        url: string;
      }>;
      contact: {
        title: string;
        address: string;
        phone: string;
      };
      links: Array<{
        label: string;
        url: string;
      }>;
    };
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
    map_title: string;
    transportation_title: string;
    transportation_source: string;
    transportation_source_label: string;
    transportation: Array<{
      mode: string;
      icon: string;
      details: string[];
    }>;
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
    instructions: string[];
    download_label: string;
    file: string;
  };
  footer: {
    copyright: string;
    department: string;
  };
}
