export interface Question {
  q: string;
  options: string[];
  answer: number;
  explanation: string;
}

export interface SubjectQuestions {
  [subject: string]: Question[];
}

const questionsData: SubjectQuestions = {
  Physics: [
    {
      q: 'A body is thrown vertically upward with an initial velocity of 20 m/s. What is the maximum height it reaches? (g=10 m/s²)',
      options: ['10 m', '20 m', '30 m', '40 m'],
      answer: 1,
      explanation: 'Using the formula v² = u² + 2as, at maximum height, final velocity v=0. So, 0=(20)²−2(10)s. This gives 20s=400, and s=20 m.'
    },
    {
      q: 'The dimensional formula for impulse is:',
      options: ['[MLT⁻¹]', '[MLT⁻²]', '[ML²T⁻²]', '[M⁰LT⁻²]'],
      answer: 0,
      explanation: 'Impulse is the product of force and time. Impulse = Force × Time = [MLT−2]×[T]=[MLT−1].'
    },
    {
      q: 'In a Young\'s double-slit experiment, the fringe width is 0.5 mm when the distance between slits is 1 mm and the screen is 1 m away. What is the wavelength of light?',
      options: ['500 nm', '600 nm', '700 nm', '800 nm'],
      answer: 0,
      explanation: 'Fringe width β = (dλ)/D. Therefore, λ = (Dβ)/d = (1 m)(0.5×10−3 m)/(1×10−3 m) = 5×10−7 m = 500 nm.'
    },
    {
      q: 'The resistance of a wire is R. If it is stretched to double its length, the new resistance is:',
      options: ['R/2', 'R', '2R', '4R'],
      answer: 3,
      explanation: 'When a wire is stretched, its volume remains constant. If length l becomes 2l, the area A becomes A/2. Since R=ρl/A, the new resistance R′=ρ(2l)/(A/2)=4ρl/A=4R.'
    },
    {
      q: 'A capacitor of 2 μF is charged to 100 V. The energy stored is:',
      options: ['0.01 J', '0.1 J', '1 J', '10 J'],
      answer: 0,
      explanation: 'Energy stored in a capacitor U = (1/2)CV² = (1/2)(2×10−6 F)(100 V)² = 0.01 J.'
    },
    {
      q: 'The escape velocity from Earth\'s surface is approximately:',
      options: ['1.4 km/s', '7.9 km/s', '11.2 km/s', '25 km/s'],
      answer: 2,
      explanation: 'This is a standard value derived from ve = √(2GM/R), which is approximately 11.2 km/s for Earth.'
    },
    {
      q: 'In SHM, the acceleration is maximum at:',
      options: ['Mean position', 'Extreme position', 'Half amplitude', 'Quarter amplitude'],
      answer: 1,
      explanation: 'Acceleration a = −ω²x. The magnitude is maximum when the displacement x is maximum (i.e., at the extreme positions).'
    },
    {
      q: 'The unit of magnetic flux is:',
      options: ['Tesla', 'Weber', 'Gauss', 'Henry'],
      answer: 1,
      explanation: 'The SI unit of magnetic flux (ΦB) is the Weber (Wb). Tesla is the unit for magnetic field strength (B).'
    },
    {
      q: 'For a concave mirror, if object is at center of curvature, image is:',
      options: ['Virtual and erect', 'Real and inverted', 'Real and erect', 'Virtual and inverted'],
      answer: 1,
      explanation: 'When an object is placed at the center of curvature (C) of a concave mirror, a real, inverted image of the same size is formed at C.'
    },
    {
      q: 'Kirchhoff\'s first law is based on conservation of:',
      options: ['Energy', 'Charge', 'Momentum', 'Mass'],
      answer: 1,
      explanation: 'Kirchhoff\'s first law (Junction Rule) states that the sum of currents entering a junction equals the sum of currents leaving it, which is a statement of the conservation of charge.'
    },
    {
      q: 'The frequency of a sound wave is 500 Hz and wavelength is 0.68 m. Speed of sound is:',
      options: ['340 m/s', '680 m/s', '170 m/s', '850 m/s'],
      answer: 0,
      explanation: 'Wave speed v = fλ = 500 Hz × 0.68 m = 340 m/s.'
    },
    {
      q: 'In a nuclear reaction, mass defect is 0.01 u. Energy released is:',
      options: ['9.3 MeV', '93 MeV', '930 MeV', '9.3 keV'],
      answer: 0,
      explanation: 'Energy released E = Δm × 931.5 MeV/u = 0.01 u × 931.5 MeV/u ≈ 9.315 MeV.'
    },
    {
      q: 'The half-life of a radioactive substance is 10 days. Fraction left after 20 days is:',
      options: ['1/2', '1/4', '1/8', '1/16'],
      answer: 1,
      explanation: '20 days is equal to two half-lives (20/10=2). The fraction remaining is (1/2)^n = (1/2)^2 = 1/4.'
    },
    {
      q: 'A lens has focal length 20 cm. For real image, object distance should be:',
      options: ['Less than 20 cm', 'Equal to 20 cm', 'Greater than 20 cm', 'Infinite'],
      answer: 2,
      explanation: 'For a convex lens to form a real image, the object must be placed at a distance greater than the focal length (u > f).'
    },
    {
      q: 'The SI unit of electric field is:',
      options: ['N/C', 'V/m', 'Both (a) and (b)', 'J/C'],
      answer: 2,
      explanation: 'The electric field (E) is defined as force per unit charge (F/q), so its unit is N/C. It is also defined as the negative gradient of potential (−dV/dr), giving the unit V/m.'
    },
    {
      q: 'In a step-up transformer, if primary turns are 100 and secondary 200, voltage ratio is:',
      options: ['1:2', '2:1', '1:1', '1:4'],
      answer: 0,
      explanation: 'For an ideal transformer, the voltage ratio is equal to the turns ratio: Vp/Vs = Np/Ns = 100/200 = 1/2.'
    },
    {
      q: 'The moment of inertia of a solid sphere about its diameter is:',
      options: ['(2/5)MR²', '(2/3)MR²', 'MR²', '(1/2)MR²'],
      answer: 0,
      explanation: 'This is a standard result for the moment of inertia of a solid sphere about an axis passing through its center.'
    },
    {
      q: 'Boyle\'s law relates:',
      options: ['P and V', 'P and T', 'V and T', 'n and T'],
      answer: 0,
      explanation: 'Boyle\'s law states that for a fixed amount of gas at a constant temperature, pressure is inversely proportional to volume (P ∝ 1/V).'
    },
    {
      q: 'The de Broglie wavelength of an electron accelerated by 100 V is:',
      options: ['1.22 Å', '0.122 Å', '12.2 Å', '0.0122 Å'],
      answer: 0,
      explanation: 'The de Broglie wavelength for an electron is given by λ(in Å) = 12.27/√V. For V=100 V, λ = 12.27/√100 ≈ 1.227 Å.'
    },
    {
      q: 'In a p-n junction diode, forward bias resistance is low because:',
      options: ['Depletion layer widens', 'Depletion layer narrows', 'Barrier potential increases', 'None'],
      answer: 1,
      explanation: 'Applying a forward bias voltage opposes the built-in potential, which narrows the depletion region and allows current to flow easily, resulting in low resistance.'
    }
  ],
  Chemistry: [
    {
      q: 'The hybridization of carbon in CH₄ is:',
      options: ['sp', 'sp²', 'sp³', 'dsp²'],
      answer: 2,
      explanation: 'In methane (CH₄), the central carbon atom forms four single (sigma) bonds with four hydrogen atoms, resulting in sp³ hybridization.'
    },
    {
      q: 'The pH of 0.1 M HCl is:',
      options: ['1', '2', '7', '14'],
      answer: 0,
      explanation: 'HCl is a strong acid that completely dissociates. So, [H+]=0.1 M=10−1 M. pH = −log[H+]=−log(10−1)=1.'
    },
    {
      q: 'In periodic table, atomic radius increases:',
      options: ['Down the group', 'Across the period', 'Both', 'Neither'],
      answer: 0,
      explanation: 'Atomic radius increases down a group because the number of electron shells increases. It decreases across a period due to increasing nuclear charge.'
    },
    {
      q: 'The IUPAC name of CH₃CH₂COOH is:',
      options: ['Propanoic acid', 'Ethanoic acid', 'Methanoic acid', 'Butanoic acid'],
      answer: 0,
      explanation: 'The molecule has a three-carbon chain (prop-) with a carboxylic acid functional group, hence propanoic acid.'
    },
    {
      q: 'Enthalpy change in a reaction is related to:',
      options: ['Hess\'s law', 'Kirchhoff\'s law', 'Faraday\'s law', 'Ohm\'s law'],
      answer: 0,
      explanation: 'Hess\'s Law of Constant Heat Summation states that the total enthalpy change for a reaction is the same, no matter how many steps the reaction is carried out in.'
    },
    {
      q: 'The oxidation state of Mn in KMnO₄ is:',
      options: ['+2', '+4', '+7', '+5'],
      answer: 2,
      explanation: 'In KMnO₄, K is +1 and each O is -2. Let the oxidation state of Mn be x. So, (+1)+x+4(−2)=0, which gives x=+7.'
    },
    {
      q: 'Raoult\'s law is for:',
      options: ['Ideal solutions', 'Non-ideal solutions', 'Gases', 'Solids'],
      answer: 0,
      explanation: 'Raoult\'s law describes the vapor pressure of ideal solutions, where the partial vapor pressure of each component is proportional to its mole fraction.'
    },
    {
      q: 'The functional group in alcohols is:',
      options: ['-OH', '-COOH', '-NH₂', '-CHO'],
      answer: 0,
      explanation: 'Alcohols are characterized by the hydroxyl (-OH) functional group.'
    },
    {
      q: 'Faraday\'s first law deals with:',
      options: ['Mass deposited', 'Current efficiency', 'Voltage', 'Resistance'],
      answer: 0,
      explanation: 'Faraday\'s first law of electrolysis states that the mass of a substance deposited at an electrode is directly proportional to the quantity of electricity passed through the electrolyte.'
    },
    {
      q: 'The catalyst in Haber\'s process is:',
      options: ['Fe', 'Pt', 'Ni', 'V₂O₅'],
      answer: 0,
      explanation: 'The Haber\'s process for synthesizing ammonia uses an iron (Fe) catalyst, often with a molybdenum promoter.'
    },
    {
      q: 'In SN1 reaction, the order is:',
      options: ['First', 'Second', 'Zero', 'Third'],
      answer: 0,
      explanation: 'The rate of an SN1 (unimolecular nucleophilic substitution) reaction depends only on the concentration of the substrate, making it a first-order reaction.'
    },
    {
      q: 'The monomer of PVC is:',
      options: ['Vinyl chloride', 'Ethylene', 'Styrene', 'Tetrafluoroethylene'],
      answer: 0,
      explanation: 'PVC stands for Polyvinyl Chloride, which is a polymer made from the monomer vinyl chloride (chloroethene).'
    },
    {
      q: 'Le Chatelier\'s principle applies to:',
      options: ['Equilibrium', 'Kinetics', 'Thermodynamics', 'Electrochemistry'],
      answer: 0,
      explanation: 'Le Chatelier\'s principle is used to predict the effect of a change in conditions (like pressure, temperature, or concentration) on a system at chemical equilibrium.'
    },
    {
      q: 'The atomic number of element with electronic configuration [Ar] 3d¹⁰ 4s² is:',
      options: ['28', '29', '30', '31'],
      answer: 2,
      explanation: 'The atomic number of Argon (Ar) is 18. Adding the electrons from the configuration: 18+10+2=30. This element is Zinc (Zn).'
    },
    {
      q: 'Bohr\'s model explains:',
      options: ['Hydrogen spectrum', 'Helium spectrum', 'Neon spectrum', 'All'],
      answer: 0,
      explanation: 'Bohr\'s model was successful in explaining the spectral lines of hydrogen and hydrogen-like ions (which have only one electron).'
    },
    {
      q: 'The shape of XeF₄ is:',
      options: ['Tetrahedral', 'Square planar', 'Octahedral', 'Linear'],
      answer: 1,
      explanation: 'In Xenon tetrafluoride (XeF₄), the central Xe atom has four bonding pairs and two lone pairs, resulting in a square planar molecular geometry.'
    },
    {
      q: 'Normality of 0.5 M H₂SO₄ is:',
      options: ['0.5 N', '1 N', '2 N', '0.25 N'],
      answer: 1,
      explanation: 'Sulfuric acid (H₂SO₄) is a diprotic acid, meaning it can donate 2 protons. Its n-factor is 2. Normality = Molarity × n-factor = 0.5×2=1.0 N.'
    },
    {
      q: 'Cannizzaro reaction is shown by:',
      options: ['Aldehydes without α-H', 'Ketones', 'Alcohols', 'Acids'],
      answer: 0,
      explanation: 'The Cannizzaro reaction is a disproportionation reaction given by aldehydes that do not have a hydrogen atom on the alpha-carbon, such as formaldehyde and benzaldehyde.'
    },
    {
      q: 'The coordination number of NaCl is:',
      options: ['4', '6', '8', '12'],
      answer: 1,
      explanation: 'In the sodium chloride crystal lattice, each Na⁺ ion is surrounded by 6 Cl⁻ ions, and each Cl⁻ ion is surrounded by 6 Na⁺ ions. The coordination number is 6.'
    },
    {
      q: 'In chromatography, Rf value is:',
      options: ['Distance traveled by solute / solvent', 'Distance traveled by solvent / solute', 'Both', 'None'],
      answer: 0,
      explanation: 'The Retention factor (Rf) is defined as the ratio of the distance traveled by the solute to the distance traveled by the solvent front.'
    }
  ],
  Math: [
    {
      q: 'The value of sin(π/3) is:',
      options: ['1/2', '√3/2', '1', '0'],
      answer: 1,
      explanation: 'sin(π/3) is equivalent to sin(60°), which is √3/2.'
    },
    {
      q: 'The derivative of x² is:',
      options: ['x', '2x', 'x²', '1'],
      answer: 1,
      explanation: 'Using the power rule for differentiation, d/dx(x^n) = nx^(n-1). So, d/dx(x²) = 2x^(2-1) = 2x.'
    },
    {
      q: 'The sum of first n natural numbers is:',
      options: ['n(n+1)/2', 'n²', 'n(n-1)/2', 'n²/2'],
      answer: 0,
      explanation: 'This is the standard formula for the sum of an arithmetic progression 1+2+3+...+n.'
    },
    {
      q: 'The integral of 1/x dx is:',
      options: ['ln|x| + C', 'x + C', 'x²/2 + C', 'e^x + C'],
      answer: 0,
      explanation: 'The integral of 1/x is the natural logarithm of the absolute value of x, plus the constant of integration C.'
    },
    {
      q: 'The equation of circle with center (0,0) and radius 5 is:',
      options: ['x² + y² = 25', 'x² + y² = 5', 'x + y = 25', 'x² - y² = 25'],
      answer: 0,
      explanation: 'The general equation of a circle is (x−h)² + (y−k)² = r². With center (h,k)=(0,0) and radius r=5, this becomes x² + y² = 5² = 25.'
    },
    {
      q: 'The probability of getting head in a coin toss is:',
      options: ['1/2', '1', '0', '1/4'],
      answer: 0,
      explanation: 'For a fair coin, there are two equally likely outcomes (Heads, Tails). The probability of getting a head is 1 out of 2.'
    },
    {
      q: 'The roots of x² - 5x + 6 = 0 are:',
      options: ['2,3', '1,6', '-2,-3', '0,5'],
      answer: 0,
      explanation: 'The quadratic equation can be factored as (x−2)(x−3)=0. The roots are x=2 and x=3.'
    },
    {
      q: 'The limit as x→0 of sin(x)/x is:',
      options: ['0', '1', '∞', '-1'],
      answer: 1,
      explanation: 'This is a fundamental trigonometric limit. As x approaches 0, the ratio sin(x)/x approaches 1.'
    },
    {
      q: 'The area of triangle with vertices (0,0), (1,0), (0,1) is:',
      options: ['1/2', '1', '2', '0'],
      answer: 0,
      explanation: 'This forms a right-angled triangle with base 1 and height 1. Area = (1/2) × base × height = (1/2) × 1 × 1 = 1/2.'
    },
    {
      q: 'The binomial expansion of (a+b)³ is:',
      options: ['a³ + 3a²b + 3ab² + b³', 'a³ + b³', 'a³ + 3ab + b³', 'None'],
      answer: 0,
      explanation: 'This is the standard expansion according to the binomial theorem.'
    },
    {
      q: 'The slope of line y = 2x + 3 is:',
      options: ['2', '3', '1', '0'],
      answer: 0,
      explanation: 'The equation is in the slope-intercept form y=mx+c, where m is the slope. Here, m=2.'
    },
    {
      q: 'The number of ways to arrange 3 books is:',
      options: ['6', '3', '9', '1'],
      answer: 0,
      explanation: 'The number of permutations of n distinct objects is n!. So, 3! = 3×2×1=6.'
    },
    {
      q: 'The vector dot product of <1,0> and <0,1> is:',
      options: ['0', '1', '2', '-1'],
      answer: 0,
      explanation: 'The dot product is (1×0)+(0×1)=0. The vectors are orthogonal.'
    },
    {
      q: 'The solution to |x - 2| < 3 is:',
      options: ['-1 < x < 5', 'x > 5', 'x < -1', 'None'],
      answer: 0,
      explanation: 'The inequality can be written as −3 < x−2 < 3. Adding 2 to all parts gives −1 < x < 5.'
    },
    {
      q: 'The sum of geometric series 1 + 1/2 + 1/4 + ... is:',
      options: ['2', '1', '∞', '0'],
      answer: 0,
      explanation: 'This is an infinite geometric series with first term a=1 and common ratio r=1/2. The sum is S = a/(1−r) = 1/(1−1/2) = 2.'
    },
    {
      q: 'The equation tanθ = 1 has solution:',
      options: ['π/4', 'π/2', 'π', '0'],
      answer: 0,
      explanation: 'The principal value for which tan(θ)=1 is θ=π/4 or 45°.'
    },
    {
      q: 'The rank of a 3x3 identity matrix is:',
      options: ['3', '2', '1', '0'],
      answer: 0,
      explanation: 'The rank of a matrix is the number of linearly independent rows (or columns). An identity matrix has full rank, which is equal to its dimension.'
    },
    {
      q: 'The value of log₁₀(100) is:',
      options: ['2', '1', '10', '0'],
      answer: 0,
      explanation: 'log₁₀(100) asks "10 to what power equals 100?". Since 10²=100, the answer is 2.'
    },
    {
      q: 'The distance between points (1,1) and (4,5) is:',
      options: ['5', '√(25)', '3', '4'],
      answer: 0,
      explanation: 'Using the distance formula, d = √[(x₂−x₁)² + (y₂−y₁)²] = √[(4−1)² + (5−1)²] = √[3² + 4²] = √[9+16] = √25 = 5.'
    }
  ],
  Biology: [
    {
      q: 'The site of photosynthesis in plants is:',
      options: ['Chloroplast', 'Mitochondria', 'Nucleus', 'Ribosome'],
      answer: 0,
      explanation: 'Chloroplasts contain chlorophyll, the pigment that captures light energy for photosynthesis.'
    },
    {
      q: 'DNA replication occurs in:',
      options: ['S phase', 'G1 phase', 'G2 phase', 'M phase'],
      answer: 0,
      explanation: 'DNA synthesis (replication) occurs during the S (Synthesis) phase of the cell cycle\'s interphase.'
    },
    {
      q: 'The functional unit of kidney is:',
      options: ['Neuron', 'Nephron', 'Alveoli', 'Villi'],
      answer: 1,
      explanation: 'The nephron is the microscopic structural and functional unit of the kidney responsible for filtering blood and forming urine.'
    },
    {
      q: 'Mendel\'s law of segregation applies to:',
      options: ['Monohybrid cross', 'Dihybrid cross', 'Both', 'None'],
      answer: 2,
      explanation: 'The Law of Segregation, which states that allele pairs separate during gamete formation, is a fundamental principle that applies to all sexually reproducing organisms and is observable in both monohybrid and dihybrid crosses.'
    },
    {
      q: 'The hormone insulin is produced by:',
      options: ['Pancreas', 'Thyroid', 'Adrenal', 'Pituitary'],
      answer: 0,
      explanation: 'Insulin is produced by the beta cells within the islets of Langerhans in the pancreas.'
    },
    {
      q: 'Biodiversity hotspot is characterized by:',
      options: ['High endemism', 'Low species', 'No threats', 'None'],
      answer: 0,
      explanation: 'A biodiversity hotspot must have a high percentage of endemic species (species found nowhere else) and must be under significant threat of habitat loss.'
    },
    {
      q: 'The process of conversion of glucose to glycogen is:',
      options: ['Glycogenesis', 'Glycolysis', 'Gluconeogenesis', 'Glycogenolysis'],
      answer: 0,
      explanation: 'Glycogenesis is the metabolic process of forming glycogen from glucose for storage, primarily in the liver and muscles.'
    },
    {
      q: 'In human blood, the oxygen carrier is:',
      options: ['Hemoglobin', 'Plasma', 'WBC', 'Platelets'],
      answer: 0,
      explanation: 'Hemoglobin is the protein found in red blood cells (RBCs) that binds to and transports oxygen from the lungs to the body\'s tissues.'
    },
    {
      q: 'The largest phylum in animal kingdom is:',
      options: ['Arthropoda', 'Chordata', 'Mollusca', 'Annelida'],
      answer: 0,
      explanation: 'Phylum Arthropoda is the largest and most diverse phylum, including insects, arachnids, crustaceans, and myriapods.'
    },
    {
      q: 'Enzyme used in PCR is:',
      options: ['Taq polymerase', 'Restriction enzyme', 'Ligase', 'Helicase'],
      answer: 0,
      explanation: 'Taq polymerase is a thermostable DNA polymerase used in the Polymerase Chain Reaction (PCR) because it can withstand the high temperatures required for DNA denaturation.'
    },
    {
      q: 'The greenhouse gas is:',
      options: ['CO₂', 'O₂', 'N₂', 'H₂'],
      answer: 0,
      explanation: 'Carbon dioxide (CO₂) is the primary greenhouse gas responsible for trapping heat in the atmosphere.'
    },
    {
      q: 'Crossing over occurs in:',
      options: ['Pachytene', 'Zygotene', 'Diplotene', 'Leptotene'],
      answer: 0,
      explanation: 'Crossing over, the exchange of genetic material between non-sister chromatids of homologous chromosomes, occurs during the pachytene stage of prophase I in meiosis.'
    },
    {
      q: 'The vitamin deficiency causing scurvy is:',
      options: ['Vitamin C', 'Vitamin D', 'Vitamin A', 'Vitamin K'],
      answer: 0,
      explanation: 'Scurvy is a disease resulting from a deficiency of Vitamin C (ascorbic acid), which is required for collagen synthesis.'
    },
    {
      q: 'The symbiotic association of algae and fungi is:',
      options: ['Lichen', 'Mycorrhiza', 'Rhizobium', 'None'],
      answer: 0,
      explanation: 'A lichen is a composite organism arising from the symbiotic relationship between algae (or cyanobacteria) and fungi.'
    },
    {
      q: 'The human heart has:',
      options: ['4 chambers', '2 chambers', '3 chambers', '1 chamber'],
      answer: 0,
      explanation: 'The human heart consists of four chambers: two upper atria and two lower ventricles.'
    },
    {
      q: 'The theory of evolution by natural selection was proposed by:',
      options: ['Darwin', 'Lamarck', 'Mendel', 'Watson'],
      answer: 0,
      explanation: 'Charles Darwin, in his book "On the Origin of Species," proposed the theory of evolution by natural selection.'
    },
    {
      q: 'The cell wall of bacteria is made of:',
      options: ['Peptidoglycan', 'Cellulose', 'Chitin', 'Lignin'],
      answer: 0,
      explanation: 'The main structural component of bacterial cell walls is peptidoglycan. Plant cell walls are made of cellulose, and fungal cell walls are made of chitin.'
    },
    {
      q: 'In plants, water is transported through:',
      options: ['Xylem', 'Phloem', 'Stomata', 'Roots'],
      answer: 0,
      explanation: 'Xylem is the vascular tissue in plants that conducts water and dissolved nutrients upward from the root to the rest of the plant.'
    },
    {
      q: 'The genetic material in viruses can be:',
      options: ['DNA or RNA', 'Only DNA', 'Only RNA', 'Protein'],
      answer: 0,
      explanation: 'Viruses can have either DNA or RNA as their genetic material, which can be single-stranded or double-stranded, but never both.'
    },
    {
      q: 'The process of formation of ATP in mitochondria is:',
      options: ['Oxidative phosphorylation', 'Photophosphorylation', 'Glycolysis', 'Krebs cycle'],
      answer: 0,
      explanation: 'Oxidative phosphorylation is the metabolic pathway in which cells use enzymes to oxidize nutrients, thereby releasing chemical energy in order to produce ATP. It occurs in the mitochondria.'
    }
  ]
};

export default questionsData;
