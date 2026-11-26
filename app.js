const cards = [
{id:"BIO04",level:"placement",topic:"Biochemistry",q:"Which nutrients are particularly important in refeeding syndrome?",a:"Phosphate, potassium and magnesium are particularly important to monitor because their levels can fall during refeeding. Thiamine (vitamin B1) is also important, and vitamin supplementation should follow the relevant clinical guidance.",hint:"Think about the three key electrolytes and an important B vitamin.",reference:"NICE CG32",referenceUrl:"https://www.nice.org.uk/guidance/cg32",referenceNote:"Recommendation 1.4.8 covers the management of people at high risk of refeeding problems."},
{id:"MED01",level:"placement",topic:"Medicines",q:"What class of medicine is omeprazole?",a:"Omeprazole is a proton pump inhibitor (PPI) which helps reduce gastric acid secretion. It may be given to help reduce indigestion, regurgitation (reflux) and ulcers.",hint:"Think about medicines used to reduce stomach acid.",reference:"BNF Omeprazole",referenceUrl:"https://bnf.nice.org.uk/drugs/omeprazole/",referenceNote:"Date accessed:15th November 2026"},
{id:"MED02",level:"fresh",topic:"Medicines",q:"What is the main action of metformin?",a:"Metformin is used in the management of type 2 diabetes. It primarily reduces hepatic glucose production and improves insulin sensitivity. Prescribing decisions depend on individual factors, including renal function. Metformin is contraindicated when eGFR is below 30 mL/min/1.73 m²; prescribing and monitoring should follow current guidance and the individual clinical context.",reference:"BNF Metformin Hydrochloride",referenceUrl:"https://bnf.nice.org.uk/drugs/metformin-hydrochloride/",referenceNote:"Date accessed: 15th November 2026"},
{id:"MED03",level:"placement",topic:"Medicines",q:"What type of medicine is furosemide?",a:"Furosemide is a loop diuretic. It increases sodium and water excretion by acting in the loop of Henle.",reference:"BNF Furosemide",referenceUrl:"https://bnf.nice.org.uk/drugs/furosemide/",referenceNote:"Date accessed: 23rd November 2026"},
{id:"MED04",level:"placement",topic:"Medicines",q:"What type of medicine is sertraline?",a:"A selective serotonin reuptake inhibitor (SSRI), commonly used as an antidepressant.",reference:"BNF Sertraline",referenceUrl:"https://bnf.nice.org.uk/drugs/sertraline/",referenceNote:"Date accessed: 23rd November 2026"},
{id:"MED05",level:"placement",topic:"Medicines",q:"What does a loop diuretic do?",a:"Loop diuretics help to remove excess fluid by increasing the need for urination. Mainly used to treat oedema, but can also be used for hypertension.",reference:"BNF Diuretics",referenceUrl:"https://bnf.nice.org.uk/treatment-summaries/diuretics/",referenceNote:"See also CUH patient information on loop diuretics: https://www.cuh.nhs.uk/patient-information/loop-diuretics-water-tablets/"}, 
{id:"REN01",level:"placement",topic:"Renal",q:"Why might serum potassium be monitored in someone with impaired kidney function?",a:"The kidneys play an important role in potassium excretion. Reduced kidney function can contribute to an increased serum potassium concentration, although medicines, intake, tissue breakdown and other factors can also affect the result.",reference:"NHS",referenceUrl:"https://www.nhs.uk/tests-and-treatments/potassium-test/",referenceNote:"Date accessed: 23rd November 2026"},
{id:"REN02",level:"fresh",topic:"Renal",q:"What does eGFR estimate?",a:"Estimated glomerular filtration rate (eGFR) is an estimate of how well the kidneys filter waste from the blood. It is interpreted alongside other information, including trends, urine findings and the person's clinical context.",reference:"Lab Tests Online UK",referenceUrl:"https://labtestsonline.org.uk/tests/egfr-estimated-creatinine-clearance",referenceNote:"Date accessed:23rd November 2026"},
{id:"REN03",level:"band5",topic:"Renal",q:"Why should potassium advice be individualised in chronic kidney disease?",a:"Potassium needs and restrictions depend on blood results, kidney function, medicines, treatment and overall dietary intake. Blanket restriction can unnecessarily reduce food variety and nutritional quality.",hint:"A diagnosis alone does not tell you the person's current potassium status."},
{id:"BIO01",level:"placement",topic:"Biochemistry",q:"What can a raised C-reactive protein (CRP) indicate?",a:"CRP is an inflammatory marker. A raised result can indicate inflammation or infection, but it is non-specific and must be interpreted with symptoms, examination and other investigations.",reference:"Lab Tests Online UK",referenceUrl:"https://labtestsonline.org.uk/tests/c-reactive-protein-crp",referencenote:"Date accessed: 23 November 2026"},
{id:"BIO02",level:"band5",topic:"Biochemistry",q:"Why should albumin not be used on its own to diagnose malnutrition?",a:"Albumin is affected by inflammation, illness, fluid status, liver function and other factors. It is not a direct measure of nutritional status and should not be used alone to diagnose malnutrition.",hint:"Consider how inflammation and fluid shifts affect blood proteins."},
{id:"BIO03",level:"fresh",topic:"Biochemistry",q:"What does haemoglobin (Hb) help assess?",a:"Haemoglobin is the oxygen-carrying protein in red blood cells. A low Hb may indicate anaemia, but interpretation requires the full blood count, indices, history and clinical context.",reference:"Lab Tests Online UK",referenceUrl:"https://labtestsonline.org.uk/tests/haemoglobin",referenceNote:"Date accessed: 23rd November 2026"},

{id:"NUT01",level:"fresh",topic:"Nutrition",q:"What is the main role of dietary fibre?",a:"Dietary fibre supports normal bowel function. Different fibre types have different properties; some help stool bulk, while others are fermented by gut bacteria. Adequate fluid intake is also relevant for many people.",reference:"BDA Fibre",referenceUrl:"https://www.bda.uk.com/resource/fibre.html",referenceNote:"Date accessed: 23rd November 2026"},
{id:"NUT02",level:"fresh",topic:"Nutrition",q:"What is the purpose of the Eatwell Guide?",a:"The Eatwell Guide illustrates the proportions of different food groups that make up a healthy, balanced diet over time. It is a population-level guide, not a prescriptive meal plan for every individual.",reference:"NHS Eat Well Guide",referenceUrl:"https://www.nhs.uk/live-well/eat-well/food-guidelines-and-food-labels/the-eatwell-guide/",referenceNote:"Date accessed: 23rd November 2026"},
{id:"NUT03",level:"fresh",topic:"Nutrition",q:"What is insoluble and soluble fibre?",a:"Soluble fibre mixes with water in your gut and turns into a gel like substance that gut bacteria can breakdown, it is found in fruit, vegetables and oatmea, and it can help with diarrhoea and constipation, however too much may cause loose stools. Insoluble fibre does not get broken down and helps form a larger stool, it can speed up the passage of food and waste products.",reference:"NHS North Bristol",referenceUrl:"https://www.uhd.nhs.uk/uploads/about/docs/our_publications/patient_information_leaflets/physiotherapy/fibre.pdf"},
{id:"SUP01",level:"placement",topic:"Nutrition support",q:"What does MUST stand for in nutrition screening?",a:"MUST stands for Malnutrition Universal Screening Tool. It is used to identify adults at risk of malnutrition using BMI, unplanned weight loss and the effect of acute disease on nutritional intake.",reference:"BAPEN",referenceUrl:"https://www.bapen.org.uk/pdfs/must/must_full.pdf",referenceNote:"Date accessed: 23rd November 2026"},
{id:"DIA01",level:"placement",topic:"Diabetes",q:"What is the difference between type 1 and type 2 diabetes?",a:"In type 1 diabetes, the immune system destroys the pancreatic beta cells that produce insulin, so the person requires insulin replacement. In type 2 diabetes, insulin resistance and progressive impairment of insulin secretion contribute to raised blood glucose. Individual management varies.",reference:"Diabetes UK",referenceurl:"https://www.diabetes.org.uk/diabetes-the-basics/differences-between-type-1-and-type-2-diabetes",referenceNote:"Date accessed: 23rd November 2026"},
{id:"DIA02",level:"fresh",topic:"Diabetes",q:"What does HbA1c represent?",a:"HbA1c reflects average blood glucose exposure over approximately the previous 2–3 months. It is used in diabetes diagnosis and monitoring, but results need interpretation in clinical context because some conditions can affect its reliability.",reference:"Diabetes UK",referenceUrl:"https://www.diabetes.org.uk/about-diabetes/looking-after-diabetes/hba1c",referenceNote:"Date accessed: 23rd November 2026"},
{id:"LIV01",level:"fresh",topic:"Liver",q:"What is one important digestive role of bile?",a:"Bile helps emulsify dietary fats, increasing the surface area available to pancreatic lipase. Bile also supports absorption of fat-soluble vitamins. It is produced by the liver and stored in the gallbladder."},
{id:"LIV02",level:"band5",topic:"Liver",q:"Why can people with advanced liver disease be at risk of malnutrition?",a:"Factors can include reduced appetite, nausea, early satiety from ascites, altered metabolism, inflammation and increased nutritional requirements in some circumstances. Assessment should consider the person's symptoms, intake, clinical status and guidance.",hint:"Think about symptoms, intake and altered metabolism."},
{id:"DIG01",level:"fresh",topic:"Digestive tract",q:"Where does most nutrient absorption take place?",a:"Most digestion and nutrient absorption take place in the small intestine. Its large surface area, folds, villi and microvilli support absorption. Different nutrients are absorbed at different sites and by different mechanisms.",reference:"Great Ormond Street Hospital",referenceUrl:"https://www.gosh.nhs.uk/wards-and-departments/departments/clinical-specialties/gastroenterology/how-our-digestive-system-works-and-keeping-it-healthy/",referenceNote:"Date accessed: 23rd November 2026"},
{id:"DIG02",level:"fresh",topic:"Digestive tract",q:"What is the main role of the large intestine?",a:"The large intestine absorbs water and electrolytes, provides a site for fermentation by gut bacteria and forms and stores faeces before elimination. Its function is influenced by diet, hydration and gut health."},
{id:"MED06",level:"fresh",topic:"Medicines",q:"What is a proton pump inhibitor (PPI) medication?",a:"A proton pump inhibitor (PPI), such as omeprazole, reduces stomach acid by blocking the hydrogen-potassium ATPase enzyme (the proton pump) in gastric parietal cells. PPIs are commonly prescribed for conditions such as gastro-oesophageal reflux disease (GORD), peptic ulcers and to help protect the stomach in people at increased risk of ulcers. Long-term use should be reviewed periodically because the ongoing need and potential risks vary between individuals.",reference:"BNF Omeprazole",referenceUrl:"https://bnf.nice.org.uk/drugs/omeprazole/",referenceNote:"23rd November 2026"},

{id:"MED07",level:"placement",topic:"Medicines",q:"A patient is taking metformin, Laxido, furosemide and spironolactone. What complications or clinical issues might they be presenting with?",a:"The medicines suggest several possible co-existing conditions: metformin is commonly used for type 2 diabetes; Laxido (macrogol) is used to treat constipation; furosemide is a loop diuretic often prescribed for fluid overload or oedema; and spironolactone is a potassium-sparing diuretic used in conditions including heart failure, oedema and some cases of hypertension. The combination of furosemide and spironolactone may be used in heart failure or fluid overload, but medicines alone do not establish a diagnosis. Consider fluid balance, blood pressure, renal function and electrolytes. Furosemide can contribute to low potassium, while spironolactone can contribute to high potassium; both can affect renal function and hydration. Assess the person's symptoms and blood results, and discuss concerns with the supervising clinician.",hint:"Think about diabetes, constipation, fluid balance, kidney function and electrolytes."},
{id:"BIO05",level:"placement",topic:"Biochemistry",q:"What does a white blood cell count (WBC) test measure? ",a:"A white blood cell count (WBC) measures the number of white blood cells (leukocytes) in a volume of blood. These cells are part of the immune system and help the body respond to infection and other threats. A raised count (leucocytosis) can occur with infection, inflammation, physical stress and some medicines or blood disorders. A low count (leucopenia) can occur with some infections, medicines, autoimmune conditions or bone marrow problems. The total count should be interpreted alongside the white cell differential, symptoms and other results; it does not identify a specific cause by itself.",hint:"Think about the cells involved in the body's immune response."},
{id:"BIO06",level:"placement",topic:"Biochemistry",q:"What does a urea blood test measure?",a:"Urea is a waste product formed in the liver when the body breaks down protein. It travels in the blood to the kidneys, which remove it in urine. A raised blood urea can occur when kidney function is reduced, but it may also be associated with dehydration, increased protein breakdown or a high protein intake, among other causes. A low result may occur with low protein intake, reduced urea production in liver disease or overhydration. Urea is not a specific measure of kidney function on its own, so it is interpreted alongside creatinine, eGFR, fluid status and the clinical picture.",hint:"Think about a waste product formed when the body breaks down protein.",refernce:"Lab Tests Online UK",refrenceUrl:"https://labtestsonline.org.uk/tests/urea-test"},
{id:"BIO07",level:"placement",topic:"Biochemistry",q:"What does a creatinine blood test measure?",a:"Creatinine is a waste product produced mainly from the normal breakdown of creatine in muscles. It is filtered from the blood by the kidneys. A raised blood creatinine can indicate reduced kidney filtration, although muscle mass, diet, some medicines and other factors can affect the result. Creatinine is used in the calculation of estimated glomerular filtration rate (eGFR), which helps assess kidney function. Results are most useful when considered alongside previous values, urine tests and the person's clinical context.",hint:"Think about a waste product produced by muscles."},
{id:"BIO08",level:"placement",topic:"Biochemistry",q:"What do the ALP and ALT blood tests measure?",a:"ALT (alanine aminotransferase) is an enzyme found mainly in liver cells; a raised level can indicate liver cell injury. ALP (alkaline phosphatase) is found in several tissues, particularly the bile ducts and bones. A raised ALP may be associated with cholestasis or biliary obstruction, but can also have a bone-related cause. Looking at ALT, ALP and other liver blood tests together can help identify a pattern of liver or biliary abnormality. Neither test gives a diagnosis on its own, and results need interpretation with symptoms, history and other investigations.",hint:"Both are enzymes used when investigating liver and biliary conditions, but they provide different clues."},
{id:"BIO09",level:"fresh",topic:"Biochemistry",q:"How would you explain hyperlipidaemia to a patient?",a:"Hyperlipidaemia means that there are higher-than-healthy levels of fats (lipids) in the blood. These may include cholesterol and triglycerides. Over time, certain lipid patterns can increase the risk of fatty deposits building up in blood vessels, which can raise the risk of cardiovascular disease. Cholesterol is also needed by the body, so the aim is not to remove all fat from the diet. Management depends on the person's overall cardiovascular risk and may include dietary and lifestyle changes and, for some people, medication.",hint:"Think about higher-than-expected levels of fats in the blood, such as cholesterol or triglycerides."},
{id:"NUT04",level:"fresh",topic:"Nutrition",q:"What are the six main nutrients, and what role does each play in the human body?",a:"The six main nutrients are carbohydrate, protein, fat, vitamins, minerals and water. Carbohydrate is an important energy source. Protein provides amino acids for growth, maintenance and repair of tissues and is also used to make enzymes and hormones. Fat provides energy, supplies essential fatty acids, helps form cell membranes and supports absorption of vitamins A, D, E and K. Vitamins and minerals are needed in relatively small amounts for processes such as metabolism, immunity, bone health and nerve function. Water supports transport, temperature regulation, digestion and many chemical reactions in the body.",hint:"Separate the nutrients that provide energy from those needed for regulation and normal body function."},
{id:"NUT05",level:"fresh",topic:"Nutrition",q:"What is the difference between macronutrients and micronutrients?",a:"Macronutrients are nutrients needed in relatively large amounts. They include carbohydrate, protein and fat, which provide energy and/or materials for growth and normal body function. Water is also required in large amounts, although it does not provide energy. Micronutrients are needed in smaller amounts and include vitamins and minerals. They do not provide energy, but are essential for processes such as energy metabolism, immune function, blood formation and bone health.",hint:"Think about the quantities the body needs."},
{id:"NUT06",level:"fresh",topic:"Nutrition",q:"What are the main functions of carbohydrates, and what is the difference between simple and complex carbohydrates?",a:"Carbohydrates are an important source of energy. They are broken down into sugars, including glucose, which can be used by cells or stored as glycogen. Simple carbohydrates include sugars made of one or two sugar units; sources include fruit, milk and foods containing added sugar. Complex carbohydrates include starch and many types of dietary fibre, and are found in foods such as potatoes, bread, rice, pasta, pulses and wholegrains. The effect of a carbohydrate food on blood glucose depends on more than whether it is labelled simple or complex; portion size, processing, fibre and the rest of the meal also matter. Wholegrain and higher-fibre choices can support bowel and cardiometabolic health.",hint:"Think about energy, sugars, starches and fibre."},
{id:"NUT07",level:"fresh",topic:"Nutrition",q:"What are the differences between saturated, unsaturated and trans fats?",a:"Saturated fats contain no double bonds in their fatty acid chains and are commonly found in butter, fatty and processed meats, cheese, pastries and some tropical oils. Unsaturated fats contain one or more double bonds; sources include olive and rapeseed oils, nuts, seeds, avocado and oily fish. Trans fats are unsaturated fats with a particular structure; industrially produced trans fats have been reduced in many food supplies, but can still be present in some foods. Replacing some saturated fat with unsaturated fat can help improve blood cholesterol levels and reduce cardiovascular risk. Dietary fat is still needed for energy, essential fatty acids and absorption of fat-soluble vitamins.",hint:"Think about their chemical structure and typical food sources."},
{id:"NUT08",level:"fresh",topic:"Nutrition",q:"Why is dietary protein important, and what are essential amino acids?",a:"Protein supplies amino acids needed to build and repair body tissues and to make enzymes, hormones, transport proteins and components of the immune system. It can also provide energy when needed. Proteins are made from amino acids. Essential amino acids cannot be made by the body in sufficient amounts, so they must be obtained from food. Animal foods such as eggs, dairy, fish and meat provide all the essential amino acids; a varied combination of plant foods, including pulses, grains, nuts and seeds, can also provide them.",hint:"Think about growth, maintenance, repair and amino acids the body cannot make in sufficient amounts."},
{id:"DIG03",level:"fresh",topic:"Digestive tract",q:"What happens to food during digestion, from the mouth to the small intestine?",a:"Digestion begins in the mouth, where chewing breaks food into smaller pieces and saliva moistens it. Salivary amylase starts the digestion of starch. Food is swallowed and moved down the oesophagus by muscular contractions called peristalsis. In the stomach, muscular mixing and gastric acid help break food down; pepsin begins protein digestion. The partially digested contents then enter the small intestine. Bile helps emulsify fats, while enzymes from the pancreas digest carbohydrates, proteins and fats. Enzymes on the small-intestinal surface complete digestion, and the resulting nutrients are absorbed through the intestinal lining.",hint:"Follow the journey through the mouth, oesophagus, stomach and small intestine."},
{id:"DIG04",level:"fresh",topic:"Digestive tract",q:"What are the main functions of the stomach?",a:"The stomach temporarily stores food and mixes it with gastric secretions to form a semi-liquid mixture called chyme. Hydrochloric acid creates an acidic environment, helps denature proteins and supports the action of pepsin, which begins protein digestion. The stomach also produces intrinsic factor, which is needed for vitamin B12 absorption later in the small intestine. Mucus helps protect the stomach lining from acid and digestive enzymes. The stomach gradually releases chyme into the small intestine.",hint:"Think about how the stomach prepares food for further digestion."},
{id:"DIG05",level:"fresh",topic:"Digestive tract",q:"What is the role of the small intestine in nutrient absorption?",a:"The small intestine is the main site of digestion and absorption of most nutrients. It receives bile and pancreatic secretions, which help digest fats, carbohydrates and proteins. Its lining has folds, villi and microvilli, creating a large surface area for absorption. Digested sugars and amino acids enter blood capillaries, while most absorbed dietary fats are packaged into chylomicrons and enter the lymphatic system before reaching the bloodstream. Different nutrients are absorbed at different sites and by different transport mechanisms.",hint:"Think about the folds, villi and microvilli that increase surface area."},
{id:"DIG06",level:"fresh",topic:"Digestive tract",q:"What is the function of the large intestine, and how does it contribute to gut health?",a:"The large intestine absorbs remaining water and electrolytes from intestinal contents and helps form and store faeces. Gut bacteria ferment some of the dietary fibre and other substances that reach the colon, producing short-chain fatty acids and other metabolites. These can support the health and function of the colonic lining. The gut microbiota also interact with the immune system. Fibre intake, hydration, medicines and health conditions can all influence bowel function.",hint:"Think about what remains after most nutrient absorption has taken place."},
{id:"DIG07",level:"fresh",topic:"Digestive tract",q:"What roles do the liver and pancreas play in digestion and metabolism?",a:"The liver produces bile, which helps emulsify fats and supports absorption of fat-soluble vitamins. It also has important metabolic roles, including regulating blood glucose, processing nutrients absorbed from the gut, storing glycogen and vitamins, and metabolising many medicines. The pancreas has an exocrine role in digestion: it releases enzymes that break down carbohydrates, proteins and fats, as well as bicarbonate to help neutralise acidic stomach contents in the small intestine. It also has an endocrine role, releasing hormones such as insulin and glucagon to help regulate blood glucose.",hint:"Think about bile from the liver and digestive enzymes from the pancreas."},
{id:"VIT01",level:"fresh",topic:"Vitamins and minerals",q:"What is the difference between fat-soluble and water-soluble vitamins? Give examples of each.",a:"Fat-soluble vitamins are vitamins A, D, E and K. They are absorbed alongside dietary fat and can be stored in the liver and body fat, so excessive intake of some of these vitamins can build up and cause harm. Water-soluble vitamins include the B-group vitamins and vitamin C. They are generally not stored in large amounts (although vitamin B12 is stored in the liver), so regular dietary intake is important. Excess amounts of many water-soluble vitamins are excreted in urine, but high-dose supplements can still be harmful.",hint:"Think about vitamins A, D, E and K compared with the B vitamins and vitamin C."},
{id:"VIT02",level:"fresh",topic:"Vitamins and minerals",q:"What are the functions of iron in the body, and what can happen when someone has an iron deficiency?",a:"Iron is needed to make haemoglobin, the protein in red blood cells that carries oxygen around the body. It is also involved in other processes, including energy metabolism and normal immune function. Iron deficiency can reduce the body's ability to make healthy red blood cells and may lead to iron-deficiency anaemia. Possible symptoms include tiredness, weakness, shortness of breath on exertion and difficulty concentrating, although some people have few symptoms initially. Causes can include low intake, poor absorption or blood loss; assessment should consider the full blood count, ferritin and clinical context.",hint:"Think about oxygen transport and iron-deficiency anaemia."},
{id:"VIT03",level:"fresh",topic:"Vitamins and minerals",q:"Why is calcium important, and which foods are good sources?",a:"Calcium is important for building and maintaining bones and teeth. It is also needed for muscle contraction, nerve signalling and normal blood clotting. Sources include milk, yoghurt and cheese; calcium-fortified plant drinks and yoghurts; calcium-set tofu; some green vegetables such as kale; and fish eaten with edible bones, such as sardines. The amount of calcium available varies between foods, and not all plant sources are absorbed equally well.",hint:"Think about bones and teeth, muscle contraction and nerve function."},
{id:"VIT04",level:"fresh",topic:"Vitamins and minerals",q:"What is the role of vitamin D in calcium regulation and bone health?",a:"Vitamin D helps the body absorb calcium (and phosphate) from the intestine and supports normal bone mineralisation. If vitamin D is insufficient, calcium absorption can fall, which can affect bone health. Severe deficiency in children can cause rickets, while in adults it can cause osteomalacia. Vitamin D is made in the skin through exposure to sunlight and is also found in some foods, including oily fish, egg yolk and fortified products. In the UK, supplementation advice depends on age, circumstances and risk of deficiency.",hint:"Think about the relationship between vitamin D, calcium absorption and bone mineralisation."},
{id:"GAS01",level:"fresh",topic:"Gastro",q:"What is irritable bowel syndrome (IBS)?",a:"IBS is a disorder of gut–brain interaction characterised by symptoms such as abdominal pain associated with changes in bowel habit, including diarrhoea, constipation or both. It does not cause the same structural inflammation or damage to the bowel seen in IBD. Symptoms and dietary triggers vary, so assessment should be individualised.",hint:"Think about abdominal pain and a change in bowel habit."},
{id:"GAS02",level:"placement",topic:"Gastro",q:"What dietary factors might a dietitian explore when assessing someone with IBS?",a:"Explore the person's usual eating pattern, meal regularity, fluid intake, fibre type and amount, caffeine, alcohol, and any perceived food–symptom relationships. Advice should be tailored to symptoms and nutritional adequacy. A low-FODMAP diet may be considered for some people with ongoing symptoms, but it should be delivered with support from a suitably trained dietitian and include reintroduction and personalisation.",hint:"Start with a detailed dietary and symptom history rather than assuming one food is responsible."},
{id:"GAS03",level:"fresh",topic:"Gastro",q:"What conditions are included under inflammatory bowel disease (IBD)?",a:"The two main forms of IBD are Crohn's disease and ulcerative colitis. Both involve chronic inflammation of the gastrointestinal tract, but they differ in the areas affected and the pattern of inflammation. IBD is distinct from IBS.",hint:"Think of the two main inflammatory bowel conditions."},
{id:"GAS04",level:"placement",topic:"Gastro",q:"Why is malnutrition a concern for some people with active IBD?",a:"Active inflammation can increase nutritional requirements and contribute to reduced appetite, pain, diarrhoea and reduced intake. Some people may also experience nutrient losses, malabsorption, or increased needs following surgery. Nutritional assessment should consider disease activity, weight history, intake, symptoms, blood results and possible deficiencies.",hint:"Consider both reduced intake and the effects of inflammation on requirements and absorption."},
{id:"GAS05",level:"fresh",topic:"Gastro",q:"What is coeliac disease?",a:"Coeliac disease is an autoimmune condition in which eating gluten triggers an immune response that damages the lining of the small intestine. This can affect nutrient absorption and may cause gastrointestinal and non-gastrointestinal symptoms. It is managed with a strict, lifelong gluten-free diet after diagnosis.",hint:"Think about the immune response to gluten and the small-intestinal lining."},
{id:"GAS06",level:"placement",topic:"Gastro",q:"Which grains must be avoided in a gluten-free diet for coeliac disease?",a:"Wheat (including varieties such as spelt), barley and rye contain gluten and must be avoided. Oats are naturally gluten-free but can be contaminated during production, so people with coeliac disease should choose oats labelled gluten-free and follow individual clinical advice. Food labels and cross-contamination are important considerations.",hint:"Remember wheat, barley and rye; check oats and food labelling carefully."},
{id:"DIA03",level:"fresh",topic:"Diabetes",q:"What is the main role of insulin in blood glucose regulation?",a:"Insulin is a hormone produced by pancreatic beta cells. It helps regulate blood glucose by promoting glucose uptake in insulin-sensitive tissues, supporting glucose storage as glycogen and reducing glucose release by the liver. In type 1 diabetes, insulin production is severely reduced or absent; in type 2 diabetes, insulin resistance and impaired insulin secretion contribute to hyperglycaemia.",hint:"Think about how insulin helps move and store glucose.",reference:"Diabetes UK",referenceUrl:"https://www.diabetes.org.uk/diabetes-the-basics/how-diabetes-works"},
{id:"DIA04",level:"placement",topic:"Diabetes",q:"What is hypoglycaemia, and what symptoms might someone experience?",a:"Hypoglycaemia (a 'hypo') is a lower-than-normal blood glucose level. Symptoms can include sweating, trembling, hunger, dizziness, palpitations, difficulty concentrating and confusion. It is particularly relevant for people using insulin or certain glucose-lowering medicines. Follow the person's agreed care plan and local hypo protocol; severe symptoms or reduced consciousness require urgent assistance.",hint:"Think about symptoms caused by blood glucose falling too low.",reference:"NHS — Low blood sugar (hypoglycaemia)",referenceUrl:"https://www.nhs.uk/conditions/low-blood-sugar-hypoglycaemia/"},
{id:"DIA05",level:"placement",topic:"Diabetes",q:"What dietary factors might a dietitian consider when supporting someone with type 2 diabetes?",a:"Explore the person's usual eating pattern, carbohydrate sources and portions, fibre intake, meal pattern, preferences, culture, food access and wider health needs. Advice may include choosing higher-fibre carbohydrate foods and reducing free sugars where appropriate, while considering cardiovascular risk and the person's medicines. Avoid assuming that one eating pattern suits everyone; agree realistic, individualised goals.",hint:"Consider carbohydrate quality and quantity, overall dietary pattern and the person's circumstances.",reference:"NICE NG28 — Type 2 diabetes in adults: management",referenceUrl:"https://www.nice.org.uk/guidance/ng28"},
{id:"DIA06",level:"placement",topic:"Diabetes",q:"Why is carbohydrate counting important for some people with type 1 diabetes?",a:"For people using insulin regimens that match mealtime insulin to carbohydrate intake, carbohydrate counting helps estimate the carbohydrate in meals and snacks so insulin can be adjusted according to their individual prescribed plan. Education should be provided by the diabetes team, and insulin doses should not be changed without following the person's agreed clinical guidance.",hint:"Think about matching mealtime insulin with the carbohydrate eaten.",reference:"NHS — Type 1 diabetes",referenceUrl:"https://www.nhs.uk/conditions/type-1-diabetes/"},
{id:"GAS07",level:"fresh",topic:"Gastro",q:"What is one key difference between Crohn's disease and ulcerative colitis?",a:"Crohn's disease can affect any part of the gastrointestinal tract from mouth to anus and may involve patches of inflammation with areas of healthy tissue in between. Ulcerative colitis affects the colon and rectum, with inflammation typically starting in the rectum and extending continuously. The pattern varies between individuals, and diagnosis is made by the specialist team.",hint:"Consider which parts of the gastrointestinal tract can be affected and whether inflammation is continuous.",reference:"Crohn's & Colitis UK",referenceUrl:"https://crohnsandcolitis.org.uk/"},
{id:"GAS08",level:"placement",topic:"Gastro",q:"Why might nutritional deficiencies occur in someone with Crohn's disease?",a:"Potential contributors include reduced intake due to pain, nausea or poor appetite; inflammation; diarrhoea; blood loss; malabsorption where parts of the small intestine are affected or have been removed; and increased requirements during active disease. The risks depend on disease location, activity, surgery and the individual's diet, so assessment and monitoring should be tailored.",hint:"Think about intake, inflammation, losses, absorption and previous surgery.",reference:"Crohn's & Colitis UK",referenceUrl:"https://crohnsandcolitis.org.uk/"},
{id:"GAS09",level:"fresh",topic:"Gastro",q:"What does the term FODMAP refer to?",a:"FODMAPs are fermentable oligosaccharides, disaccharides, monosaccharides and polyols: groups of short-chain carbohydrates that may be poorly absorbed in the small intestine and fermented by gut bacteria. In some people with IBS they can contribute to symptoms such as bloating, pain and altered bowel habit. A low-FODMAP approach is not suitable for everyone and should be guided by a suitably trained dietitian, including reintroduction and personalisation.",hint:"The acronym describes several groups of fermentable short-chain carbohydrates.",reference:"Monash University — FODMAP",referenceUrl:"https://www.monashfodmap.com/"},
{id:"GAS10",level:"placement",topic:"Gastro",q:"Why is it important that someone continues eating gluten until coeliac testing is completed, unless advised otherwise by their clinician?",a:"Starting a gluten-free diet before testing can reduce the accuracy of coeliac blood tests and intestinal biopsy because the immune response and intestinal changes may begin to improve. The person should generally continue eating gluten during the diagnostic process unless their healthcare professional advises otherwise. They should discuss any concerns or symptoms with their clinical team rather than starting a gluten-free diet independently.",hint:"Think about how removing gluten could affect the test results.",reference:"Coeliac UK — Getting diagnosed",referenceUrl:"https://www.coeliac.org.uk/information-and-support/coeliac-disease/getting-diagnosed/"},
{id:"MED08",level:"fresh",topic:"Medicines",q:"What is the main role of insulin, and why is it important for dietitians to know when someone uses it?",a:"Insulin is a hormone that helps regulate blood glucose. People with diabetes may use insulin because their body does not produce enough or cannot use it effectively. Food intake, especially carbohydrate, physical activity, illness and insulin action can all influence blood glucose. Dietitians should understand the person's insulin regimen and coordinate nutrition advice with their diabetes team; insulin doses should only be adjusted according to the person's agreed clinical plan.",hint:"Consider the relationship between insulin, carbohydrate intake and blood glucose.",reference:"NHS — Insulin",referenceUrl:"https://www.nhs.uk/medicines/insulin/"},
{id:"MED09",level:"placement",topic:"Medicines",q:"What nutritional and metabolic effects might be associated with long-term corticosteroid treatment, such as prednisolone?",a:"Corticosteroids can increase appetite and contribute to weight gain, raised blood glucose, fluid retention and changes in bone health, particularly with prolonged use. The effects vary with dose and duration. Dietitians may need to consider the person's glucose control, dietary pattern, cardiovascular risk and bone health, while working with the wider clinical team.",hint:"Think about appetite, blood glucose, fluid balance and bone health.",reference:"NHS — Prednisolone",referenceUrl:"https://www.nhs.uk/medicines/prednisolone/"},
{id:"MED10",level:"placement",topic:"Medicines",q:"Why should dietitians be aware if a patient takes warfarin?",a:"Warfarin is an anticoagulant. Vitamin K can affect how warfarin works, so sudden or substantial changes in vitamin K intake may alter anticoagulation control. Patients are generally advised to keep their vitamin K intake consistent rather than avoid vitamin K-containing foods. Any dietary changes should be discussed with the anticoagulation team, and INR monitoring should follow the prescribed plan.",hint:"Think about vitamin K and the importance of consistency rather than avoidance.",reference:"NHS — Warfarin",referenceUrl:"https://www.nhs.uk/medicines/warfarin/"},
{id:"MED11",level:"fresh",topic:"Medicines",q:"What is levothyroxine used for, and how can food affect its absorption?",a:"Levothyroxine is a synthetic thyroid hormone used to treat an underactive thyroid (hypothyroidism). Its absorption can be affected by food and some medicines or supplements, including calcium and iron preparations. It is usually taken consistently on an empty stomach, following the prescriber's or pharmacist's instructions. Dietitians should check supplement use and avoid giving advice that conflicts with the person's medication instructions.",hint:"Think about thyroid hormone replacement and the timing of food, calcium and iron.",reference:"NHS — Levothyroxine",referenceUrl:"https://www.nhs.uk/medicines/levothyroxine/"},
{id:"MED12",level:"placement",topic:"Medicines",q:"Why might a dietitian need to consider fat-soluble vitamins in someone taking orlistat?",a:"Orlistat reduces the absorption of some dietary fat, which can also reduce absorption of fat-soluble vitamins A, D, E and K. A healthcare professional may recommend a multivitamin supplement, taken at a different time from orlistat in line with product guidance. Dietitians should consider dietary adequacy and follow current prescribing and product advice.",hint:"Think about which vitamins require dietary fat for absorption.",reference:"NHS — Orlistat",referenceUrl:"https://www.nhs.uk/medicines/orlistat/"},
{id:"MED13",level:"placement",topic:"Medicines",q:"What is pancreatic enzyme replacement therapy (PERT), and when might it be prescribed?",a:"PERT provides digestive enzymes, usually in capsule form, for people who do not produce enough pancreatic enzymes (exocrine pancreatic insufficiency). It helps digest fat, protein and carbohydrate and is commonly prescribed in conditions such as chronic pancreatitis or after some pancreatic surgery. Enzymes are generally taken with meals and snacks, following the individual's prescribed instructions. Dietitians should ask about adherence, timing, symptoms and nutritional status.",hint:"Think about the role of pancreatic enzymes in digestion and absorption.",reference:"NHS — Pancreatin",referenceUrl:"https://www.nhs.uk/medicines/pancreatin/"},
{id:"ABS01",level:"fresh",topic:"Vitamins and minerals",q:"Where is most dietary iron absorbed?",a:"Most dietary iron is absorbed in the duodenum and upper jejunum (the first sections of the small intestine). Haem and non-haem iron are absorbed through different pathways, and absorption is influenced by factors such as vitamin C and other components of the meal.",hint:"Think about the very first part of the small intestine.",reference:"NIH Office of Dietary Supplements — Iron",referenceUrl:"https://ods.od.nih.gov/factsheets/Iron-HealthProfessional/"},
{id:"ABS02",level:"fresh",topic:"Vitamins and minerals",q:"Where is vitamin B12 absorbed?",a:"Vitamin B12 is absorbed in the terminal ileum, the final section of the small intestine. It must first bind to intrinsic factor, a protein produced by the stomach. This is why conditions or surgery affecting the stomach or terminal ileum can affect B12 absorption.",hint:"Think about the final section of the small intestine and the role of intrinsic factor.",reference:"NHS — Vitamin B12 or folate deficiency anaemia",referenceUrl:"https://www.nhs.uk/conditions/vitamin-b12-or-folate-deficiency-anaemia/"},
{id:"ABS03",level:"fresh",topic:"Vitamins and minerals",q:"In which part of the digestive tract is folate (vitamin B9) mainly absorbed?",a:"Folate is mainly absorbed in the upper small intestine, particularly the jejunum. The small intestine is the main site for absorption of most vitamins and minerals.",hint:"It is absorbed in the section of small intestine between the duodenum and ileum.",reference:"NIH Office of Dietary Supplements — Folate",referenceUrl:"https://ods.od.nih.gov/factsheets/Folate-HealthProfessional/"},
{id:"ABS04",level:"placement",topic:"Vitamins and minerals",q:"Where does calcium absorption take place?",a:"Calcium is absorbed throughout the small intestine, with active, vitamin D-regulated absorption particularly important in the duodenum. Calcium can also be absorbed by passive processes further along the small intestine. The amount absorbed depends on factors including vitamin D status, age and calcium intake.",hint:"It is not limited to one single section; consider the whole small intestine and the role of vitamin D.",reference:"NIH Office of Dietary Supplements — Calcium",referenceUrl:"https://ods.od.nih.gov/factsheets/Calcium-HealthProfessional/"},
{id:"ABS05",level:"placement",topic:"Vitamins and minerals",q:"Where are the fat-soluble vitamins (A, D, E and K) absorbed?",a:"Fat-soluble vitamins are absorbed in the small intestine alongside dietary fat. Their absorption depends on normal fat digestion and absorption, including bile and the formation of micelles. Conditions that cause fat malabsorption can therefore affect these vitamins.",hint:"Think about where dietary fat is digested and absorbed, and what helps fat-soluble nutrients enter intestinal cells.",reference:"Merck Manual — Overview of Vitamins",referenceUrl:"https://www.merckmanuals.com/home/disorders-of-nutrition/vitamins/overview-of-vitamins"},
{id:"ABS06",level:"fresh",topic:"Digestive tract",q:"Where are most carbohydrates absorbed after digestion?",a:"Most carbohydrate digestion is completed and the resulting monosaccharides (such as glucose, galactose and fructose) are absorbed in the small intestine, particularly the duodenum and jejunum.",hint:"Most nutrient absorption happens before digested food reaches the large intestine.",reference:"OpenStax — Anatomy and Physiology: The Small and Large Intestines",referenceUrl:"https://openstax.org/books/anatomy-and-physiology-2e/pages/23-6-the-small-and-large-intestines"},
{id:"ABS07",level:"fresh",topic:"Digestive tract",q:"Where are most products of protein digestion absorbed?",a:"Most amino acids and small peptides are absorbed in the small intestine, especially the duodenum and jejunum. They enter intestinal cells through specific transport systems and then pass into the blood.",hint:"Think about the main site where digested food components enter the body.",reference:"OpenStax — Anatomy and Physiology: The Small and Large Intestines",referenceUrl:"https://openstax.org/books/anatomy-and-physiology-2e/pages/23-6-the-small-and-large-intestines"},
{id:"ABS08",level:"placement",topic:"Digestive tract",q:"Where is most of the water from food and drink absorbed?",a:"Most water is absorbed in the small intestine. The colon absorbs additional water and electrolytes, helping to form and regulate the consistency of stool. The colon is important, but it is not the main site of total water absorption.",hint:"The large intestine reclaims water, but remember how much fluid enters the small intestine each day.",reference:"OpenStax — Anatomy and Physiology: The Small and Large Intestines",referenceUrl:"https://openstax.org/books/anatomy-and-physiology-2e/pages/23-6-the-small-and-large-intestines"}
,
{id:"ABS09",level:"placement",topic:"Digestive tract",q:"A patient has had a significant length of their terminal ileum removed. Which two nutritional concerns are particularly important to consider?",a:"Vitamin B12 malabsorption is a key concern because the terminal ileum is where the intrinsic factor–B12 complex is absorbed. The terminal ileum also reabsorbs bile acids, so removal can cause bile acid diarrhoea and, if bile acid depletion is substantial, fat malabsorption and possible deficiencies of fat-soluble vitamins (A, D, E and K). The risk depends on the length removed and the individual's clinical circumstances.",hint:"Think about the vitamin that needs intrinsic factor, and what happens to bile acids when they cannot be reabsorbed.",reference:"NICE — Crohn's disease: management",referenceUrl:"https://www.nice.org.uk/guidance/ng129"},
{id:"ABS10",level:"placement",topic:"Digestive tract",q:"Why can damage or removal of the terminal ileum lead to bile acid diarrhoea?",a:"The terminal ileum normally reabsorbs bile acids so they can be recycled to the liver. If this process is impaired, more bile acids can pass into the colon, where they can stimulate water and electrolyte secretion and contribute to watery diarrhoea. Assessment and management should be guided by the clinical team.",hint:"Consider what normally happens to bile acids after they have helped with fat digestion.",reference:"NHS — Bile acid diarrhoea",referenceUrl:"https://www.nhs.uk/conditions/bile-acid-malabsorption/"},
{id:"ABS11",level:"placement",topic:"Digestive tract",q:"A patient has disease affecting the duodenum. Which mineral's absorption may be particularly affected?",a:"Iron absorption may be affected because the duodenum is a major site of iron absorption. The impact depends on the extent and activity of the disease, dietary intake and other factors; iron status should be assessed using the appropriate clinical information rather than assumed from the site alone.",hint:"Think about the mineral commonly associated with the early part of the small intestine.",reference:"NIH Office of Dietary Supplements — Iron",referenceUrl:"https://ods.od.nih.gov/factsheets/Iron-HealthProfessional/"},
{id:"ABS12",level:"placement",topic:"Digestive tract",q:"What is short bowel syndrome, and why can it create nutritional challenges?",a:"Short bowel syndrome can occur when a substantial length of small intestine is absent or does not function adequately. The reduced absorptive capacity can lead to malabsorption of energy, nutrients, fluid and electrolytes. The effects depend on how much bowel remains, which sections remain, whether the colon is in continuity and how well the remaining bowel adapts.",hint:"Think about the consequences of having less functioning small intestine available for digestion and absorption.",reference:"NHS — Short bowel syndrome",referenceUrl:"https://www.nhs.uk/conditions/short-bowel-syndrome/"},
{id:"ABS13",level:"placement",topic:"Digestive tract",q:"Following a total colectomy, why might a patient with an ileostomy need particular attention to fluid and electrolyte balance?",a:"The colon normally absorbs additional water and electrolytes. After a total colectomy, this function is lost, and fluid losses through the ileostomy can be significant, particularly when output is high. Monitoring hydration, output and electrolytes is important, with advice tailored by the clinical team. Most nutrient absorption still takes place in the small intestine.",hint:"Think about one of the colon's key functions and what happens when intestinal contents bypass it.",reference:"NHS — Living with an ileostomy",referenceUrl:"https://www.nhs.uk/conditions/ileostomy/"},
{id:"ABS14",level:"placement",topic:"Digestive tract",q:"How can coeliac disease affect nutrient absorption in the small intestine?",a:"In coeliac disease, exposure to gluten triggers an immune response that damages the small intestinal lining and can cause villous atrophy. This reduces the absorptive surface area and can lead to malabsorption. Iron, folate, calcium and other nutrients may be affected; the pattern and severity vary between individuals.",hint:"Think about what happens to the villi and the surface area available for absorption.",reference:"NHS — Coeliac disease",referenceUrl:"https://www.nhs.uk/conditions/coeliac-disease/"},

{"id":"BED01","level":"fresh","topic":"Eating disorders","q":"What distinguishes an objective binge from a subjective binge?","a":"Objective: definitely large amount plus loss of control. Subjective: feels excessive to the person, with loss of control, but may not be objectively large."},
{"id":"BED02","level":"fresh","topic":"Eating disorders","q":"What frequency and duration of binge-eating episodes are part of the diagnostic criteria for binge-eating disorder (BED)?","a":"Binge episodes average at least once a week for 3 months, with marked distress."},
{"id":"BED03","level":"placement","topic":"Eating disorders","q":"How many of the associated features must be present alongside recurrent binge-eating episodes and marked distress for a BED diagnosis?","a":"Three or more: eating rapidly, uncomfortably full, when not hungry, alone from embarrassment, or feeling disgusted, depressed or guilty afterwards."},
{"id":"BED04","level":"fresh","topic":"Eating disorders","q":"What is a key difference between binge-eating disorder (BED) and bulimia nervosa in relation to compensatory behaviours?","a":"BED is not associated with regular compensatory behaviour."},
{"id":"BED05","level":"fresh","topic":"Eating disorders","q":"Can weight alone identify BED?","a":"No. Weight may rise, fall or remain stable; ask about weight history and past dieting."},
{"id":"BED06","level":"fresh","topic":"Eating disorders","q":"What does A–E stand for in a structured nutritional assessment?","a":"Anthropometric, Biochemical, Clinical, Dietary, Environmental / Emotional."},
{"id":"BED07","level":"placement","topic":"Eating disorders","q":"Name two clinical cues that may be worth exploring.","a":"Examples: GI distress, reflux, poor sleep, tiredness, mood changes, body checking or exercise to compensate for eating."},
{"id":"BED08","level":"fresh","topic":"Eating disorders","q":"Are any single clinical cues diagnostic of BED?","a":"No. Use them to open a sensitive, non-judgemental conversation."},
{"id":"BED09","level":"fresh","topic":"Eating disorders","q":"What are three possible functions that binge eating may serve for an individual?","a":"Escape or numb feelings; comfort or reward; fill time or provide stimulation."},
{"id":"BED10","level":"placement","topic":"Eating disorders","q":"How can rigid dietary rules contribute to a binge–restrict cycle?","a":"A lapse may feel like failure, leading to a binge, shame and further restriction."},
{"id":"BED11","level":"fresh","topic":"Eating disorders","q":"What is the key principle before giving dietary advice?","a":"Assess the pattern, function and person first; early advice may reinforce restriction."},
{"id":"BED12","level":"placement","topic":"Eating disorders","q":"What are appropriate dietetic support considerations for someone experiencing binge-eating difficulties, and when might referral be needed?","a":"Consider regular eating and psychoeducation within competence; discuss or refer via local pathways when concerns or specialist support needs arise."}
];
const quizLevels = {
fresh:{label:"Fresh student",items:[
{q:"Which nutrient is the body's main preferred source of energy?",opts:["Carbohydrate","Vitamin C","Calcium","Water"],correct:0,why:"Carbohydrate is an important energy source and is broken down into glucose and other simple sugars."},
{q:"Which vitamin is important for normal vision and immune function?",opts:["Vitamin A","Vitamin B12","Vitamin K","Vitamin E"],correct:0,why:"Vitamin A contributes to normal vision and normal immune function."},
{q:"What is a main role of dietary protein?",opts:["Oxygen transport","Growth and repair of body tissues","Forming dietary fibre","Producing bile"],correct:1,why:"Protein supplies amino acids needed for growth, maintenance and repair of body tissues."},
{q:"Which organ produces bile?",opts:["Pancreas","Stomach","Liver","Kidney"],correct:2,why:"The liver produces bile, which helps with digestion and absorption of fats."},
{q:"What does the Eatwell Guide show?",opts:["A strict meal plan for everyone","Proportions of food groups for a balanced diet","A renal diet","Individual calorie requirements"],correct:1,why:"It is a population-level guide to the proportions of food groups that contribute to a healthy, balanced diet over time."},
{q:"Where is the ileum located in the digestive system? Click the correct structure on the diagram.",type:"diagram",correct:"ileum",why:"The ileum is the final section of the small intestine. It follows the jejunum and joins the large intestine."}]},
placement:{label:"Preparing for placement",items:[
{q:"A patient has a reduced eGFR. Which blood result may need particular attention because the kidneys help regulate it?",opts:["Potassium","Haemoglobin","Bilirubin","Vitamin B12"],correct:0,why:"The kidneys contribute to potassium excretion. Interpret potassium alongside renal function, trends, medicines and clinical context."},
{q:"Which combination is used in MUST screening?",opts:["BMI, weight loss and acute disease effect","Albumin, CRP and haemoglobin","Appetite, fluid intake and age","Weight, height and blood pressure"],correct:0,why:"MUST uses BMI, unplanned weight loss and the effect of acute disease on nutritional intake."},
{q:"A raised CRP is found alongside a low albumin. What is the most appropriate interpretation?",opts:["This confirms malnutrition","Albumin is influenced by inflammation and should not diagnose malnutrition alone","The patient needs protein restriction","CRP directly measures dietary intake"],correct:1,why:"Inflammation can lower albumin. Assess nutritional status using the full clinical picture rather than albumin alone."},
{q:"A patient reports nausea and is eating very little. What is a useful first step in assessment?",opts:["Immediately prescribe a restrictive diet","Explore the timing, severity and possible causes of nausea and its impact on intake","Assume they dislike hospital food","Ignore fluid intake"],correct:1,why:"Understanding symptoms and how they affect food and fluid intake helps identify appropriate interventions and when escalation is needed."},
{q:"A patient is prescribed an oral nutritional supplement. What should you review?",opts:["Whether it is taken, tolerated and helping meet goals","Only the brand name","Whether it replaces all meals","Only the patient's BMI"],correct:0,why:"Review adherence, acceptability, tolerance, total intake, goals and the ongoing indication."},
{q:"Where does a PEG (percutaneous endoscopic gastrostomy) feeding tube enter the digestive system? Click the correct organ on the diagram.",type:"diagram",correct:"stomach",why:"A PEG passes through the abdominal wall into the stomach. The tube terminates in the stomach, allowing feed, fluid and medicines to be delivered there."},
{q:"Where does a PEJ (percutaneous endoscopic jejunostomy) feeding tube enter the digestive system? Click the correct section on the diagram.",type:"diagram",correct:"jejunum",why:"A PEJ provides access to the jejunum, which is part of the small intestine. A PEG-J is different: it enters through the abdominal wall into the stomach, with an extension that passes into the jejunum."}]},
band5:{label:"Band 5 dietitian",items:[
{q:"A patient is at high risk of refeeding problems. What is the most appropriate approach?",opts:["Start full estimated requirements immediately in every case","Follow local refeeding guidance, assess risk and arrange appropriate monitoring and thiamine provision","Avoid all nutrition until discharge","Use albumin alone to determine feeding rate"],correct:1,why:"Refeeding risk requires structured assessment and a monitored nutrition plan in line with current guidance and local policy. Seek senior support where appropriate."},
{q:"A patient with CKD has a raised potassium result. What should be considered before giving dietary restriction advice?",opts:["Only potassium in fruit","Trends, medicines, clinical context and overall dietary intake","A blanket ban on all plant foods","Albumin in isolation"],correct:1,why:"Hyperkalaemia is multifactorial. Consider trends and clinical context, including medicines and other contributors, and coordinate advice with the MDT."},
{q:"A patient has poor oral intake and is not meeting requirements despite initial interventions. What is the best next step?",opts:["Continue the same plan without review","Reassess, discuss escalation and consider the appropriate nutrition route with the MDT","Recommend supplements indefinitely without monitoring","Wait until weight loss is documented"],correct:1,why:"Reassess response and barriers, consider whether oral intake remains adequate, and discuss escalation and route of nutrition with the MDT and senior colleagues."},
{q:"A patient has a low sodium result and appears clinically unwell. What should guide your dietetic response?",opts:["Give generic high-salt advice straight away","Recognise the need for medical assessment and interpret it in clinical context before changing nutrition advice","Assume it is caused by low dietary salt","Ignore it if they are eating well"],correct:1,why:"Hyponatraemia has multiple possible causes and requires medical assessment. Dietetic advice should be individualised and coordinated with the clinical team."},
{q:"You identify a patient with rapidly worsening intake, significant recent weight loss and high nutrition risk. What should you do?",opts:["Prioritise according to clinical urgency and escalate concerns appropriately","Always review in bed-number order","Defer until the next routine clinic","Use BMI alone"],correct:0,why:"Prioritisation should reflect clinical risk, urgency and local pathways. Communicate concerns and seek senior input when needed."}]}
};
const icons={"Medicines":"✚","Renal":"◉","Biochemistry":"⌁","Nutrition":"✿","Nutrition support":"＋","Diabetes":"◒","Liver":"◉","Digestive tract":"⌁","Vitamins and minerals":"✦","Gastro":"〰","Eating disorders":"♡"};
const descriptions={"Medicines":"Drug classes and their actions","Renal":"Kidney function and electrolytes","Biochemistry":"Understanding common blood results","Nutrition":"Core nutrition knowledge","Nutrition support":"Screening and nutrition support","Diabetes":"Blood glucose and diabetes care","Liver":"Liver function and nutrition","Digestive tract":"Digestion, absorption and gut health","Vitamins and minerals":"Key vitamins, minerals and their functions","Gastro":"IBS, IBD and coeliac disease","Eating disorders":"BED recognition and compassionate dietetic care"};
const resources = [
  {name:"NICE guidance",category:"Clinical guidance",description:"Evidence-based recommendations and guidance across health and care, including nutrition support, diabetes, obesity and many clinical conditions.",access:"Free to access",url:"https://www.nice.org.uk/guidance"},
  {name:"BAPEN",category:"Clinical guidance",description:"UK organisation focused on clinical nutrition, malnutrition and nutrition support. Explore guidance, screening resources and learning materials.",access:"Many resources free; some learning requires access or membership",url:"https://www.bapen.org.uk/resources-and-education/"},
  {name:"PENG Pocket Guide to Clinical Nutrition",category:"Clinical guidance",description:"A practical clinical nutrition reference covering assessment, requirements and nutrition support. Check the PENG page for the latest edition and access arrangements.",access:"5th edition e-guide: free for PENG members; purchase options available",url:"https://www.peng.org.uk/publications-resources/pocket-guide.php"},
  {name:"NHS Wales dietetic service resources",category:"Welsh resources",description:"A Welsh health-board example of patient-facing dietetic information and signposting, including healthy eating and condition-related resources.",access:"Free to access",url:"https://pthb.nhs.wales/services/adult-and-older-peoples-community-services/dietetic-services/"},
  {name:"Nutrition Skills for Life",category:"Welsh resources",description:"Nutrition education and community food skills resources developed in Wales, useful for public health nutrition and health-promotion learning.",access:"Free to access",url:"https://nutritionskillsforlife.com/"},
  {name:"British Dietetic Association (BDA)",category:"Professional organisations",description:"The professional body for UK dietitians. Find professional information, specialist groups, Food Fact Sheets, student support and learning opportunities.",access:"Public resources available; some content requires membership",url:"https://www.bda.uk.com/"},
  {name:"Health and Care Professions Council (HCPC)",category:"Professional organisations",description:"Read the standards of proficiency for dietitians, standards of conduct and other information relevant to professional practice.",access:"Free to access",url:"https://www.hcpc-uk.org/standards/standards-of-proficiency/dietitians/"},
  {name:"The Nutrition Society",category:"Professional organisations",description:"A learned society supporting nutrition science. Explore publications, events and professional development opportunities.",access:"Some resources free; membership or subscriptions may apply",url:"https://www.nutritionsociety.org/"},
  {name:"British Nutrition Foundation",category:"Professional organisations",description:"Evidence-based nutrition science and education resources, including material that can support public health and nutrition teaching.",access:"Many public resources free",url:"https://www.nutrition.org.uk/"},
  {name:"British National Formulary (BNF)",category:"Medicines & reference",description:"A medicines reference for healthcare professionals. Useful for understanding medicine indications, cautions and adverse effects alongside appropriate supervision and local practice.",access:"Access may depend on NHS, university or other subscription arrangements",url:"https://bnf.nice.org.uk/"},
  {name:"Scientific Advisory Committee on Nutrition (SACN)",category:"Clinical guidance",description:"UK scientific advice on nutrition and related health matters. Useful for understanding the evidence behind population nutrition recommendations.",access:"Free to access",url:"https://www.gov.uk/government/groups/scientific-advisory-committee-on-nutrition"},
  {name:"The Eatwell Guide",category:"Welsh resources",description:"The NHS overview of the proportions of food groups that contribute to a healthy, balanced diet over time. A useful public health teaching resource.",access:"Free to access",url:"https://www.nhs.uk/live-well/eat-well/food-guidelines-and-food-labels/the-eatwell-guide/"},
  {name:"Manual of Dietetic Practice — 7th edition",category:"Textbooks & learning",description:"A comprehensive reference covering professional practice, public health, nutrition through the life course, assessment and adult and paediatric clinical dietetics.",access:"Purchase or check university and NHS library access; BDA member discount may be available",url:"https://www.bda.uk.com/membership/publications/manual-of-dietetic-practice.html"},
  {name:"Cochrane Library",category:"Textbooks & learning",description:"A source of systematic reviews and evidence to support critical appraisal and evidence-based practice.",access:"Some content is freely available; full-text access may require an institutional subscription",url:"https://www.cochranelibrary.com/"}
];

