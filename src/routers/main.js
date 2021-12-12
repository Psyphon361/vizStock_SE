const express = require("express");
const router = new express.Router();

router.get("/", async (req, res) => {
    res.render("home", {
        title: "Home",
    });
});

router.post("/", (req, res) => {
    const stocks = {
        MSFT: "microsoft",
        AAPL: "apple",
        TSLA: "tesla",
        AMZN: "amazon",
        SGEN: "seagen ",
        VRSN: "verisign",
        CDW: "cdw corp",
        DOCU: "docusign ",
        SIRI: "sirius xm holdings",
        SWKS: "skyworks solutions",
        CERN: "cerner corp",
        PDD: "pinduoduo",
        SPLK: "splunk inc",
        INCY: "incyte corp",
        CHKP: "check point software",
        TCOM: "trip.com group",
        PTON: "peloton interactive",
        BIDU: "baidu",
        FAST: "fastenal",
        CPRTCo: "copart",
        ANSS: "nsys",
        BIIB: "biogen",
        DLTR: "dollar tree",
        OKTA: "okta",
        NTES: "netease",
        PCAR: "paccar",
        MELI: "mercadolibre",
        EXC: "exelon",
        WDAY: "workday",
        DXCM: "dexcom ",
        IDXX: "idexx laboratories",
        CDNS: "cadence design",
        ALGN: "align technology",
        KDP: "keurig dr pepper",
        MAR: "marriott international",
        TEAM: "atlassian corp",
        MCHP: "microchip technology",
        ORLY: "o'reilly automotive",
        ATVI: "activision blizzard",
        ZM: "zoom video",
        MNST: "monster beverage",
        CTAS: "cintas",
        EBAY: "ebay",
        PAYX: "paychex",
        CTSH: "cognizant technology",
        AEP: "american electric power",
        KHC: "kraft heinz",
        WBA: "walgreens boots",
        ROST: "ross stores",
        CRWD: "crowdstrike holdings",
        VRSK: "verisk analytics",
        EA: "electronic arts",
        XEL: "xcel energy",
        MTCH: "match group",
        NVDA: "nvidia corp",
        GOOG: "alphabet inc",
        GOOGL: "alphabet inc",
        FB: "meta platforms inc",
        ADBE: "adobe inc",
        NFLX: "netflix inc",
        CMCSA: "comcast corp",
        CSCO: "cisco systems inc/delaware",
        COST: "costco wholesale corp",
        AVGO: "broadcom inc",
        PEP: "pepsico inc",
        PYPL: "paypal holdings inc",
        INTC: "intel corp",
        QCOM: "qualcomm inc",
        TXN: "texas instruments inc",
        INTU: "intuit inc",
        AMD: "advanced micro devices inc",
        TMUS: "t-mobile us inc",
        HON: "honeywell international inc",
        AMAT: "applied materials inc",
        SBUX: "starbucks",
        CHTR: "charter communications",
        MRNA: "moderna",
        AMGN: "amgen",
        ISRG: "intuitive surgical",
        ADP: "automatic data processing",
        ADI: "analog devices",
        LRCX: "lam research",
        MU: "micron technology",
        GILD: "gilead sciences",
        BKNG: "booking holdings",
        MDLZ: "mondelez",
        CSX: "csx",
        MRVL: "marvell",
        REGN: "regeneron",
        FISV: "fiserv",
        ASML: "asml holding",
        JD: "jd.com",
        KLAC: "kla corp ",
        NXPI: "nxp",
        ADSK: "autodesk",
        LULU: "lululemon",
        ILMN: "illumina",
        XLNX: "xilinx",
        VRTX: "vertex",
        SNPS: "synopsys",
    }

    let full_name = String(req.body.stock);
    full_name = full_name.toLowerCase();
    full_name = full_name.trim();

    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }

    const stock_symbol = getKeyByValue(stocks, full_name);

    if (stock_symbol) {

        res.render("chart", {
            title: full_name.charAt(0).toUpperCase() + full_name.slice(1),
            stock_name: stock_symbol,
            full_name: full_name.charAt(0).toUpperCase() + full_name.slice(1)
        });

    } else {
        const symbols = JSON.stringify(Object.keys(stocks));

        if (symbols.includes((req.body.stock).toUpperCase().trim())) {

            var stock_name = req.body.stock.toUpperCase().trim();
            var name = stocks[stock_name];

            res.render("chart", {
                title: req.body.stock,
                stock_name,
                full_name: name.charAt(0).toUpperCase() + name.slice(1)
            });
        } else {
            res.render("404");
        }
    }
});

router.get("/about", (req, res) => {
    res.render("about", {
        title: "About Us"
    })
})
router.get("/news", (req, res) => {
    res.render("news", {
        title: "Top News"
    })
})
router.get("/help", (req, res) => {
    res.render("help", {
        title: "Help"
    })
})



module.exports = router;
