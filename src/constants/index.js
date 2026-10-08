// Date et heure de début du Forum (utilisée par le compte à rebours)
const forumDate = "2025-12-04T09:00:00";

const navLinks = [
  {
    labelKey: "school",
    link: "#school",
  },
  {
    labelKey: "forum",
    link: "#forum",
  },
  {
    labelKey: "companies",
    link: "#companies",
  },
  {
    labelKey: "poles",
    link: "#poles",
  },
  {
    labelKey: "team",
    link: "#team",
  },
  {
    labelKey: "schedule",
    link: "#schedule",
  },
];

const words = [
  { textKey: "careers", imgPath: "/images/ideas.svg" },
  { textKey: "opportunities", imgPath: "/images/concepts.svg" },
  { textKey: "connections", imgPath: "/images/designs.svg" },
  { textKey: "careers", imgPath: "/images/ideas.svg" },
  { textKey: "opportunities", imgPath: "/images/concepts.svg" },
  { textKey: "connections", imgPath: "/images/designs.svg" },
  { textKey: "careers", imgPath: "/images/ideas.svg" },
  { textKey: "opportunities", imgPath: "/images/concepts.svg" },
];

// =====================
// Liste 1
// =====================
const logoIconsList1 = [
  { id: "c_arkea", imgPath: "/images/logos/arkea.png", link: "https://www.arkea.com" },
  { id: "c_carrefour", imgPath: "/images/logos/carrefour.png", link: "https://www.carrefour.com" },
  { id: "c_clever_cloud", imgPath: "/images/logos/clever-cloud.png", link: "https://www.clever-cloud.com" },
  { id: "c_dga_mi", imgPath: "/images/logos/dga.png", link: "https://www.defense.gouv.fr/dga" },
  { id: "c_enedis", imgPath: "/images/logos/enedis.png", link: "https://www.enedis.fr" },
  { id: "c_mbda", imgPath: "/images/logos/mbda.png", link: "https://www.mbda-systems.com" },
  { id: "c_naval_group", imgPath: "/images/logos/naval-group.png", link: "https://www.naval-group.com" },
  { id: "c_orange", imgPath: "/images/logos/orange.png", link: "https://www.orange.com" },
  { id: "c_qube_rt", imgPath: "/images/logos/qube.png", link: "https://www.qube-rt.com" },
  { id: "c_thales", imgPath: "/images/logos/thales.png", link: "https://www.thalesgroup.com" },
  { id: "c_wavestone", imgPath: "/images/logos/wavestone.png", link: "https://www.wavestone.com" },
  { id: "c_ifremer", imgPath: "/images/logos/ifremer.png", link: "https://www.ifremer.fr" },
  { id: "c_marine_nationale", imgPath: "/images/logos/marine-nationale.png", link: "https://www.defense.gouv.fr/marine" },
  { id: "c_sid", imgPath: "/images/logos/sid.png", link: "https://www.defense.gouv.fr/sga" },
  { id: "c_movensee", imgPath: "/images/logos/movensee.png", link: "https://movensee.com" },
  { id: "c_astek", imgPath: "/images/logos/astek.png", link: "https://astekgroup.fr" },
  { id: "c_setec_is", imgPath: "/images/logos/setec.png", link: "https://www.setec.fr" },
  { id: "c_sopra_steria", imgPath: "/images/logos/sopra-steria.png", link: "https://www.soprasteria.com" },
  { id: "c_nxp", imgPath: "/images/logos/nxp.png", link: "https://www.nxp.com" },
  { id: "c_nusense", imgPath: "/images/logos/nusense.png", link: "https://www.linkedin.com/company/nusense" },
  { id: "c_anrf", imgPath: "/images/logos/anfr.png", link: "https://www.anfr.fr" },
  { id: "c_onepoint", imgPath: "/images/logos/onepoint.png", link: "https://www.groupeonepoint.com" },
  { id: "c_oresys", imgPath: "/images/logos/oresys.png", link: "https://www.oresys.eu" }
];