const signpostingResources = [
  {name:"NHS — The Eatwell Guide",category:"Healthy eating",description:"A simple overview of the main food groups and how to achieve a balanced diet over time.",access:"Free patient information",url:"https://www.nhs.uk/live-well/eat-well/food-guidelines-and-food-labels/the-eatwell-guide/"},
  {name:"British Nutrition Foundation — Healthy eating",category:"Healthy eating",description:"Practical information about food, nutrients and healthy eating, including resources that can support conversations about diet.",access:"Free public information",url:"https://www.nutrition.org.uk/"},
  {name:"Diabetes UK — Food and diabetes",category:"Diabetes",description:"Patient information about food choices, meal planning and living with diabetes. Encourage people to use advice relevant to their type of diabetes and care plan.",access:"Free patient information",url:"https://www.diabetes.org.uk/guide-to-diabetes/enjoy-food"},
  {name:"Diabetes UK — Know your risk and support",category:"Diabetes",description:"Information and support for people living with or at risk of diabetes, including ways to find further help.",access:"Free patient information",url:"https://www.diabetes.org.uk/"},
  {name:"Kidney Care UK",category:"Kidney health",description:"Patient-friendly information and support for people affected by kidney disease, including diet, treatment and living well.",access:"Free patient information and support",url:"https://kidneycareuk.org/"},
  {name:"National Kidney Federation",category:"Kidney health",description:"Information and support for people with kidney disease, including resources about renal diets and kidney health.",access:"Free patient information",url:"https://www.kidney.org.uk/"},
  {name:"Coeliac UK",category:"Digestive health",description:"Reliable information about coeliac disease, gluten-free living, food choices and support after diagnosis.",access:"Some information is free; membership unlocks additional services",url:"https://www.coeliac.org.uk/"},
  {name:"Crohn's & Colitis UK",category:"Digestive health",description:"Information and support for people living with Crohn's disease or ulcerative colitis, including food, symptoms and day-to-day management.",access:"Free information; membership and support options available",url:"https://crohnsandcolitis.org.uk/"},
  {name:"NHS — Irritable bowel syndrome (IBS)",category:"Digestive health",description:"An accessible overview of IBS symptoms, diagnosis and treatment options, with guidance on when to seek further help.",access:"Free patient information",url:"https://www.nhs.uk/conditions/irritable-bowel-syndrome-ibs/"},
  {name:"British Heart Foundation",category:"Heart and cholesterol",description:"Patient information about heart health, cholesterol, food and lifestyle, including practical guidance for making changes.",access:"Free patient information",url:"https://www.bhf.org.uk/informationsupport"},
  {name:"British Liver Trust",category:"Heart and cholesterol",description:"Information and support for people affected by liver conditions, including resources on nutrition and looking after liver health.",access:"Free patient information",url:"https://britishlivertrust.org.uk/"},
  {name:"Macmillan Cancer Support — Eating problems and cancer",category:"Cancer and nutrition",description:"Practical information about eating and nutrition-related difficulties during and after cancer treatment, alongside wider support.",access:"Free patient information and support",url:"https://www.macmillan.org.uk/cancer-information-and-support/impacts-of-cancer/eating-problems"},
  {name:"NHS — Help with food costs",category:"Food and practical support",description:"Information about support with food costs and accessing help, which may be useful when discussing food insecurity or financial barriers.",access:"Free information",url:"https://www.nhs.uk/live-well/healthy-body/"},
  {name:"Trussell",category:"Food and practical support",description:"Information about food banks and practical support for people who are struggling to afford essentials. Check local availability and referral arrangements.",access:"Free information; local access arrangements vary",url:"https://www.trussell.org.uk/"},
  {name:"NHS 111 Wales",category:"Food and practical support",description:"A route to health advice and local NHS services in Wales. Use the appropriate local service and pathway for the person's location.",access:"Free NHS service in Wales",url:"https://111.wales.nhs.uk/"}
];

