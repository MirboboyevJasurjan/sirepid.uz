import * as React from "react";
import PropTypes from "prop-types";
import Navbar from "../../layout/navbar/Navbar";
import Footer from "../../layout/footer/Footer";

import "./Vaksina.css";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container } from "react-bootstrap";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Vaksinatsiya() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const arrVac = [
    {
      name: "«Спутник V»",
      descr:
        "Sputnik V-Rossiyada ishlab chiqarilgan vaksina bo‘lib, suyuq foydalanishga tayyor holda chiqariladi va mushak orasiga qabul qilinadi. Dozasi -0,5 ml (2 komponentlik). Ishlab chiqarish shakli: bir dozali ampula 0,5 ml. , ikki dozali ampula 1,0 ml., 5 dozali flakon 2,5 ml. I –komponent alohida, II-komponent alohida ampula (flakon)da ishlab chiqarilgan. Ampula (flakon) ochilgandan so‘ng xona haroratida 2 soat ichida foydalanish mumkin. Vaksinaning samaradorligi 92%. -18°C yuqori bo‘lmagan haroratda, saqlash muddati 6 oy. Dozalash rejimi -2 dozada 21 kunlik interval bilan qabul qilinadi. Vaksinani chayqatish mumkin emas. -18gradus S da saqlanadi. Gripp, yoki boshqa turdagi vaksinalar bilan bir vaqtda emlash mumkin emas, 14 kun oraliq bo‘lishi kerak.",
    },
    {
      name: "«BioNTech, Pfizer»",
      descr:
        "Pfizer / BioNTech tomonidan tayyorlangan (BNT162b2) AQShda ishlab chiqarilgan vaksina bo‘lib, quruq, qayta tiklash uchun liofilizatsiya qilingan holda chiqariladi va mushak orasiga qabul qilinadi. Dozasi 0,3 ml (2 martalik) I –komponent alohida, II-komponent alohida ampula (flakon)da ishlab chiqarilgan. Ampula (flakon) ochilgandan so‘ng xona haroratida 2 soat ichida foydalanish mumkin. Vaksinaning samaradorligi 92%. -18°C yuqori bo‘lmagan haroratda, saqlash muddati 6 oy. Dozalash rejimi -2 dozada 21 kunlik interval bilan qabul qilinadi. Vaksinani chayqatish mumkin emas. -18gradus S da saqlanadi. Gripp, yoki boshqa turdagi vaksinalar bilan bir vaqtda emlash mumkin emas, 14 kun oraliq bo‘lishi kerak.",
    },
    {
      name: "«Astra Zeneca»",
      descr:
        "AstraZeneca- Niderlandiya, (Covisheld)- Hindistonda ishlab chiqariladi. Suyuq foydalanishga tayyor holda chiqariladi va mushak orasiga qabul qilinadi. Dozasi -0,5 ml (2 martalik). Ishlab chiqarish shakli 5 ml flakon (diametr 16,5 mm x balandlik 52 mm). 10 dozali flakonda chiqariladi. Qopqoqni olib tashlagandan so‘ng birinchi dozani olib 6 soat davomida foydalanish mumkin. Vaksinaning samaradorligi 97%. Saqlash muddati +2 +8°C da 9 oy davomida. Dozalash rejimi- 2 dozada 21-28 kunlik interval bilan qabul qilinadi. Vaksinani chayqatish mumkin emas. Muzlatish qat’iyan taqiqlanadi. Gripp, yoki boshqa turdagi vaksinalar bilan bir vaqtda emlash mumkin emas, 14 kun oraliq bo‘lishi kerak.",
    },
    {
      name: "«ZF-UZ-VAC 2001»",
      descr:
        "ZF-UZ-VAC 2001- O‘zbekiston va Xitoy hamkorligida ishlab chiqarilgan vaksina bo‘lib, suyuq foydalanishga tayyor holda chiqariladi va mushak orasiga qabul qilinadi. Dozasi -0,5 ml (3 martalik). ). Ishlab chiqarish shakli bir dozali ampula 0,5 ml., 2 dozali 1,0 ml. , 5 va 10 dozali flakonlarda. Ampula ochilgandan so‘ng darhol ishlatilishi kerak. Vaksinaning samaradorligi 95%. +2 +8°C haroratda saqlanadi. Saqlash muddati 24 oy. Dozalash rejimi 1 oyda 1 dozadan 3oy davomida 3 marotaba. Yengil silkitib aralashtiriladi! Muzlatish qat’iyan taqiqlanadi. Gripp, yoki boshqa turdagi vaksinalar bilan bir vaqtda emlash mumkin emas, 14 kun oraliq bo‘lishi kerak.",
    },
    {
      name: "«Moderna»",
      descr:
        "Moderna (mRNK-1273) AQShda ishlab chiqarilgan vaksina bo‘lib, suyuq foydalanishga tayyor holda chiqariladi va mushak orasiga qabul qilinadi. Dozasi -0,5 ml (2 martalik). Ishlab chiqarish shakli 10 dozali 5,0 ml flakonda (diametr 16,5 mm x balandlik 52 mm). 14 dozali 7,0 ml flakonda chiqariladi. Flakon qopqog‘i ochilgandan so‘ng xona haroratida 6 soat ichida foydalanish mumkin. Vaksinaning samaradorligi 94.5%. Saqlash muddati -25°C -15°Cda 7 oy davomida, +2 +8°Cda 30 kun davomida. Dozalash rejimi-2 dozada 21- 28 kunlik interval bilan qilinadi. Vaksinani chayqatish mumkin emas. Muzlatish qat’iyan taqiqlanadi. Gripp, yoki boshqa turdagi vaksinalar bilan bir vaqtda emlash mumkin emas, 14 kun oraliq bo‘lishi kerak.",
    },
    {
      name: "«Sinovac»",
      descr:
        "Sinovac-CoronaVac Xitoyda ishlab chiqarilgan vaksina bo‘lib,suyuq foydalanishga tayyor holda chiqariladi va mushak orasigaqabul qilinadi. Dozasi -0,5 ml (2 martalik). Ishlab chiqarishshakli bir dozali ampula 0,5 ml. Flakon qopqog‘i ochilgandanso‘ng xona haroratida 6 soat ichida foydalanish mumkin.Vaksinaning samaradorligi 95%. +2 +8°C haroratda saqlanadi.Dozalash rejimi 2 dozada 21- 28 kunlik interval bilan. Vaksinanichayqatish mumkin emas. Muzlatish qat’iyan taqiqlanadi. Gripp,yoki boshqa turdagi vaksinalar bilan bir vaqtda emlash mumkinemas, 14 kun oraliq bo‘lishi kerak.",
    },
    {
      name: "«Sputnik light»",
      descr:
        "Sinovac-CoronaVac Xitoyda ishlab chiqarilgan vaksina bo‘lib,suyuq foydalanishga tayyor holda chiqariladi va mushak orasigaqabul qilinadi. Dozasi -0,5 ml (2 martalik). Ishlab chiqarishshakli bir dozali ampula 0,5 ml. Flakon qopqog‘i ochilgandanso‘ng xona haroratida 6 soat ichida foydalanish mumkin.Vaksinaning samaradorligi 95%. +2 +8°C haroratda saqlanadi.Dozalash rejimi 2 dozada 21- 28 kunlik interval bilan. Vaksinanichayqatish mumkin emas. Muzlatish qat’iyan taqiqlanadi. Gripp,yoki boshqa turdagi vaksinalar bilan bir vaqtda emlash mumkinemas, 14 kun oraliq bo‘lishi kerak.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="body_page vaksina_body_page">
        <Container>
          <h6 className="title_body_page">
            "CoVid-19"ga qarshi vaksina turlari haqida umumiy ma'lumot
          </h6>
          <div className="tabmenu_vaksina_page">
            <Box
              sx={{
                flexGrow: 1,
                bgcolor: "background.paper",
                display: "flex",
                height: 224,
              }}
            >
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: "divider" }}
              >
                {arrVac.map((e, i) => {
                  return <Tab label={e.name} {...a11yProps(i)} />;
                })}
              </Tabs>
              {arrVac.map((e, i) => {
                return (
                  <TabPanel
                    className="tabpanel_textPlace"
                    value={value}
                    index={i}
                  >
                    <h5 className="tabmenu_title">{e.name}</h5>
                    <p className="tabmenu_text">{e.descr}</p>
                  </TabPanel>
                );
              })}
            </Box>
          </div>
        </Container>
        <Footer />
      </div>
    </>
  );
}