// =====================
// Liste 2 — ordre mélangé
// =====================
const logoIconsList2 = [
  // --- PARTIE 2 ---
  { id: "c_qube_rt", imgPath: "/images/logos/qube.png", link: "https://www.qube-rt.com" },
  { id: "c_thales", imgPath: "/images/logos/thales.png", link: "https://www.thalesgroup.com" },
  { id: "c_wavestone", imgPath: "/images/logos/wavestone.png", link: "https://www.wavestone.com" },
  { id: "c_ifremer", imgPath: "/images/logos/ifremer.png", link: "https://www.ifremer.fr" },
  { id: "c_marine_nationale", imgPath: "/images/logos/marine-nationale.png", link: "https://www.defense.gouv.fr/marine" },
  { id: "c_sid", imgPath: "/images/logos/sid.png", link: "https://www.defense.gouv.fr/sga" },
  { id: "c_movensee", imgPath: "/images/logos/movensee.png", link: "https://movensee.com" },

  // --- PARTIE 3 ---
  { id: "c_astek", imgPath: "/images/logos/astek.png", link: "https://astekgroup.fr" },
  { id: "c_setec_is", imgPath: "/images/logos/setec.png", link: "https://www.setec.fr" },
  { id: "c_sopra_steria", imgPath: "/images/logos/sopra-steria.png", link: "https://www.soprasteria.com" },
  { id: "c_nxp", imgPath: "/images/logos/nxp.png", link: "https://www.nxp.com" },
  { id: "c_nusense", imgPath: "/images/logos/nusense.png", link: "https://www.linkedin.com/company/nusense" },
  { id: "c_anrf", imgPath: "/images/logos/anfr.png", link: "https://www.anfr.fr" },
  { id: "c_onepoint", imgPath: "/images/logos/onepoint.png", link: "https://www.groupeonepoint.com" },
  { id: "c_oresys", imgPath: "/images/logos/oresys.png", link: "https://www.oresys.eu" },

  // --- PARTIE 1 ---
  { id: "c_arkea", imgPath: "/images/logos/arkea.png", link: "https://www.arkea.com" },
  { id: "c_carrefour", imgPath: "/images/logos/carrefour.png", link: "https://www.carrefour.com" },
  { id: "c_clever_cloud", imgPath: "/images/logos/clever-cloud.png", link: "https://www.clever-cloud.com" },
  { id: "c_dga_mi", imgPath: "/images/logos/dga.png", link: "https://www.defense.gouv.fr/dga" },
  { id: "c_enedis", imgPath: "/images/logos/enedis.png", link: "https://www.enedis.fr" },
  { id: "c_mbda", imgPath: "/images/logos/mbda.png", link: "https://www.mbda-systems.com" },
  { id: "c_naval_group", imgPath: "/images/logos/naval-group.png", link: "https://www.naval-group.com" },
  { id: "c_orange", imgPath: "/images/logos/orange.png", link: "https://www.orange.com" }
];

// =====================
// Liste 3 — autre ordre mélangé
// =====================
const logoIconsList3 = [
  // --- PARTIE 3 ---
  { id: "c_astek", imgPath: "/images/logos/astek.png", link: "https://astekgroup.fr" },
  { id: "c_setec_is", imgPath: "/images/logos/setec.png", link: "https://www.setec.fr" },
  { id: "c_sopra_steria", imgPath: "/images/logos/sopra-steria.png", link: "https://www.soprasteria.com" },
  { id: "c_nxp", imgPath: "/images/logos/nxp.png", link: "https://www.nxp.com" },
  { id: "c_nusense", imgPath: "/images/logos/nusense.png", link: "https://www.linkedin.com/company/nusense" },
  { id: "c_anrf", imgPath: "/images/logos/anfr.png", link: "https://www.anfr.fr" },
  { id: "c_onepoint", imgPath: "/images/logos/onepoint.png", link: "https://www.groupeonepoint.com" },
  { id: "c_oresys", imgPath: "/images/logos/oresys.png", link: "https://www.oresys.eu" },

  // --- PARTIE 1 ---
  { id: "c_arkea", imgPath: "/images/logos/arkea.png", link: "https://www.arkea.com" },
  { id: "c_carrefour", imgPath: "/images/logos/carrefour.png", link: "https://www.carrefour.com" },
  { id: "c_clever_cloud", imgPath: "/images/logos/clever-cloud.png", link: "https://www.clever-cloud.com" },
  { id: "c_dga_mi", imgPath: "/images/logos/dga.png", link: "https://www.defense.gouv.fr/dga" },
  { id: "c_enedis", imgPath: "/images/logos/enedis.png", link: "https://www.enedis.fr" },
  { id: "c_mbda", imgPath: "/images/logos/mbda.png", link: "https://www.mbda-systems.com" },
  { id: "c_naval_group", imgPath: "/images/logos/naval-group.png", link: "https://www.naval-group.com" },
  { id: "c_orange", imgPath: "/images/logos/orange.png", link: "https://www.orange.com" },

  // --- PARTIE 2 ---
  { id: "c_qube_rt", imgPath: "/images/logos/qube.png", link: "https://www.qube-rt.com" },
  { id: "c_thales", imgPath: "/images/logos/thales.png", link: "https://www.thalesgroup.com" },
  { id: "c_wavestone", imgPath: "/images/logos/wavestone.png", link: "https://www.wavestone.com" },
  { id: "c_ifremer", imgPath: "/images/logos/ifremer.png", link: "https://www.ifremer.fr" },
  { id: "c_marine_nationale", imgPath: "/images/logos/marine-nationale.png", link: "https://www.defense.gouv.fr/marine" },
  { id: "c_sid", imgPath: "/images/logos/sid.png", link: "https://www.defense.gouv.fr/sga" },
  { id: "c_movensee", imgPath: "/images/logos/movensee.png", link: "https://movensee.com" }
];

const poles = [
  {
    id: "defense",
    icon: "Shield",
  },
  {
    id: "it",
    icon: "Cpu",
  },
  {
    id: "energy",
    icon: "Zap",
  },
  {
    id: "finance",
    icon: "Briefcase",
  },
  {
    id: "research",
    icon: "FlaskConical",
  },
  {
    id: "distribution",
    icon: "Wheat",
  },
];

export {
  forumDate,
  words,
  logoIconsList1,
  logoIconsList2,
  logoIconsList3,
  navLinks,
  poles,
};