function renderSignposting(){
  const term=$("signposting-search").value.trim().toLowerCase();
  const category=$("signposting-category").value;
  const matches=signpostingResources.filter(r=>(category==="All"||r.category===category)&&(`${r.name} ${r.category} ${r.description} ${r.access}`).toLowerCase().includes(term));
  $("signposting-count").textContent=`${matches.length} resource${matches.length===1?"":"s"}`;
  $("signposting-grid").innerHTML=matches.length?matches.map(r=>`<article class="resource-card">
    <div class="resource-card-top"><span class="resource-category">${r.category}</span><span class="resource-arrow" aria-hidden="true">↗</span></div>
    <h2>${r.name}</h2>
    <p>${r.description}</p>
    <div class="resource-access"><strong>Access:</strong> ${r.access}</div>
    <a href="${r.url}" target="_blank" rel="noopener noreferrer">Open patient information <span aria-hidden="true">↗</span></a>
  </article>`).join(""):'<div class="resource-empty">No patient information matches that search. Try another word or topic.</div>';
}
const storageKey="dietetics-deck-progress-v1";
const SUPABASE_URL="https://wllpwxhgflfhoqrvvaxb.supabase.co";
const SUPABASE_PUBLISHABLE_KEY="sb_publishable_iANRcDJ9PdeZpcW2aXVJpQ_Mj5MioMI";
const supabaseClient=window.supabase?.createClient
  ? window.supabase.createClient(SUPABASE_URL,SUPABASE_PUBLISHABLE_KEY)
  : null;
