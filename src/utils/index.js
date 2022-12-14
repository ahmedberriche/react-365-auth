export const isMobileDevice =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

export const cardsDataSet = [
  {
    title: "RH",
    subTitle: "",
    image: "assets/images/adm-managment.png",
    cardData: [
      {
        iconSrc: "CRA.jpg",
        title: "CRA",
        uri: "https://ui.boondmanager.com/dashboard",
      },
      {
        iconSrc: "DocAdm.png",
        title: "Documents administratifs",
        uri: "https://apps.powerapps.com/play/e/default-f050ee11-8c72-4be6-80ce-5238fb70166a/a/1f6aa88e-2697-4767-a43e-75f98b96f2b2?source=teamsopenwebsite&screenColor=rgba(0,+176,+240,+1)&hint=0492cae0-3b41-4a01-811f-e1ff760ac293",
      },
      {
        iconSrc: "coffre-fort.png",
        title: "Coffre-fort numérique",
        uri: "https://edocperso.fr/login",
        isRequired: true,
      },
    ],
  },
  {
    title: "Numeryx université",
    subTitle: "",
    image: "assets/images/training-managment.png",
    cardData: [
      {
        iconSrc: "LMS.png",
        title: "LMS",
        uri: "https://tech.numeryx.fr:6500/moodle/",
      },
      {
        iconSrc: "catalogue-formation.png",
        title: "Catalogue de formation",
        uri: "https://university.numeryx.fr/fr/nos-formations-professionnelles",
      },
      {
        iconSrc: "demande-formation.jpg",
        title: "Demande de formation",
        uri: "https://apps.powerapps.com/play/e/default-f050ee11-8c72-4be6-80ce-5238fb70166a/a/c03cacde-4399-4440-934b-d4808dd04de5?tenantId=f050ee11-8c72-4be6-80ce-5238fb70166a",
      },
    ],
  },
  {
    title: "Demandes et réclamations",
    subTitle: "",
    image: "assets/images/complain-managment.png",
    cardData: [
      {
        iconSrc: "problem-claim.png",
        title: "Gestion des réclamations",
        uri: "https://apps.powerapps.com/play/0cc9e371-c2fd-4054-bccc-3c11017bd9f4?tenantId=f050ee11-8c72-4be6-80ce-5238fb70166a",
      },
      {
        iconSrc: "GLPI.png",
        title: "GLPI",
        uri: "http://support.numeryx.fr/Glpi-Numeryx/index.php?redirect=%2Ffront%2Ftracking.injector.php&error=3",
      },
    ],
  },
  {
    title: "Réseaux sociaux ",
    subTitle: "",
    image: "assets/images/social-network.png",
    cardData: [
      {
        iconSrc: "yammer.jpg",
        title: "Yammer",
        uri: "https://www.yammer.com/login",
      },
      {
        iconSrc: "linkedin.png",
        title: "LINKEDIN",
        uri: "https://www.linkedin.com/company/numeryx/",
      },
    ],
  },
];
