app.controller('SearchCtrl', ['$scope', function ($scope) {
    $scope.dynamicPopover = {
        templateUrl: 'assets/js/directives/popover.html',
        title: "What You Do"
    };
    $scope.awv = {
        name: 'American Warming & Ventilating',
        items: [
            { name: 'Industrial Louvers', link: 'http://www.awv.com/'},
            { name: 'Industrial Dampers', link: 'http://www.awv.com/'}
        ],
        image: 'assets/images/awv-logo.png',
        homeLink: 'http://www.awv.com/',
        alt: 'american warming and ventilating logo'
    };
    $scope.flexcom = {
        name: 'FlexCom',
        items: [
            { name: 'Flexible duct connections for fan inlets and outlets', link: 'http://www.flexcomonline.com/'},
            { name: 'Thermal duct expansion joints', link: 'http://www.flexcomonline.com/'}
        ],
        image: 'assets/images/FlexCom_Logo.jpg',
        homeLink: 'http://www.flexcomonline.com/',
        alt: 'FlexCom logo'
    };
    $scope.kpi = {
        name: 'Kelair Products, Inc.',
        items: [
            { name: 'Louver Dampers', link: 'http://www.kelairdampers.com/products.cfm?webpagename=louver'},
            { name: 'Butterfly Dampers', link: 'http://www.kelairdampers.com/products.cfm?webpagename=butterfly'},
            { name: 'Guillotine Dampers', link: 'http://www.kelairdampers.com/products.cfm?webpagename=guillotine'},
            { name: 'Diverter and Tees', link: 'http://www.kelairdampers.com/products.cfm?webpagename=diverters'}
        ],
        image: 'assets/images/kelair-logo.gif',
        homeLink: 'http://www.kelairdampers.com',
        alt: 'Kelair Products, Inc. logo'
    };
    $scope.usduct = {
        name: 'US Duct',
        items: [
            { name: 'Modular ducting system with either Quick Clamps or flanges', link: 'http://www.us-duct.com'},
            { name: 'Galvanized, painted carbon steel or 304/316 stainless steel', link: 'http://www.us-duct.com'}
        ],
        image: 'assets/images/usduct-logo.png',
        homeLink: 'http://www.us-duct.com',
        alt: 'US Duct logo'
    };
    $scope.rodair = {
        name: 'Rodair',
        items: [
            { name: 'High-speed abort gate dampers for return air', link: 'http://www.rodriguemetal.com'},
            { name: 'Backdraft isolation damper', link: 'http://www.rodriguemetal.com'},
            { name: 'Explosion relief backdraft damper', link: 'http://www.rodriguemetal.com'}
        ],
        image: 'assets/images/logoRodrigueMetal.png',
        homeLink: 'http://www.rodriguemetal.com',
        alt: 'Rodair logo'
    };
    $scope.sopers = {
        name: "Soper's Engineered Fabric Solutions",
        items: [
            { name: 'PVC & vinyl-coated polyester curtains, partitions, and enclosures', link: 'http://www.sopers.com'},
            { name: 'Sanding and grinding booths', link: 'http://www.sopers.com'},
            { name: 'Fabric ductwork', link: 'http://www.sopers.com'}
        ],
        image: 'assets/images/sopers-logo.gif',
        homeLink: 'http://www.sopers.com',
        alt: "Soper's Engineered Fabric Solutions logo"
    };
    $scope.enertech = {
        name: "United Enertech",
        items: [
            { name: 'Adjustable, Fixed and Acoustic Louvers', link: 'http://www.unitedenertech.com'},
            { name: 'Backdraft Dampers', link: 'http://www.unitedenertech.com'},
            { name: 'Round and Rectangular Dampers', link: 'http://www.unitedenertech.com'},
            { name: 'Blast Dampers', link: 'http://www.unitedenertech.com'}
        ],
        image: 'assets/images/unitedenertech-logo.gif',
        homeLink: 'http://www.unitedenertech.com',
        alt: 'United Enertech logo'
    };
    $scope.absolut = {
        name: "Absolut Aire",
        items: [
            { name: 'Makeup air units', link: 'http://www.absolutaire.com'},
            { name: 'Direct-Fired air turnover units', link: 'http://www.absolutaire.com'},
            { name: 'Custom Air handling units', link: 'http://www.absolutaire.com'},
            { name: 'Evaporative cooling units', link: 'http://www.absolutaire.com'}
        ],
        image: 'assets/images/absoluteair-logo.jpg',
        homeLink: 'http://www.absolutaire.com',
        alt: 'Absolut Aire logo'
    };
    $scope.chicago = {
        name: "Chicago Blower Corporation",
        items: [
            { name: 'Backward inclined & airfoil centrifugal fans', link: 'http://www.chicagoblower.com'},
            { name: 'Cast aluminum pressure blowers', link: 'http://www.chicagoblower.com'},
            { name: 'Vane axial, axial and panel fans', link: 'http://www.chicagoblower.com'},
            { name: 'FRP corrosian-resistant fans', link: 'http://www.chicagoblower.com'},
            { name: 'Heavy duty fans for severe duty', link: 'http://www.chicagoblower.com'}
        ],
        image: 'assets/images/chicago-blower-logo.png',
        homeLink: 'http://www.chicagoblower.com',
        alt: 'Chicago Blower Corporation logo'
    };
    $scope.americraft = {
        name: "Americraft Manufacturing",
        items: [
            { name: 'Direct and belt drive tube axial fans', link: 'http://americraftmfg.com'},
            { name: 'Direct and belt drive panel fans', link: 'http://americraftmfg.com'},
            { name: 'Roof supply and exhaust fans', link: 'http://americraftmfg.com'},
            { name: 'Cast aluminum presure blower', link: 'http://americraftmfg.com'}
        ],
        image: 'assets/images/Americraft-logo.jpg',
        homeLink: 'http://americraftmfg.com',
        alt: 'Americraft logo'
    };
    $scope.plastec = {
        name: "Plastec Ventilation",
        items: [
            { name: 'Direct-drive, corrosion-resistant, utility-style and roof-mounted polypropylene fans', link: 'http://www.plastecvent.net'},
            { name: 'Corrosion-resistant dampers and stacks', link: 'http://www.plastecvent.net'}
        ],
        image: 'assets/images/plastec-logo.png',
        homeLink: 'http://www.plastecvent.net',
        alt: 'Plastec logo'
    };
    $scope.continental = {
        name: "Continental Blower",
        items: [
            { name: 'Multistage centrifugal pressure blowers', link: 'http://www.continentalblower.com'},
            { name: 'Pressures to 28 psi', link: 'http://www.continentalblower.com'}
        ],
        image: 'assets/images/continental-blower-logo.jpg',
        homeLink: 'http://www.continentalblower.com',
        alt: 'Continental Blower logo'
    };
    $scope.verantis = {
        name: "Verantis",
        items: [
            { name: 'FRP axial and centrifugal fans', link: 'http://www.verantis.com/index.html'},
            { name: 'Backward and inclined, forward curve and radial bladed wheels', link: 'http://www.verantis.com/index.html'}
        ],
        image: 'assets/images/verantis-logo.png',
        homeLink: 'http://www.verantis.com/index.html',
        alt: 'Verantis logo'
    };
    $scope.df = {
        name: "DF Fan Services",
        items: [
            { name: 'Industrial forward curved fans', link: 'http://www.dffan.com'}
        ],
        image: 'assets/images/dffan-logo.gif',
        homeLink: 'http://www.dffan.com',
        alt: 'DF Fan Services logo'
    };
    $scope.ias = {
        name: "Industrial Air Solutions",
        items: [
            { name: 'Emergency repair and balancing', link: 'http://www.ias-mi.com'},
            { name: 'Custom fans and specialty applications', link: 'http://www.ias-mi.com'}
        ],
        image: 'assets/images/ias-logo.png',
        homeLink: 'http://www.ias-mi.com',
        alt: 'Industrial Air Solutions logo'
    };
    $scope.camcorp = {
        name: "Camcorp",
        items: [
            { name: 'Bag Houses, medium pressure pulse, reverse air, or pulse-jet', link: 'http://www.camcorpinc.com'},
            { name: 'Bin vents and High Vacuum receivers', link: 'http://www.camcorpinc.com'},
            { name: 'Vertical cartridge filters', link: 'http://www.camcorpinc.com'},
            { name: 'Fan-powered cyclones', link: 'http://www.camcorpinc.com'}
        ],
        image: 'assets/images/camcorp-logo.png',
        homeLink: 'http://www.camcorpinc.com',
        alt: 'Camcorp logo'
    };
    $scope.act = {
        name: "ACT Dust Collectors",
        items: [
            { name: 'Down flow cartridge dust collectors, pulse jet', link: 'http://www.actdustcollectors.com'},
            { name: 'Fully compatible with Torit/Donaldson cartridges', link: 'http://www.actdustcollectors.com'}
        ],
        image: 'assets/images/act-logo.png',
        homeLink: 'http://www.actdustcollectors.com',
        alt: 'ACT Dust Collectors logo'
    };
    $scope.aer = {
        name: "AER Control Systems",
        items: [
            { name: 'Oil Mist Collectors; centrifugal, and media; machine-mounted and central', link: 'http://www.aercontrolsystems.com'},
            { name: 'Dry Dust Collectors', link: 'http://www.aercontrolsystems.com'},
            { name: 'Grinding Booth Dust Collectors', link: 'http://www.aercontrolsystems.com'},
            { name: 'Welding Smoke Collection, both source capture and robotic cells; fixed and portable.', link: 'http://www.aercontrolsystems.com'},
            { name: 'AERCOLOGY replacement parts and equipment', link: 'http://www.aercontrolsystems.com'}
        ],
        image: 'assets/images/aer-logo.gif',
        homeLink: 'http://www.aercontrolsystems.com',
        alt: 'AER Control Systems logo'
    };
    $scope.im = {
        name: "Industrial Maid",
        items: [
            { name: 'Welding overhead filtration hoods', link: 'http://industrial-maid.com'},
            { name: 'Ambient packaged air cleaners', link: 'http://industrial-maid.com'},
            { name: 'Packaged filter walls', link: 'http://industrial-maid.com'},
            { name: 'Packaged environmental control booths', link: 'http://industrial-maid.com'},
            { name: 'Portable dust and smoke collectors', link: 'http://industrial-maid.com'},
            { name: 'Oil mist collectors', link: 'http://industrial-maid.com'}
        ],
        image: 'assets/images/Industrial-maid-logo.png',
        homeLink: 'http://industrial-maid.com',
        alt: 'Industrial Maid logo'
    };
    $scope.iap = {
        name: "Industrial Air Purification",
        items: [
            { name: 'Source capture arms, multiple diameters and lengths', link: 'http://industrialairpurification.com'},
            { name: 'Carbon steel and stainless steel', link: 'http://industrialairpurification.com'}
        ],
        image: 'assets/images/Industrial-air-pur-logo.png',
        homeLink: 'http://industrialairpurification.com',
        alt: 'Industrial Air Purification logo'
    };
    $scope.stervent = {
        name: "Stervent Dust Control Equipment",
        items: [
            { name: 'Cyclone Separators and Bag After Filters', link: 'http://www.sternvent.com'},
            { name: 'Shaker-bag, Pulse Jet, & Oil Mist Collectors', link: 'http://www.sternvent.com'},
            { name: 'Downdraft Table Collectors', link: 'http://www.sternvent.com'}
        ],
        image: 'assets/images/Industrial-air-pur-logo.png',
        homeLink: 'http://www.sternvent.com',
        alt: 'Stervent logo'
    };
    $scope.replace = {
        name: "ReplaceAir",
        items: [
            { name: 'Wet Dust Collectors', link: 'http://replaceair.com'},
            { name: 'Wet downdraft table collectors', link: 'http://replaceair.com'},
            { name: 'Specifically designed for combustible metals and NFPA compliance', link: 'http://replaceair.com'}
        ],
        image: 'assets/images/replace-air-logo.png',
        homeLink: 'http://replaceair.com',
        alt: 'ReplaceAir logo'
    };
    $scope.camcorp2 = {
        name: "Camcorp",
        items: [
            { name: 'Positive displacement blower packages, horizontal and vertical configurations', link: 'http://www.camcorpinc.com'},
            { name: 'Pneumatic receivers: Poly-El and filter bag designs', link: 'http://www.camcorpinc.com'},
            { name: 'Rotary airlocks, diverter and scaling valves', link: 'http://www.camcorpinc.com'},
            { name: 'Control panels: PLC or relay logic control', link: 'http://www.camcorpinc.com'},
            { name: 'Batch or continuous systems', link: 'http://www.camcorpinc.com'},
            { name: 'Bin vents', link: 'http://www.camcorpinc.com'},
            { name: 'Bag dump stations', link: 'http://www.camcorpinc.com'},
            { name: 'Dry sorbent injection systems', link: 'http://www.camcorpinc.com'}
        ],
        image: 'assets/images/camcorp-logo.png',
        homeLink: 'http://www.camcorpinc.com',
        alt: 'Camcorp logo'
    };
    $scope.acs = {
        name: "ACS Valves",
        items: [
            { name: 'Rotary airlocks, fabricated and machined', link: 'http://www.acsvalves.com'},
            { name: '4" - 30" flange diameters', link: 'http://www.acsvalves.com'},
            { name: 'Quick-clean sanitary design with removable rotor', link: 'http://www.acsvalves.com'}
        ],
        image: 'assets/images/ACS-Valves-logo.gif',
        homeLink: 'http://www.acsvalves.com',
        alt: 'ACS Valves logo'
    };
    $scope.avc = {
        name: "American Vacuum Company",
        items: [
            { name: 'Portable, continuous duty vacuums', link: 'http://www.americanvacuum.com'},
            { name: 'Central vacuum systems', link: 'http://www.americanvacuum.com'}
        ],
        image: 'assets/images/industrial-vacuums-logo.png',
        homeLink: 'http://www.americanvacuum.com',
        alt: 'American Vacuum Company logo'
    };
    $scope.camcorp3 = {
        name: "Camcorp",
        items: [
            { name: 'Bag Houses, medium pressure pulse, reverse air, or pulse-jet', link: 'http://www.camcorpinc.com'},
            { name: 'Bin vents and High Vacuum receivers', link: 'http://www.camcorpinc.com'},
            { name: 'Vertical cartridge filters', link: 'http://www.camcorpinc.com'},
            { name: 'Fan-powered cyclones', link: 'http://www.camcorpinc.com'},
            { name: 'Dry sorbent injection NO2, SO2 and Mercury control', link: 'http://www.camcorpinc.com'}
        ],
        image: 'assets/images/camcorp-logo.png',
        homeLink: 'http://www.camcorpinc.com',
        alt: 'Camcorp logo'
    };
    $scope.perceptive = {
        name: "Perceptive Industries",
        items: [
            { name: 'Regenerative Thermal Oxidizers (RTO)', link: 'http://www.perceptiveindustries.com'},
            { name: 'Catalytic Thermal Oxidizers (CatOx)', link: 'http://www.perceptiveindustries.com'},
            { name: 'Recuperative Thermal Oxidizers (RecupTO)', link: 'http://www.perceptiveindustries.com'},
            { name: 'Industrial Tempering Ovens', link: 'http://www.perceptiveindustries.com'},
            { name: 'Concentrator Systems', link: 'http://www.perceptiveindustries.com'},
            { name: 'Heat and Energy Recovery', link: 'http://www.perceptiveindustries.com'}
        ],
        image: 'assets/images/perceptive-logo.png',
        homeLink: 'http://www.perceptiveindustries.com',
        alt: 'Perceptive Industries logo'
    };
    $scope.anguil = {
        name: "Anguil",
        items: [
            { name: 'Regenerative Thermal Oxidizers (RTO)', link: 'http://www.anguil.com'},
            { name: 'Catalytic Thermal Oxidizers (CatOx)', link: 'http://www.anguil.com'},
            { name: 'Recuperative Thermal Oxidizers (RecupTO)', link: 'http://www.anguil.com'},
            { name: 'Industrial Tempering Ovens', link: 'http://www.anguil.com'},
            { name: 'Concentrator Systems', link: 'http://www.anguil.com'},
            { name: 'Heat and Energy Recovery', link: 'http://www.anguil.com'}
        ],
        image: 'assets/images/anguil-logo.png',
        homeLink: 'http://www.anguil.com',
        alt: 'Anguil logo'
    };
    $scope.verantis2 = {
        name: "Verantis",
        items: [
            { name: 'EWS ionizing wet scrubbers', link: 'http://www.verantis.com/index.html'},
            { name: 'Packed Tower Scrubbers', link: 'http://www.verantis.com/index.html'},
            { name: 'Moisture Eliminators', link: 'http://www.verantis.com/index.html'},
            { name: 'Metal alloy and FRP construction', link: 'http://www.verantis.com/index.html'},
            { name: 'FRP Fans', link: 'http://www.verantis.com/index.html'}
        ],
        image: 'assets/images/verantis-logo.png',
        homeLink: 'http://www.verantis.com/index.html',
        alt: 'Verantis logo'
    };
    $scope.vaw = {
        name: "VAW Systems",
        items: [
            { name: 'Fan intake and discharge silencers', link: 'http://www.vawsystems.com'},
            { name: 'acoustical barrier materials and enclosures', link: 'http://www.vawsystems.com'}
        ],
        image: 'assets/images/vaw-logo.jpg',
        homeLink: 'http://www.vawsystems.com',
        alt: 'American Vacuum Company logo'
    };
    $scope.sopers2 = {
        name: "Soper's Engineered Fabric Solutions",
        items: [
            { name: 'Architectural acoustical absorbing materials', link: 'http://www.sopers.com'},
            { name: 'Acoustical barrier materials and enclosures', link: 'http://www.sopers.com'}
        ],
        image: 'assets/images/sopers-logo.gif',
        homeLink: 'http://www.sopers.com',
        alt: "Soper's Engineered Fabric Solutions logo"
    };
    $scope.eco = {
        name: "Environmental Filtration",
        items: [
            { name: 'Repalcement OEM cartridge and pleated bags', link: 'http://www.ecoenvironmental.com'}
        ],
        image: 'assets/images/eco_environmental-logo.png',
        homeLink: 'http://www.ecoenvironmental.com',
        alt: "Environmental Filtration logo"
    };
    $scope.nfm = {
        name: "National Filter Media",
        items: [
            { name: 'Repalcement OEM bags and cages', link: 'http://www.nfm-filter.com'}
        ],
        image: 'assets/images/NFM.png',
        homeLink: 'http://www.nfm-filter.com',
        alt: "National Filter Media"
    };
    $scope.fike = {
        name: "Fike",
        items: [
            { name: 'Explosion detection and suppression systems', link: 'http://www.fike.com'},
            { name: 'Explosion relief panels', link: 'http://www.fike.com'}
        ],
        image: 'assets/images/Fike-logo.svg',
        homeLink: 'http://www.fike.com',
        alt: "Fike logo"
    };
    $scope.usduct2 = {
        name: "US Duct",
        items: [
            { name: 'Spark traps', link: 'http://www.us-duct.com'},
            { name: 'One-way flow and isolation dampers', link: 'http://www.us-duct.com'}
        ],
        image: 'assets/images/usduct-logo.png',
        homeLink: 'http://www.us-duct.com',
        alt: "US Duct logo"
    };
    $scope.rodair2 = {
        name: 'Rodair',
        items: [
            { name: 'High-speed abort gate dampers for return air', link: 'http://www.rodriguemetal.com'},
            { name: 'Backdraft isolation damper', link: 'http://www.rodriguemetal.com'},
            { name: 'Explosion relief backdraft damper', link: 'http://www.rodriguemetal.com'}
        ],
        image: 'assets/images/logoRodrigueMetal.png',
        homeLink: 'http://www.rodriguemetal.com',
        alt: 'Rodair logo'
    };
    $scope.replace2 = {
        name: "ReplaceAir",
        items: [
            { name: 'Wet Dust Collectors', link: 'http://replaceair.com'},
            { name: 'Wet downdraft table collectors', link: 'http://replaceair.com'},
            { name: 'Specifically designed for combustible metals and NFPA compliance', link: 'http://replaceair.com'}
        ],
        image: 'assets/images/replace-air-logo.png',
        homeLink: 'http://replaceair.com',
        alt: 'ReplaceAir logo'
    };
    $scope.enertech2 = {
        name: "United Enertech",
        items: [
            { name: 'Blast Dampers', link: 'http://www.unitedenertech.com'}
        ],
        image: 'assets/images/unitedenertech-logo.gif',
        homeLink: 'http://www.unitedenertech.com',
        alt: 'United Enertech logo'
    };
}]);