/* Add image paths here when the final photographs and logos are supplied.
   Example: agro: { src: 'assets/images/agro-rover.jpg', alt: 'Autonomous rover', fit: 'contain' }
   The page also supports GIF/WebP project demonstrations without layout changes. */
window.PORTFOLIO = {
  images: {
    stJoseph: { src: 'assets/images/st-joseph-logo.jpg', alt: 'St. Joseph Institute of Technology logo', fit: 'contain' },
    sriSairam: { src: 'assets/images/sairam-logo.jpg', alt: 'Sairam Institutions logo for Sri Sairam Polytechnic College', fit: 'contain' },
    avian: { src: 'assets/images/avian-logo.jpg', alt: 'Avian Aerospace logo', fit: 'contain' },
    sentient: { src: 'assets/images/sentient-logo.jpg', alt: 'Sentient Industries logo', fit: 'contain' },
    bharathy: { src: 'assets/images/bharathy-logo.jpg', alt: 'Bharathy Aerospace logo', fit: 'contain' },
    nova: { src: 'assets/images/nova-logo.jpg', alt: 'Nova Aerospace logo', fit: 'contain' },
    zuntra: { src: 'assets/images/zuntra-logo.jpg', alt: 'Zuntra Digital logo', fit: 'contain' },
    msad: { src: 'assets/images/msad-blueprint.jpeg', alt: 'M-SAD drone blueprint with labeled frame, flight controller, GPS, camera, motors, propellers, and payload components', fit: 'contain', fullSize: true },
    helmet: { src: 'assets/images/smart-helmet.jpeg', alt: 'Smart Helmet prototype with its mounted electronics, wiring, and sensors', width: 1173, height: 778, fit: 'contain' },
    weapon: { src: 'assets/images/weapon-detection-cropped.jpeg', alt: 'Close-up of an FPV quadcopter in flight', width: 728, height: 546, fit: 'contain' },
    agro: { src: 'assets/images/agro-rover.jpg', alt: 'A wheeled autonomous rover with a raised camera and sensor assembly', width: 1200, height: 1200, fit: 'contain' },
    autoPerfect: { src: 'assets/images/auto-perfect.jpg', alt: 'A robotic arm demonstration at a workstation with a computer and a second robotic arm', width: 1280, height: 720, fit: 'contain' },
    gallery1: { src: 'assets/images/vtol-indoor.jpeg', alt: 'Front view of a fixed-wing VTOL aircraft indoors, with its full wingspan visible', width: 1280, height: 960 },
    gallery2: { src: 'assets/images/vtol-outdoor.jpeg', alt: 'A fixed-wing VTOL aircraft at an outdoor test area', width: 3840, height: 2160 },
    gallery4: { src: 'assets/images/humanoid-robot.png', alt: 'A full-height humanoid robot suspended from a hoist in the robotics lab', width: 841, height: 1870, fit: 'cover', position: '50% 49.175824%' },
    gallery5: { src: 'assets/images/drone-workbench.jpeg', alt: 'A multirotor drone with a camera payload and controller on an electronics workbench', width: 3840, height: 2160 },
    gallery6: { src: 'assets/images/robotic-arms-workbench.jpg', alt: 'Two orange robotic arms and their electronics on a workbench', width: 736, height: 981, fit: 'contain' }
  },
  education: [
    {
      organization: 'St. Joseph Institute of Technology',
      image: 'stJoseph',
      title: 'Bachelor of Technology',
      focus: 'Artificial Intelligence & Data Science',
      dates: '2023 – 2026',
      detail: 'Chennai, Tamil Nadu · CGPA: 7.5 / 10'
    },
    {
      organization: 'Sri Sairam Polytechnic College',
      image: 'sriSairam',
      title: 'Diploma',
      focus: 'Electrical and Electronics Engineering',
      dates: '2020 – 2023',
      detail: 'Chennai, Tamil Nadu · CGPA: 8.76 / 10'
    }
  ],
  experience: [
    {
      organization: 'Avian Aerospace',
      image: 'avian',
      title: 'UAV Engineer',
      focus: 'Heavy-lift UAV avionics & flight integration',
      dates: 'August 2026 – Present',
      detail: '30–200 kg MTOW platforms. Flight controllers, power distribution, GNSS, telemetry, and FPV flight testing.',
      location: 'Bengaluru, Karnataka'
    },
    {
      organization: 'Sentient Industries',
      image: 'sentient',
      title: 'Intern, Robotics Engineer',
      focus: 'Robotic manipulation & humanoid systems',
      dates: 'June 2026 – August 2026',
      detail: 'Real-world reinforcement learning, bi-manual manipulation, Real2Sim pipelines, and robot policy evaluation.',
      location: 'Bengaluru, Karnataka'
    },
    {
      organization: 'Bharathy Aerospace',
      image: 'bharathy',
      title: 'Intern, Research & Development Engineer',
      focus: 'VTOL, multirotor & FPV system integration',
      dates: 'December 2025 – May 2026',
      detail: '10–20 kg UAV platforms. Pixhawk integration, airframe calibration, component selection, tuning, and flight-log analysis.',
      location: 'Pudukkottai, Tamil Nadu'
    },
    {
      organization: 'Nova Aerospace',
      image: 'nova',
      title: 'Intern, Technical Documentation',
      focus: 'UAV architecture & subsystem documentation',
      dates: 'December 2025 – May 2026',
      detail: 'Equipment catalogues, component comparisons, interface verification, and version-controlled engineering records.',
      location: 'Pudukkottai, Tamil Nadu'
    },
    {
      organization: 'Zuntra Digital',
      image: 'zuntra',
      title: 'Intern, Robotics & Embedded Systems',
      focus: 'Autonomous delivery robot development',
      dates: 'June 2025 – September 2025',
      detail: 'Integrated mechanical design, embedded hardware, and control systems into a functional prototype; prepared architecture and integration documentation.',
      location: 'Perungudi, Chennai'
    }
  ],
  projects: [
    {
      id: 'msad',
      name: 'M-SAD',
      subtitle: 'Multi-Modal Segment Anything Drone',
      image: 'msad',
      description: 'A prototype autonomous drone developed for fire-extinguishing and ocean-rescue missions. The platform brings together RGB and thermal sensing to support locating people and fire, with payload mechanisms for fireball deployment and inflatable rescue-tube release. Prototype completed; patent applied.',
      url: 'https://github.com/Dhinesh-XO/M-SAD',
      featured: true
    },
    {
      id: 'helmet',
      name: 'Smart Helmet',
      subtitle: 'Sensor-Integrated Safety System',
      image: 'helmet',
      description: 'Designed and fabricated a safety helmet that integrates alcohol detection, crash alerts, and drowsiness monitoring. Built using 3D printing and Arduino, the system combines sensors to monitor impact, environmental, and physiological parameters for safety and monitoring applications.',
      url: null,
      featured: true
    },
    {
      id: 'weapon',
      name: 'Weapon Detection System',
      subtitle: 'CCTV & Drone Surveillance',
      image: 'weapon',
      description: 'Simulated an autonomous drone with real-time weapon detection using CCTV video feeds. Lightweight Tiny-YOLO models support detection and alert generation, with a system designed for integration into surveillance and threat-monitoring infrastructure. Developed using Python, machine learning, and deep learning.',
      url: null,
      featured: false
    },
    {
      id: 'agro',
      name: 'Autonomous Agro-Drone & Rover',
      subtitle: 'Plant Disease Detection',
      image: 'agro',
      description: 'Built a drone and rover for autonomous field monitoring in precision agriculture. The system uses Python, OpenCV, and machine learning to detect plant diseases through image processing, with autonomous navigation and obstacle avoidance for operating in farm environments.',
      url: null,
      featured: false
    },
    {
      id: 'auto-perfect',
      name: 'Auto-Perfect',
      subtitle: 'Piper-X Manipulation & ROS 2',
      image: 'autoPerfect',
      description: 'Contributed to integrating an AgileX Piper-X arm and gripper into a ROS 2 workflow using CAN communication. The work covered motion commands, feedback monitoring, task sequencing, and RViz/Rerun visualization, alongside checks for controlled hardware execution. The project also explored experimental agent-assisted manipulation. The linked public case study describes these engineering contributions.',
      url: 'https://github.com/Dhinesh-XO/Auto-Perfect',
      featured: false
    }
  ],
  // M-SAD metadata verified against IEEE's Crossref deposit on 2026-10-13.
  // Smart Helmet title comes from the supplied manuscript; conference completion was confirmed by Dhinesh.
  publications: [
    {
      title: 'M-SAD: Multi Modal Segment Anything Drone',
      details: '2025 International Conference on Emerging Research in Computational Science (ICERCS)',
      status: 'Published by IEEE',
      documentNumber: '11581277',
      doi: '10.1109/ICERCS65898.2025.11581277',
      url: 'https://ieeexplore.ieee.org/document/11581277/'
    },
    {
      title: 'Smart Care Helmet: A Technological Advancement in Rider Safety',
      details: 'Conference presentation completed.',
      status: 'Publication details awaiting confirmation.',
      url: null
    }
  ]
};