let progress=JSON.parse(localStorage.getItem(storageKey)||"{}");
let currentCards=[...cards],currentIndex=0,answerVisible=false,quizOrder=[],quizIndex=0,quizScore=0,quizAnswered=false,selectedLevels=["fresh"],dueOnly=false;
const $=id=>document.getElementById(id);
$("signposting-search").addEventListener("input",renderSignposting);
$("signposting-category").addEventListener("change",renderSignposting);

let signedInUser=null;
let cloudSyncReady=false;
let syncInProgress=false;
function setAuthStatus(message){const el=$("auth-status");if(el)el.textContent=message;}
function updateAuthUI(user){
  signedInUser=user||null;
  $("auth-form").classList.toggle("hidden",!!user);
  $("auth-signed-in").classList.toggle("hidden",!user);
  $("auth-user-label").textContent=user?("Signed in as "+user.email):"";
  if(!user)setAuthStatus("Not signed in. Your progress is saved on this device.");
}
function mergeProgress(localProgress,cloudProgress){
  const merged={...(cloudProgress||{})};
  for(const [cardId,localRecord] of Object.entries(localProgress||{})){
    const cloudRecord=merged[cardId];
    if(!cloudRecord){
      merged[cardId]=localRecord;
      continue;
    }
    const localTime=Date.parse(localRecord?.reviewedAt||localRecord?.due||"")||0;
    const cloudTime=Date.parse(cloudRecord?.reviewedAt||cloudRecord?.due||"")||0;
    if(localTime>cloudTime||(localTime===cloudTime&&(Number(localRecord?.reviews)||0)>=(Number(cloudRecord?.reviews)||0))){
      merged[cardId]=localRecord;
    }
  }
  return merged;
}
async function syncProgress(){
  if(!supabaseClient||!signedInUser||syncInProgress)return;
  syncInProgress=true;
  try{
    const {data,error}=await supabaseClient.from("learner_progress")
      .select("progress").eq("user_id",signedInUser.id).maybeSingle();
    if(error)throw error;

    // Combine both devices' card records instead of allowing either device to overwrite the other.
    progress=mergeProgress(progress,data?.progress||{});
    localStorage.setItem(storageKey,JSON.stringify(progress));
    filterCards();
    renderProgress();

    const {error:saveError}=await supabaseClient.from("learner_progress").upsert({
      user_id:signedInUser.id,
      progress,
      updated_at:new Date().toISOString()
    },{onConflict:"user_id"});
    if(saveError)throw saveError;

    cloudSyncReady=true;
    setAuthStatus("Your progress from this device and your account has been combined and synced.");
  }catch(error){
    console.error("Supabase progress sync failed:",error);
    setAuthStatus("We couldn't sync your progress. Please check the browser console for the Supabase error.");
  }finally{syncInProgress=false;}
}
async function saveProgressToCloud(){
  if(!supabaseClient||!signedInUser||!cloudSyncReady)return;
  try{
    const {error}=await supabaseClient.from("learner_progress").upsert({
      user_id:signedInUser.id,
      progress,
      updated_at:new Date().toISOString()
    },{onConflict:"user_id"});
    if(error)throw error;
    setAuthStatus("Progress saved and synced.");
  }catch(error){
    console.error("Supabase progress save failed:",error);
    setAuthStatus("Your progress is saved on this device, but cloud syncing failed. Please try again later.");
  }
}
async function initialiseSupabaseAuth(){
  if(!supabaseClient){
    setAuthStatus("Account sign-in is temporarily unavailable. Local progress saving still works.");
    return;
  }
  $("auth-form").addEventListener("submit",async event=>{
    event.preventDefault();
    const email=$("auth-email").value.trim();
    const button=$("auth-submit");
    button.disabled=true;
    setAuthStatus("Sending your sign-in link…");
    try{
      const {error}=await supabaseClient.auth.signInWithOtp({
        email,
        options:{emailRedirectTo:window.location.href.split("#")[0]}
      });
      if(error)throw error;
      setAuthStatus("Check your email for your sign-in link. You can return to this page after opening it.");
    }catch(error){
      console.error("Supabase sign-in failed:",error);
      setAuthStatus("We couldn't send the sign-in link. Please check the email address and try again.");
    }finally{button.disabled=false;}
  });
  $("auth-signout").addEventListener("click",async()=>{
    const {error}=await supabaseClient.auth.signOut();
    if(error){setAuthStatus("We couldn't sign you out. Please try again.");return;}
    cloudSyncReady=false;
    updateAuthUI(null);
  });
  const {data,error}=await supabaseClient.auth.getSession();
  if(error){setAuthStatus("We couldn't check your sign-in status. Local saving is still available.");return;}
  if(data.session?.user){
    updateAuthUI(data.session.user);
    await syncProgress();
  }
  supabaseClient.auth.onAuthStateChange((event,session)=>{
    if(event==="SIGNED_IN"&&session?.user){
      updateAuthUI(session.user);
      setTimeout(()=>syncProgress(),0);
    }else if(event==="SIGNED_OUT"){
      cloudSyncReady=false;
      updateAuthUI(null);
    }
  });
}
function save(){localStorage.setItem(storageKey,JSON.stringify(progress));saveProgressToCloud();}
function renderResources(){
  const term=$("resource-search").value.trim().toLowerCase();
  const category=$("resource-category").value;
  const matches=resources.filter(r=>(category==="All"||r.category===category)&&(`${r.name} ${r.category} ${r.description} ${r.access}`).toLowerCase().includes(term));
  $("resource-count").textContent=`${matches.length} resource${matches.length===1?"":"s"}`;
  $("resource-grid").innerHTML=matches.length?matches.map(r=>`<article class="resource-card">
    <div class="resource-card-top"><span class="resource-category">${r.category}</span><span class="resource-arrow" aria-hidden="true">↗</span></div>
    <h2>${r.name}</h2>
    <p>${r.description}</p>
    <div class="resource-access"><strong>Access:</strong> ${r.access}</div>
    <a href="${r.url}" target="_blank" rel="noopener noreferrer">Visit resource <span aria-hidden="true">↗</span></a>
  </article>`).join(""):'<div class="resource-empty">No resources match that search. Try another word or category.</div>';
}
$("resource-search").addEventListener("input",renderResources);
$("resource-category").addEventListener("change",renderResources);
function showView(name){document.querySelectorAll(".view").forEach(v=>v.classList.toggle("active",v.id===name+"-view"));document.querySelectorAll(".nav-link").forEach(b=>b.classList.toggle("active",b.dataset.view===name));if(name==="progress")renderProgress();if(name==="cards")renderCard();if(name==="signposting")renderSignposting();}
document.querySelectorAll("[data-view]").forEach(b=>b.addEventListener("click",()=>showView(b.dataset.view)));
document.querySelectorAll("[data-home]").forEach(b=>b.addEventListener("click",e=>{e.preventDefault();showView("home");window.scrollTo({top:0,behavior:"smooth"});}));
document.querySelectorAll("[data-go]").forEach(b=>b.addEventListener("click",()=>{if(b.dataset.go==="cards")startRevision();else showView(b.dataset.go);}));
function buildTopics(){const topics=[...new Set(cards.map(c=>c.topic))];$("hero-due").textContent=cards.length;$("hero-topics").textContent=topics.length;const card=t=>`<button class="topic-card topic-${t.toLowerCase().replace(/[^a-z0-9]+/g,"-")}" data-topic="${t}"><span class="topic-icon">${icons[t]||"•"}</span><strong>${t}</strong><span>${descriptions[t]} · ${cards.filter(c=>c.topic===t).length} cards</span></button>`;$("topic-grid").innerHTML=topics.map(card).join("");$("category-filter").innerHTML='<option value="All">All topics</option>'+topics.map(t=>`<option>${t}</option>`).join("");document.querySelectorAll("[data-topic]").forEach(b=>b.addEventListener("click",()=>{$("category-filter").value=b.dataset.topic;filterCards();showView("cards");}));}
function filterCards(){
  const term=$("search-input").value.toLowerCase(),topic=$("category-filter").value;
  currentCards=cards.filter(c=>selectedLevels.includes(c.level)&&(topic==="All"||c.topic===topic)&&(`${c.q} ${c.a} ${c.topic}`).toLowerCase().includes(term)&&(!dueOnly||(progress[c.id]?.due&&new Date(progress[c.id].due).getTime()<=Date.now())));
  const now=Date.now();
  const priority=c=>{
    const record=progress[c.id];
    if(record?.rating==="again")return 0;
    if(record?.rating==="hard")return 1;
    if(record?.due&&new Date(record.due).getTime()<=now)return 2;
    if(!record)return 3;
    if(record.rating==="good")return 4;
    return 5;
  };
  currentCards.sort((a,b)=>{
    const difference=priority(a)-priority(b);
    if(difference!==0)return difference;
    const dueA=progress[a.id]?.due?new Date(progress[a.id].due).getTime():0;
    const dueB=progress[b.id]?.due?new Date(progress[b.id].due).getTime():0;
    return dueA-dueB;
  });
  currentIndex=0;answerVisible=false;renderCard();
}
function startRevision(){
  $("category-filter").value="All";
  $("search-input").value="";
  dueOnly=false;
  updateDueFilterButton();
  filterCards();
  showView("cards");
}
function updateDueFilterButton(){
  const button=$("due-filter-btn");
  button.setAttribute("aria-pressed",String(dueOnly));
  button.textContent=dueOnly?"Show all cards":"Due for revision";
  button.classList.toggle("primary",dueOnly);
  button.classList.toggle("secondary",!dueOnly);
}
$("due-filter-btn").addEventListener("click",()=>{
  dueOnly=!dueOnly;
  updateDueFilterButton();
  filterCards();
});
function renderCard(){
  const c=currentCards[currentIndex];

  if(!c){
    $("flashcard").classList.add("hidden");
    $("rating-area").classList.add("hidden");
    $("card-count").textContent=dueOnly?"No cards due for revision":"No matching cards";
    $("card-position").textContent=dueOnly?"You are up to date for this selection.":"Try another search or topic.";
    return;
  }

  $("flashcard").classList.remove("hidden");
  $("card-count").textContent=`${currentCards.length} matching cards`;
  $("card-position").textContent=`Card ${currentIndex+1} of ${currentCards.length}`;
  $("card-category").textContent=c.topic;
  $("card-id").textContent="CARD "+c.id;
  $("card-question").textContent=c.q;

  const referenceHtml = c.reference ? `
    <details class="card-reference">
      <summary>Reference: ${c.reference}</summary>
      <div class="reference-details">
        <p>${c.referenceNote || ""}</p>
        ${c.referenceUrl ? `<a href="${c.referenceUrl}" target="_blank" rel="noopener noreferrer">Read the guideline ↗</a>` : ""}
      </div>
    </details>
  ` : "";

  $("card-answer").innerHTML=`<p>${c.a}</p>${referenceHtml}`;

  $("card-kind").textContent=answerVisible?"ANSWER":"QUESTION";
  $("card-answer").classList.toggle("hidden",!answerVisible);
  $("reveal-btn").classList.toggle("hidden",answerVisible);
  $("rating-area").classList.toggle("hidden",!answerVisible);
  $("card-hint").textContent=c.hint||"No hint available for this card.";
  $("card-hint").classList.add("hidden");
  $("hint-btn").classList.toggle("hidden",!c.hint||answerVisible);
  $("hint-btn").textContent="Show hint";
  $("hint-btn").setAttribute("aria-expanded","false");
}
$("search-input").addEventListener("input",filterCards);$("category-filter").addEventListener("change",filterCards);
$("hint-btn").addEventListener("click",()=>{const hint=$("card-hint"),button=$("hint-btn");const opening=hint.classList.contains("hidden");hint.classList.toggle("hidden",!opening);button.textContent=opening?"Hide hint":"Show hint";button.setAttribute("aria-expanded",String(opening));});
$("reveal-btn").addEventListener("click",()=>{answerVisible=true;renderCard();});
$("previous-btn").addEventListener("click",()=>{if(currentCards.length){currentIndex=(currentIndex-1+currentCards.length)%currentCards.length;answerVisible=false;renderCard();}});
$("next-btn").addEventListener("click",()=>{if(currentCards.length){currentIndex=(currentIndex+1)%currentCards.length;answerVisible=false;renderCard();}});
document.querySelectorAll("[data-rating]").forEach(b=>b.addEventListener("click",()=>{const c=currentCards[currentIndex];if(!c)return;const intervals={again:0,hard:1,good:3,easy:7};const now=new Date();const due=new Date(now);due.setDate(due.getDate()+intervals[b.dataset.rating]);progress[c.id]={rating:b.dataset.rating,due:due.toISOString(),reviewedAt:now.toISOString(),reviews:(progress[c.id]?.reviews||0)+1};save();currentIndex=(currentIndex+1)%currentCards.length;answerVisible=false;renderCard();}));
function startQuiz(){const labels=selectedLevels.map(level=>quizLevels[level].label);const items=selectedLevels.flatMap(level=>quizLevels[level].items);const label=labels.join(" + ");quizOrder=[...items].sort(()=>Math.random()-.5);$("quiz-level-label").textContent=label;$("quiz-description").textContent=`${quizOrder.length} questions across ${label.toLowerCase()}.`;quizIndex=0;quizScore=0;quizAnswered=false;renderQuiz();}
function digestiveDiagramMarkup(){return `
<div class="digestive-diagram-wrap">
<svg class="digestive-diagram" viewBox="0 0 560 520" role="group" aria-label="Textbook-style anatomical illustration of the digestive system. Select an organ or section.">
<defs>
 <linearGradient id="bodyTone" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff0e5"/><stop offset="1" stop-color="#f3d6c4"/></linearGradient>
 <linearGradient id="liverTone" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#bd7564"/><stop offset="1" stop-color="#914d48"/></linearGradient>
 <linearGradient id="stomachTone" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f3a092"/><stop offset="1" stop-color="#d87572"/></linearGradient>
 <linearGradient id="bowelTone" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f6b4a7"/><stop offset="1" stop-color="#d87979"/></linearGradient>
 <linearGradient id="colonTone" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f3b68f"/><stop offset="1" stop-color="#d88a69"/></linearGradient>
</defs>
<!-- simplified abdominal outline -->
<path class="diagram-torso" d="M174 20 Q214 5 280 10 Q346 5 386 20 L424 78 Q440 113 425 165 L409 470 Q280 503 151 470 L135 165 Q120 113 136 78Z" fill="url(#bodyTone)"/>
<path class="diagram-body-detail" d="M174 22 Q175 67 194 91 M386 22 Q385 67 366 91 M151 470 Q280 488 409 470"/>
<!-- oesophagus -->
<g class="diagram-organ" data-organ="oesophagus" role="button" tabindex="0" aria-label="Oesophagus">
 <path class="organ-shape oesophagus-shape" d="M280 35 C276 69 282 95 279 124" />
</g>
<!-- liver, on the person's right (left of image) -->
<g class="diagram-organ" data-organ="liver" role="button" tabindex="0" aria-label="Liver">
 <path class="organ-shape liver-shape" d="M157 145 C164 116 194 105 231 111 C257 115 278 128 298 145 C307 153 310 171 298 184 C282 202 246 205 214 198 C190 193 164 185 154 169 C150 161 152 152 157 145Z"/>
 <path class="organ-detail" d="M270 128 C259 149 263 177 291 187 M181 133 C196 143 211 147 228 148"/>
</g>
<!-- stomach -->
<g class="diagram-organ" data-organ="stomach" role="button" tabindex="0" aria-label="Stomach">
 <path class="organ-shape stomach-shape" d="M316 115 C339 105 363 117 373 139 C383 162 375 189 359 207 C344 224 322 236 300 229 C281 223 275 205 284 189 C294 171 294 155 286 139 C279 123 295 116 316 115Z"/>
 <path class="organ-detail" d="M306 125 C323 144 324 164 313 181 C304 197 311 213 329 220"/>
</g>
<!-- duodenum -->
<g class="diagram-organ" data-organ="duodenum" role="button" tabindex="0" aria-label="Duodenum">
 <path class="organ-shape duodenum-shape" d="M297 220 C281 232 274 248 284 260 C296 274 322 270 333 255 C344 239 335 226 324 224" />
</g>
<!-- pancreas -->
<g class="diagram-organ" data-organ="pancreas" role="button" tabindex="0" aria-label="Pancreas">
 <path class="organ-shape pancreas-shape" d="M242 221 C255 208 277 205 297 211 C313 215 327 223 337 232 C321 239 306 243 286 240 C267 238 250 243 239 235 C234 231 237 225 242 221Z"/>
 <path class="organ-detail" d="M250 226 Q282 216 319 231"/>
</g>
<!-- large intestine: caecum, ascending, transverse, descending and sigmoid colon -->
<g class="diagram-organ" data-organ="large-intestine" role="button" tabindex="0" aria-label="Large intestine">
 <path class="organ-shape colon-shape" d="M153 382 C145 363 150 340 150 318 L150 287 C150 266 165 255 184 260 C230 273 320 273 369 260 C389 255 402 268 402 289 L402 379 C402 399 390 412 371 412 C352 412 342 403 333 390 C324 377 309 379 299 390 C290 401 295 414 308 422"/>
 <path class="organ-detail colon-folds" d="M154 286 l17 3 M154 309 l17 2 M154 334 l17 2 M154 359 l17 2 M154 384 l17 1 M178 414 l2 -17 M207 416 l1 -17 M237 416 l0 -17 M267 416 l0 -17 M297 416 l0 -17 M327 416 l0 -17 M357 414 l-1 -17 M385 284 l-17 3 M385 309 l-17 2 M385 334 l-17 2 M385 359 l-17 2 M385 384 l-17 2"/>
</g>
<!-- caecum and appendix -->
<g class="diagram-organ" data-organ="caecum" role="button" tabindex="0" aria-label="Caecum">
 <path class="organ-shape caecum-shape" d="M151 376 C132 377 126 396 136 413 C147 433 175 437 190 421 C202 408 194 389 179 381 C170 376 160 375 151 376Z"/>
</g>
<g class="diagram-organ" data-organ="appendix" role="button" tabindex="0" aria-label="Appendix">
 <path class="organ-shape appendix-shape" d="M155 426 C151 439 154 453 163 461 C169 466 176 460 174 453 C171 444 166 437 167 428Z"/>
</g>
<!-- jejunum: upper, central coils -->
<g class="diagram-organ" data-organ="jejunum" role="button" tabindex="0" aria-label="Jejunum, upper part of small intestine">
 <path class="organ-shape small-bowel-shape" d="M203 267 C218 249 250 251 258 270 C266 290 237 300 216 284 C194 267 181 286 196 303 C210 320 245 306 265 320 C286 334 267 351 244 341 C221 331 198 341 202 360"/>
 <path class="organ-shape small-bowel-shape" d="M276 263 C294 250 319 260 315 279 C312 295 289 296 278 282 M220 309 C236 293 263 299 267 316"/>
</g>
<!-- ileum: lower central coils -->
<g class="diagram-organ" data-organ="ileum" role="button" tabindex="0" aria-label="Ileum, lower part of small intestine">
 <path class="organ-shape ileum-shape" d="M205 354 C218 337 242 345 239 363 C236 381 211 378 205 391 C198 407 220 417 239 405 C258 393 271 374 289 381 C309 389 304 409 285 416"/>
 <path class="organ-shape ileum-shape" d="M251 355 C266 340 290 346 292 363 C294 378 275 384 264 372 M302 300 C321 287 343 296 338 313 C333 330 313 328 304 316"/>
</g>
<!-- rectum -->
<g class="diagram-organ" data-organ="rectum" role="button" tabindex="0" aria-label="Rectum">
 <path class="organ-shape rectum-shape" d="M280 416 C277 434 282 451 280 473"/>
</g>
<!-- gallbladder, shown as anatomical context -->
<path d="M265 173 C256 181 258 196 267 201 C276 196 278 183 271 174Z" fill="#91a75e" stroke="#71834b" stroke-width="1.5"/>
<!-- label leaders -->
<g class="diagram-labels" aria-hidden="true">
 <path d="M280 74 L430 74 M180 153 L93 153 M355 155 L453 155 M285 230 L445 230 M154 324 L76 324 M216 290 L73 290 M280 455 L438 455 M155 447 L83 447"/>
 <text x="435" y="68" text-anchor="end">Oesophagus</text>
 <text x="12" y="147">Liver</text>
 <text x="545" y="149" text-anchor="end">Stomach</text>
 <text x="545" y="224" text-anchor="end">Pancreas</text>
 <text x="12" y="318">Large intestine</text>
 <text x="12" y="284">Jejunum</text>
 <text x="12" y="463">Appendix</text>
 <text x="435" y="449" text-anchor="end">Rectum</text>
 <text x="280" y="300" text-anchor="middle" class="diagram-small-label">Small intestine</text>
 <text x="280" y="313" text-anchor="middle" class="diagram-small-label">Jejunum above · ileum below</text>
</g>
</svg>
<p class="diagram-instruction">Select an organ or section on the diagram. You can also use Tab and Enter to choose.</p>
</div>`;}
function renderQuiz(){if(quizIndex>=quizOrder.length){$("quiz-progress").textContent="Complete";$("quiz-progress-bar").style.width="100%";$("quiz-content").innerHTML=`<div class="quiz-result"><p class="eyebrow">SESSION COMPLETE</p><h2 class="quiz-question">You scored ${quizScore} out of ${quizOrder.length}</h2><p class="local-note">Use the explanations to guide your next revision session.</p><button class="button primary" id="retry-quiz">Try another round</button></div>`;$("retry-quiz").addEventListener("click",startQuiz);return;}const q=quizOrder[quizIndex];$("quiz-progress").textContent=`Question ${quizIndex+1} of ${quizOrder.length}`;$("quiz-progress-bar").style.width=`${quizIndex/quizOrder.length*100}%`;$("quiz-content").innerHTML=q.type==="diagram"?`<h2 class="quiz-question">${q.q}</h2>${digestiveDiagramMarkup()}<div id="quiz-feedback"></div><div class="quiz-actions"><span class="local-note">Score: ${quizScore}/${quizOrder.length}</span><button class="button primary hidden" id="quiz-next">${quizIndex===quizOrder.length-1?"See results":"Next question →"}</button></div>`:`<h2 class="quiz-question">${q.q}</h2><div class="option-list">${q.opts.map((o,i)=>`<button class="option" data-option="${i}">${String.fromCharCode(65+i)}. ${o}</button>`).join("")}</div><div id="quiz-feedback"></div><div class="quiz-actions"><span class="local-note">Score: ${quizScore}/${quizOrder.length}</span><button class="button primary hidden" id="quiz-next">${quizIndex===quizOrder.length-1?"See results":"Next question →"}</button></div>`;if(q.type==="diagram"){document.querySelectorAll("[data-organ]").forEach(el=>{el.addEventListener("click",()=>answerQuiz(el.dataset.organ));el.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();answerQuiz(el.dataset.organ);}});});}else{document.querySelectorAll("[data-option]").forEach(b=>b.addEventListener("click",()=>answerQuiz(Number(b.dataset.option))));}}
function answerQuiz(choice){if(quizAnswered)return;quizAnswered=true;const q=quizOrder[quizIndex];const correct=choice===q.correct;if(correct)quizScore++;if(q.type==="diagram"){document.querySelectorAll("[data-organ]").forEach(el=>{el.classList.add("diagram-disabled");el.setAttribute("aria-disabled","true");if(el.dataset.organ===q.correct)el.classList.add("diagram-correct");if(el.dataset.organ===choice&&!correct)el.classList.add("diagram-incorrect");});}else{document.querySelectorAll("[data-option]").forEach((b,i)=>{b.disabled=true;if(i===q.correct)b.classList.add("correct");else if(i===choice)b.classList.add("incorrect");});}$("quiz-feedback").innerHTML=`<div class="feedback"><strong>${correct?"Correct.":"Not quite."}</strong> ${q.why}</div>`;$("quiz-next").classList.remove("hidden");$("quiz-next").addEventListener("click",()=>{quizIndex++;quizAnswered=false;renderQuiz();});}
function renderProgress(){const entries=Object.values(progress),reviewed=entries.length,confident=entries.filter(x=>["good","easy"].includes(x.rating)).length,revisit=entries.filter(x=>["again","hard"].includes(x.rating)).length;$("stat-reviewed").textContent=reviewed;$("stat-confident").textContent=confident;$("stat-revisit").textContent=revisit;$("topic-progress").innerHTML=[...new Set(cards.map(c=>c.topic))].map(t=>{const subset=cards.filter(c=>c.topic===t),done=subset.filter(c=>progress[c.id]).length;return `<div class="progress-row"><strong>${t}</strong><div class="progress-track"><span style="width:${done/subset.length*100}%"></span></div><span>${done}/${subset.length}</span></div>`;}).join("");}
$("reset-progress").addEventListener("click",()=>{if(confirm("Reset all revision progress saved in this browser?")){progress={};save();renderProgress();}});
$("level-toggle").addEventListener("click",()=>{const panel=$("level-options"),button=$("level-toggle"),expanded=button.getAttribute("aria-expanded")==="true";button.setAttribute("aria-expanded",String(!expanded));panel.classList.toggle("collapsed",expanded);button.innerHTML=expanded?'Show levels <span aria-hidden="true">⌄</span>':'Hide levels <span aria-hidden="true">⌃</span>';});
document.querySelectorAll("[data-level]").forEach(button=>button.addEventListener("click",()=>{const level=button.dataset.level;if(selectedLevels.includes(level)){if(selectedLevels.length===1)return;selectedLevels=selectedLevels.filter(item=>item!==level);}else{selectedLevels=[...selectedLevels,level];}document.querySelectorAll("[data-level]").forEach(option=>{const selected=selectedLevels.includes(option.dataset.level);option.classList.toggle("selected",selected);option.setAttribute("aria-pressed",String(selected));});const labels=selectedLevels.map(item=>quizLevels[item].label);$("level-selection-note").textContent="Selected: "+labels.join(" + ")+". Your flashcards and quiz questions will include both selected levels.";filterCards();startQuiz();}));
buildTopics();filterCards();startQuiz();renderResources();renderSignposting();initialiseSupabaseAuth();
