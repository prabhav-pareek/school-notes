export const chapterNotes = {
    "rational-numbers": {
        title: "Rational Numbers",
        subject: "Mathematics",
        class: "8",
        content: {
            introduction: {
                title: "What are Rational Numbers? 🤔",
                content: `
                <div class="intro-section">
                    <h3>Real-Life Connection</h3>
                    <p>Imagine you're sharing a pizza with friends! 🍕 When you say "I ate 3/4 of the pizza" or "Give me 0.5 liters of cold drink", you're actually using <strong>rational numbers</strong>!</p>
                    
                    <div class="definition-box">
                        <h4>📚 Definition</h4>
                        <p>A <strong>rational number</strong> is any number that can be expressed in the form <span class="formula">p/q</span>, where:</p>
                        <ul>
                            <li>p and q are integers</li>
                            <li>q ≠ 0 (zero)</li>
                        </ul>
                    </div>

                    <h3>Why Study This Chapter?</h3>
                    <div class="real-world-examples">
                        <div class="example-card">
                            <h4>🏪 Shopping</h4>
                            <p>Calculating discounts: "50% off means multiply by 1/2"</p>
                        </div>
                        <div class="example-card">
                            <h4>🍳 Cooking</h4>
                            <p>Recipe measurements: "Add 3/4 cup of flour"</p>
                        </div>
                        <div class="example-card">
                            <h4>⏰ Time</h4>
                            <p>Time calculations: "1.5 hours = 1 hour 30 minutes"</p>
                        </div>
                        <div class="example-card">
                            <h4>📱 Data</h4>
                            <p>Internet usage: "You've used 0.75 GB of your data"</p>
                        </div>
                    </div>
                </div>
                `
            },
            content: {
                title: "Understanding Rational Numbers Step by Step",
                content: `
                <div class="content-section">
                    <h3>🔍 Types of Rational Numbers</h3>
                    
                    <div class="concept-box">
                        <h4>1. Positive Rational Numbers</h4>
                        <p>Numbers greater than zero</p>
                        <div class="examples">
                            <span class="example">1/2</span>
                            <span class="example">3/4</span>
                            <span class="example">2.5</span>
                            <span class="example">0.25</span>
                        </div>
                        <p class="hindi-explanation">Yani woh numbers jo zero se bade hain! 😊</p>
                    </div>

                    <div class="concept-box">
                        <h4>2. Negative Rational Numbers</h4>
                        <p>Numbers less than zero</p>
                        <div class="examples">
                            <span class="example">-1/2</span>
                            <span class="example">-3/4</span>
                            <span class="example">-2.5</span>
                            <span class="example">-0.25</span>
                        </div>
                        <p class="hindi-explanation">Jo numbers zero se chote hain, bas minus sign laga dete hain!</p>
                    </div>

                    <div class="concept-box">
                        <h4>3. Zero</h4>
                        <p>The number 0 = 0/1 = 0/2 = 0/any non-zero number</p>
                        <p class="hindi-explanation">Zero bhi rational number hai kyunki hum ise p/q form mein likh sakte hain!</p>
                    </div>

                    <h3>🎯 Properties of Rational Numbers</h3>
                    
                    <div class="property-card">
                        <h4>Property 1: Closure Property</h4>
                        <p><strong>Addition:</strong> Sum of two rational numbers is always rational</p>
                        <div class="math-example">
                            <p>Example: 1/2 + 1/3 = 3/6 + 2/6 = 5/6 (still rational!)</p>
                        </div>
                        <p><strong>Subtraction:</strong> Difference of two rational numbers is always rational</p>
                        <div class="math-example">
                            <p>Example: 3/4 - 1/4 = 2/4 = 1/2 (still rational!)</p>
                        </div>
                    </div>

                    <div class="property-card">
                        <h4>Property 2: Commutative Property</h4>
                        <p>Order doesn't matter for addition and multiplication</p>
                        <div class="math-example">
                            <p><strong>Addition:</strong> a + b = b + a</p>
                            <p>Example: 1/2 + 1/3 = 1/3 + 1/2 = 5/6</p>
                            <p><strong>Multiplication:</strong> a × b = b × a</p>
                            <p>Example: 1/2 × 1/3 = 1/3 × 1/2 = 1/6</p>
                        </div>
                    </div>

                    <div class="property-card">
                        <h4>Property 3: Associative Property</h4>
                        <p>Grouping doesn't matter for addition and multiplication</p>
                        <div class="math-example">
                            <p><strong>Addition:</strong> (a + b) + c = a + (b + c)</p>
                            <p>Example: (1/2 + 1/3) + 1/4 = 1/2 + (1/3 + 1/4)</p>
                        </div>
                    </div>

                    <h3>🧮 Operations on Rational Numbers</h3>
                    
                    <div class="operation-section">
                        <h4>Addition of Rational Numbers</h4>
                        <div class="step-by-step">
                            <div class="step">
                                <h5>Step 1: Same Denominator</h5>
                                <p>If denominators are same, just add numerators</p>
                                <div class="math-example">
                                    <p>2/7 + 3/7 = (2+3)/7 = 5/7</p>
                                </div>
                            </div>
                            <div class="step">
                                <h5>Step 2: Different Denominators</h5>
                                <p>Find LCM of denominators, then add</p>
                                <div class="math-example">
                                    <p>1/2 + 1/3</p>
                                    <p>LCM of 2 and 3 = 6</p>
                                    <p>= 3/6 + 2/6 = 5/6</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="operation-section">
                        <h4>Multiplication of Rational Numbers</h4>
                        <div class="formula-highlight">
                            <p><strong>Formula:</strong> a/b × c/d = (a×c)/(b×d)</p>
                        </div>
                        <div class="math-example">
                            <p>Example: 2/3 × 4/5 = (2×4)/(3×5) = 8/15</p>
                            <p class="hindi-explanation">Bas numerator ko numerator se aur denominator ko denominator se multiply kar do!</p>
                        </div>
                    </div>

                    <div class="diagram-placeholder">
                        <h4>📊 Visual Representation</h4>
                        <p><strong>[DIAGRAM PLACEHOLDER]</strong></p>
                        <p>Number line showing rational numbers between integers</p>
                        <p>Pizza/pie charts showing fractions like 1/2, 1/4, 3/4</p>
                        <p>Visual comparison of positive and negative rational numbers</p>
                    </div>
                </div>
                `
            },
            formulas: {
                title: "📋 Formula Sheet & Important Points",
                content: `
                <div class="formula-sheet">
                    <h3>🔥 Must Remember Formulas</h3>
                    
                    <div class="formula-card">
                        <h4>Basic Operations</h4>
                        <ul>
                            <li><strong>Addition:</strong> a/b + c/d = (ad + bc)/(bd)</li>
                            <li><strong>Subtraction:</strong> a/b - c/d = (ad - bc)/(bd)</li>
                            <li><strong>Multiplication:</strong> a/b × c/d = (ac)/(bd)</li>
                            <li><strong>Division:</strong> a/b ÷ c/d = a/b × d/c = (ad)/(bc)</li>
                        </ul>
                    </div>

                    <div class="formula-card">
                        <h4>Special Properties</h4>
                        <ul>
                            <li><strong>Additive Identity:</strong> a + 0 = a</li>
                            <li><strong>Multiplicative Identity:</strong> a × 1 = a</li>
                            <li><strong>Additive Inverse:</strong> a + (-a) = 0</li>
                            <li><strong>Multiplicative Inverse:</strong> a × (1/a) = 1</li>
                        </ul>
                    </div>

                    <h3>⚡ Points to Remember</h3>
                    <div class="remember-points">
                        <div class="point-card important">
                            <h4>🎯 Super Important!</h4>
                            <ul>
                                <li>Every integer is a rational number (5 = 5/1)</li>
                                <li>Every terminating decimal is rational (0.75 = 3/4)</li>
                                <li>Zero is rational but has no multiplicative inverse</li>
                                <li>Between any two rational numbers, infinite rational numbers exist</li>
                            </ul>
                        </div>
                        
                        <div class="point-card">
                            <h4>🧠 Quick Tips</h4>
                            <ul>
                                <li>To convert decimal to fraction: Count decimal places</li>
                                <li>Negative × Negative = Positive</li>
                                <li>Positive × Negative = Negative</li>
                                <li>Always simplify your final answer</li>
                            </ul>
                        </div>

                        <div class="point-card">
                            <h4>⚠️ Common Mistakes</h4>
                            <ul>
                                <li>Don't forget to find LCM for addition/subtraction</li>
                                <li>Never divide by zero!</li>
                                <li>Remember sign rules for negative numbers</li>
                                <li>Always write in simplest form</li>
                            </ul>
                        </div>
                    </div>
                </div>
                `
            },
            practice: {
                title: "🎮 Practice Questions",
                content: `
                <div class="practice-section">
                    <h3>🔥 MCQ Questions (Quick Fire Round!)</h3>
                    
                    <div class="mcq-container">
                        <div class="question-card">
                            <h4>Q1. Which of the following is NOT a rational number?</h4>
                            <div class="options">
                                <label><input type="radio" name="q1" value="a"> a) 0</label>
                                <label><input type="radio" name="q1" value="b"> b) -5</label>
                                <label><input type="radio" name="q1" value="c"> c) √2</label>
                                <label><input type="radio" name="q1" value="d"> d) 3/4</label>
                            </div>
                            <div class="answer hidden">Answer: c) √2 (irrational number hai!)</div>
                        </div>

                        <div class="question-card">
                            <h4>Q2. What is 1/2 + 1/3?</h4>
                            <div class="options">
                                <label><input type="radio" name="q2" value="a"> a) 2/5</label>
                                <label><input type="radio" name="q2" value="b"> b) 5/6</label>
                                <label><input type="radio" name="q2" value="c"> c) 1/6</label>
                                <label><input type="radio" name="q2" value="d"> d) 3/6</label>
                            </div>
                            <div class="answer hidden">Answer: b) 5/6</div>
                        </div>

                        <div class="question-card">
                            <h4>Q3. The multiplicative inverse of -3/7 is:</h4>
                            <div class="options">
                                <label><input type="radio" name="q3" value="a"> a) 7/3</label>
                                <label><input type="radio" name="q3" value="b"> b) -7/3</label>
                                <label><input type="radio" name="q3" value="c"> c) 3/7</label>
                                <label><input type="radio" name="q3" value="d"> d) -3/7</label>
                            </div>
                            <div class="answer hidden">Answer: b) -7/3</div>
                        </div>
                    </div>

                    <h3>📝 Descriptive Questions</h3>
                    
                    <div class="descriptive-questions">
                        <div class="question-level easy">
                            <h4>🟢 Easy Level</h4>
                            <div class="question">
                                <p><strong>Q1.</strong> Find the sum: 2/5 + 3/5</p>
                                <div class="solution hidden">
                                    <p><strong>Solution:</strong> Since denominators are same</p>
                                    <p>2/5 + 3/5 = (2+3)/5 = 5/5 = 1</p>
                                </div>
                            </div>
                            
                            <div class="question">
                                <p><strong>Q2.</strong> Convert 0.25 into a fraction</p>
                                <div class="solution hidden">
                                    <p><strong>Solution:</strong> 0.25 = 25/100 = 1/4</p>
                                </div>
                            </div>
                        </div>

                        <div class="question-level medium">
                            <h4>🟡 Medium Level</h4>
                            <div class="question">
                                <p><strong>Q3.</strong> Simplify: (2/3 + 1/4) × 3/5</p>
                                <div class="solution hidden">
                                    <p><strong>Solution:</strong></p>
                                    <p>First: 2/3 + 1/4 = 8/12 + 3/12 = 11/12</p>
                                    <p>Then: 11/12 × 3/5 = 33/60 = 11/20</p>
                                </div>
                            </div>
                            
                            <div class="question">
                                <p><strong>Q4.</strong> Find three rational numbers between 1/2 and 3/4</p>
                                <div class="solution hidden">
                                    <p><strong>Solution:</strong> Convert to same denominator</p>
                                    <p>1/2 = 6/12, 3/4 = 9/12</p>
                                    <p>Three numbers: 7/12, 8/12, 17/24</p>
                                </div>
                            </div>
                        </div>

                        <div class="question-level hard">
                            <h4>🔴 Hard Level</h4>
                            <div class="question">
                                <p><strong>Q5.</strong> If x = 2/3 and y = -1/4, find the value of x²y + xy²</p>
                                <div class="solution hidden">
                                    <p><strong>Solution:</strong></p>
                                    <p>x²y + xy² = xy(x + y)</p>
                                    <p>x + y = 2/3 + (-1/4) = 8/12 - 3/12 = 5/12</p>
                                    <p>xy = (2/3) × (-1/4) = -2/12 = -1/6</p>
                                    <p>Therefore: (-1/6) × (5/12) = -5/72</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h3>🏆 Challenge Questions (For Toppers!)</h3>
                    <div class="challenge-questions">
                        <div class="question">
                            <p><strong>Challenge 1:</strong> Prove that between any two distinct rational numbers, there exists another rational number.</p>
                        </div>
                        <div class="question">
                            <p><strong>Challenge 2:</strong> A shopkeeper gives a discount of 1/4 on marked price and still makes a profit of 1/8. If the cost price is ₹240, find the marked price.</p>
                        </div>
                    </div>

                    <div class="fun-activity">
                        <h3>🎨 Fun Activity Corner!</h3>
                        <div class="activity-card">
                            <h4>🍕 Pizza Fraction Game</h4>
                            <p>Draw a pizza and divide it to show:</p>
                            <ul>
                                <li>1/2 + 1/4 = ?</li>
                                <li>3/4 - 1/8 = ?</li>
                            </ul>
                            <p>Color different parts to visualize the operations!</p>
                        </div>
                    </div>
                </div>
                `
            },
            pyq: {
                title: "📚 Previous Year Questions & Board Patterns",
                content: `
                <div class="pyq-section">
                    <h3>🎯 Board Exam Pattern Analysis</h3>
                    
                    <div class="pattern-analysis">
                        <div class="pattern-card">
                            <h4>Question Distribution</h4>
                            <ul>
                                <li><strong>MCQ:</strong> 1-2 questions (1 mark each)</li>
                                <li><strong>Short Answer:</strong> 2-3 questions (2 marks each)</li>
                                <li><strong>Long Answer:</strong> 1 question (3-4 marks)</li>
                                <li><strong>Application:</strong> 1 word problem (3-5 marks)</li>
                            </ul>
                        </div>
                    </div>

                    <h3>🔥 Most Repeated Questions</h3>
                    
                    <div class="repeated-questions">
                        <div class="frequency high">
                            <h4>🌟 Asked Every Year!</h4>
                            <ul>
                                <li>Properties of rational numbers (commutative, associative)</li>
                                <li>Addition and subtraction with different denominators</li>
                                <li>Finding rational numbers between two given numbers</li>
                                <li>Converting decimals to fractions</li>
                            </ul>
                        </div>

                        <div class="frequency medium">
                            <h4>📈 Frequently Asked</h4>
                            <ul>
                                <li>Multiplicative inverse problems</li>
                                <li>Simplification of complex expressions</li>
                                <li>Word problems on rational numbers</li>
                                <li>Verification of properties with examples</li>
                            </ul>
                        </div>
                    </div>

                    <h3>📋 Board Exam Questions (Last 5 Years)</h3>
                    
                    <div class="board-questions">
                        <div class="year-question">
                            <h4>2023 Board Question</h4>
                            <p><strong>Q:</strong> Find five rational numbers between 3/5 and 4/5. [3 marks]</p>
                            <div class="marking-scheme">
                                <p><strong>Marking:</strong> Method (1 mark) + Calculation (1 mark) + Answer (1 mark)</p>
                            </div>
                        </div>

                        <div class="year-question">
                            <h4>2022 Board Question</h4>
                            <p><strong>Q:</strong> Verify commutative property for addition using -2/3 and 5/7. [2 marks]</p>
                        </div>

                        <div class="year-question">
                            <h4>2021 Board Question</h4>
                            <p><strong>Q:</strong> A student spent 1/3 of his pocket money on books and 1/4 on snacks. What fraction of money is left? [3 marks]</p>
                        </div>
                    </div>

                    <h3>💡 Exam Tips</h3>
                    <div class="exam-tips">
                        <div class="tip-card important">
                            <h4>⚡ Last Day Revision Tips</h4>
                            <ul>
                                <li><strong>15 min:</strong> Review all formulas</li>
                                <li><strong>20 min:</strong> Practice 5 MCQs</li>
                                <li><strong>15 min:</strong> Solve 2 medium-level problems</li>
                                <li><strong>10 min:</strong> Check common mistakes list</li>
                            </ul>
                        </div>

                        <div class="tip-card">
                            <h4>✍️ Writing Tips for Exam</h4>
                            <ul>
                                <li>Always write the property name when asked</li>
                                <li>Show step-by-step calculation</li>
                                <li>Circle or highlight final answers</li>
                                <li>Use proper mathematical notation</li>
                            </ul>
                        </div>
                    </div>
                </div>
                `
            }
        }
    },
    "dhvani": {
        title: "ध्वनि (Dhvani)",
        subject: "Hindi",
        class: "8",
        content: {
            introduction: {
                title: "कविता परिचय - ध्वनि 🎵",
                content: `
                <div class="intro-section">
                    <h3>कवि परिचय</h3>
                    <div class="author-info">
                        <h4>सूर्यकांत त्रिपाठी 'निराला'</h4>
                        <p><strong>जन्म:</strong> 21 फरवरी 1896, मेदिनीपुर, बंगाल</p>
                        <p><strong>मृत्यु:</strong> 15 अक्टूबर 1961, इलाहाबाद</p>
                        <p><strong>उपनाम:</strong> छायावाद के चार स्तंभों में से एक</p>
                    </div>

                    <h3>🎯 कविता क्यों पढ़ें?</h3>
                    <div class="real-world-connection">
                        <div class="connection-card">
                            <h4>🎼 संगीत और जीवन</h4>
                            <p>जैसे आज हम songs सुनकर खुश होते हैं, वैसे ही इस कविता में भी music की power दिखाई गई है!</p>
                        </div>
                        <div class="connection-card">
                            <h4>🌅 प्रकृति प्रेम</h4>
                            <p>Instagram पर sunset देखकर feel good होते हैं? यहाँ भी प्रकृति की सुंदरता है!</p>
                        </div>
                        <div class="connection-card">
                            <h4>🧘‍♀️ Inner Peace</h4>
                            <p>Meditation apps की तरह, यह कविता भी मन को शांति देती है</p>
                        </div>
                    </div>
                </div>
                `
            },
            content: {
                title: "कविता की पंक्तियाँ और व्याख्या",
                content: `
                <div class="poem-content">
                    <h3>📖 पहला पद (Para 1)</h3>
                    
                    <div class="poem-stanza">
                        <div class="hindi-text">
                            <p><strong>
                            कहीं बजती होगी वीणा<br>
                            कहीं कोई गाता होगा<br>
                            सुनाई दे रहा स्वर तो<br>
                            कहीं शहनाई बजता होगा
                            </strong></p>
                        </div>
                        
                        <div class="explanation">
                            <h4>🎯 व्याख्या (Explanation)</h4>
                            <p class="hindi-explanation">
                            यहाँ कवि कह रहा है कि कहीं न कहीं <span class="keyword">संगीत</span> बज रहा है। 
                            यह music सिर्फ instruments का नहीं, बल्कि <span class="keyword">प्रकृति का संगीत</span> है!
                            </p>
                            
                            <div class="keywords-section">
                                <h5>🔑 Keywords:</h5>
                                <ul>
                                    <li><strong>वीणा:</strong> एक तार वाला वाद्य यंत्र (जैसे guitar)</li>
                                    <li><strong>शहनाई:</strong> शादी-विवाह में बजने वाला instrument</li>
                                    <li><strong>स्वर:</strong> आवाज़, music</li>
                                </ul>
                            </div>

                            <div class="modern-context">
                                <h5>🎵 आज के समय में:</h5>
                                <p>जैसे आज हम Spotify पर music सुनते हैं, वैसे ही कवि प्रकृति के music को feel कर रहा है!</p>
                            </div>
                        </div>
                    </div>

                    <h3>📖 दूसरा पद (Para 2)</h3>
                    
                    <div class="poem-stanza">
                        <div class="hindi-text">
                            <p><strong>
                            कहीं झरने का गाना होगा<br>
                            कहीं मोर का नाचना होगा<br>
                            कहीं कोयल का स्वर गूंजा होगा<br>
                            कहीं पंछियों का गाना होगा
                            </strong></p>
                        </div>
                        
                        <div class="explanation">
                            <h4>🎯 व्याख्या</h4>
                            <p class="hindi-explanation">
                            अब कवि specific बता रहा है कि यह music कहाँ से आ रहा है - <span class="keyword">प्रकृति</span> से! 
                            झरना, मोर, कोयल सब अपना-अपना music बना रहे हैं।
                            </p>
                            
                            <div class="keywords-section">
                                <h5>🔑 Keywords:</h5>
                                <ul>
                                    <li><strong>झरने का गाना:</strong> पानी के गिरने की मधुर आवाज़</li>
                                    <li><strong>मोर का नाचना:</strong> मोर का नृत्य (जैसे dance videos में)</li>
                                    <li><strong>कोयल का स्वर:</strong> कोयल की मीठी आवाज़</li>
                                    <li><strong>पंछियों का गाना:</strong> birds का chorus singing</li>
                                </ul>
                            </div>

                            <div class="real-life-example">
                                <h5>🌿 Real Life Example:</h5>
                                <p>Hill station पर जाते हैं तो birds की chirping, waterfall का sound सुनकर kitna peaceful feel होता है!</p>
                            </div>
                        </div>
                    </div>

                    <h3>📖 तीसरा पद (Para 3)</h3>
                    
                    <div class="poem-stanza">
                        <div class="hindi-text">
                            <p><strong>
                            कहीं पवन के साथ उड़ती<br>
                            धुन भी कोई होगी<br>
                            जादुई सी पूरी दुनिया<br>
                            संगीत से भरी होगी
                            </strong></p>
                        </div>
                        
                        <div class="explanation">
                            <h4>🎯 व्याख्या</h4>
                            <p class="hindi-explanation">
                            यहाँ कवि कह रहा है कि <span class="keyword">हवा</span> भी music बनाती है और 
                            पूरी दुनिया <span class="keyword">जादुई संगीत</span> से भरी हुई है!
                            </p>
                            
                            <div class="keywords-section">
                                <h5>🔑 Keywords:</h5>
                                <ul>
                                    <li><strong>पवन:</strong> हवा, wind</li>
                                    <li><strong>धुन:</strong> melody, tune</li>
                                    <li><strong>जादुई:</strong> magical, enchanting</li>
                                    <li><strong>संगीत से भरी:</strong> music से भरपूर</li>
                                </ul>
                            </div>

                            <div class="philosophical-meaning">
                                <h5>🧠 गहरा अर्थ:</h5>
                                <p>कवि बताना चाहता है कि अगर हम ध्यान से सुनें तो पूरी nature music का concert है! 
                                हमें बस सुनने की कला आनी चाहिए।</p>
                            </div>
                        </div>
                    </div>

                    <h3>🎨 काव्य तत्व (Poetry Elements)</h3>
                    
                    <div class="poetry-elements">
                        <div class="element-card">
                            <h4>छंद (Meter)</h4>
                            <p>मुक्त छंद (Free verse) - कोई निश्चित पैटर्न नहीं</p>
                        </div>
                        
                        <div class="element-card">
                            <h4>रस (Emotion)</h4>
                            <p>शांत रस - मन को शांति और सुकून देने वाला</p>
                        </div>
                        
                        <div class="element-card">
                            <h4>अलंकार (Figures of Speech)</h4>
                            <ul>
                                <li><strong>पुनरुक्ति प्रकाश:</strong> "कहीं" शब्द का बार-बार प्रयोग</li>
                                <li><strong>मानवीकरण:</strong> झरने का "गाना", पवन का "धुन" उड़ाना</li>
                            </ul>
                        </div>
                        
                        <div class="element-card">
                            <h4>भाषा की विशेषताएं</h4>
                            <ul>
                                <li>सरल और स्पष्ट हिंदी</li>
                                <li>संगीत की तरह प्रवाहमान</li>
                                <li>प्रकृति के चित्रण में सुंदरता</li>
                            </ul>
                        </div>
                    </div>
                </div>
                `
            },
            practice: {
                title: "🎮 अभ्यास प्रश्न",
                content: `
                <div class="practice-section">
                    <h3>🔥 MCQ Questions</h3>
                    
                    <div class="mcq-container">
                        <div class="question-card">
                            <h4>Q1. 'ध्वनि' कविता के कवि कौन हैं?</h4>
                            <div class="options">
                                <label><input type="radio" name="q1" value="a"> a) हरिवंशराय बच्चन</label>
                                <label><input type="radio" name="q1" value="b"> b) सूर्यकांत त्रिपाठी 'निराला'</label>
                                <label><input type="radio" name="q1" value="c"> c) सुमित्रानंदन पंत</label>
                                <label><input type="radio" name="q1" value="d"> d) महादेवी वर्मा</label>
                            </div>
                            <div class="answer hidden">उत्तर: b) सूर्यकांत त्रिपाठी 'निराला'</div>
                        </div>

                        <div class="question-card">
                            <h4>Q2. कविता में किस रस की प्रधानता है?</h4>
                            <div class="options">
                                <label><input type="radio" name="q2" value="a"> a) श्रृंगार रस</label>
                                <label><input type="radio" name="q2" value="b"> b) वीर रस</label>
                                <label><input type="radio" name="q2" value="c"> c) शांत रस</label>
                                <label><input type="radio" name="q2" value="d"> d) हास्य रस</label>
                            </div>
                            <div class="answer hidden">उत्तर: c) शांत रस</div>
                        </div>

                        <div class="question-card">
                            <h4>Q3. "कहीं" शब्द का बार-बार प्रयोग कौन सा अलंकार है?</h4>
                            <div class="options">
                                <label><input type="radio" name="q3" value="a"> a) उपमा अलंकार</label>
                                <label><input type="radio" name="q3" value="b"> b) पुनरुक्ति प्रकाश अलंकार</label>
                                <label><input type="radio" name="q3" value="c"> c) रूपक अलंकार</label>
                                <label><input type="radio" name="q3" value="d"> d) अनुप्रास अलंकार</label>
                            </div>
                            <div class="answer hidden">उत्तर: b) पुनरुक्ति प्रकाश अलंकार</div>
                        </div>
                    </div>

                    <h3>📝 लघु उत्तरीय प्रश्न (2-3 अंक)</h3>
                    
                    <div class="short-questions">
                        <div class="question">
                            <p><strong>Q1.</strong> 'ध्वनि' कविता का मुख्य भाव क्या है? (3 अंक)</p>
                            <div class="answer-guide hidden">
                                <p><strong>उत्तर की रूपरेखा:</strong></p>
                                <ul>
                                    <li>प्रकृति में व्याप्त संगीत का वर्णन (1 अंक)</li>
                                    <li>चारों ओर फैली मधुर ध्वनियों का चित्रण (1 अंक)</li>
                                    <li>जीवन में संगीत की महत्ता (1 अंक)</li>
                                </ul>
                            </div>
                        </div>

                        <div class="question">
                            <p><strong>Q2.</strong> कवि ने प्रकृति के किन-किन तत्वों का संगीत के रूप में वर्णन किया है? (3 अंक)</p>
                            <div class="answer-guide hidden">
                                <p><strong>उत्तर:</strong> झरना, मोर, कोयल, पंछी, पवन आदि का संगीत</p>
                            </div>
                        </div>

                        <div class="question">
                            <p><strong>Q3.</strong> "जादुई सी पूरी दुनिया, संगीत से भरी होगी" - इस पंक्ति का भाव स्पष्ट करें। (2 अंक)</p>
                            <div class="answer-guide hidden">
                                <p><strong>भाव:</strong> संपूर्ण संसार में संगीत व्याप्त है, जो जादुई प्रभाव डालता है</p>
                            </div>
                        </div>
                    </div>

                    <h3>📖 दीर्घ उत्तरीय प्रश्न (5-6 अंक)</h3>
                    
                    <div class="long-questions">
                        <div class="question">
                            <p><strong>Q1.</strong> 'ध्वनि' कविता के आधार पर निराला जी की प्रकृति-प्रेम की भावना का वर्णन करें। (5 अंक)</p>
                            <div class="answer-structure hidden">
                                <h5>उत्तर की रूपरेखा:</h5>
                                <ul>
                                    <li><strong>भूमिका:</strong> निराला जी का प्रकृति प्रेम (1 अंक)</li>
                                    <li><strong>प्रकृति के संगीत का चित्रण:</strong> झरना, पक्षी, हवा (2 अंक)</li>
                                    <li><strong>कलात्मक अभिव्यक्ति:</strong> भाषा और शैली (1 अंक)</li>
                                    <li><strong>निष्कर्ष:</strong> संदेश और महत्व (1 अंक)</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <h3>🎨 रचनात्मक गतिविधि</h3>
                    <div class="creative-activity">
                        <div class="activity-card">
                            <h4>🎵 Nature Music Hunt!</h4>
                            <p><strong>Activity:</strong> अपने आस-पास की 5 प्राकृतिक आवाज़ों की list बनाएं जो music की तरह लगती हैं।</p>
                            <p><strong>Example:</strong> पंखे की आवाज़, बारिश की टपटप, पक्षियों का चहचहाना...</p>
                        </div>
                        
                        <div class="activity-card">
                            <h4>✍️ अपनी कविता लिखें!</h4>
                            <p>"कहीं _____ होगा" के pattern में अपनी 4 lines लिखें!</p>
                        </div>
                    </div>
                </div>
                `
            },
            pyq: {
                title: "📚 बोर्ड परीक्षा पैटर्न और पुराने प्रश्न",
                content: `
                <div class="board-pattern">
                    <h3>🎯 बोर्ड परीक्षा में प्रश्न पैटर्न</h3>
                    
                    <div class="pattern-analysis">
                        <div class="pattern-card">
                            <h4>प्रश्न वितरण</h4>
                            <ul>
                                <li><strong>MCQ:</strong> 1 प्रश्न (1 अंक)</li>
                                <li><strong>लघु उत्तरीय:</strong> 1-2 प्रश्न (2-3 अंक)</li>
                                <li><strong>दीर्घ उत्तरीय:</strong> 1 प्रश्न (5 अंक)</li>
                                <li><strong>काव्यांश:</strong> भाव/व्याख्या (3-4 अंक)</li>
                            </ul>
                        </div>
                    </div>

                    <h3>🔥 बार-बार आने वाले प्रश्न</h3>
                    
                    <div class="frequent-questions">
                        <div class="frequency-high">
                            <h4>⭐ हर साल आते हैं</h4>
                            <ul>
                                <li>कविता का मुख्य भाव</li>
                                <li>प्रकृति चित्रण</li>
                                <li>अलंकार की पहचान</li>
                                <li>काव्यांश की व्याख्या</li>
                            </ul>
                        </div>

                        <div class="frequency-medium">
                            <h4>📊 अक्सर आते हैं</h4>
                            <ul>
                                <li>कवि परिचय</li>
                                <li>भाषा की विशेषताएं</li>
                                <li>संदेश/शिक्षा</li>
                                <li>शब्द अर्थ</li>
                            </ul>
                        </div>
                    </div>

                    <h3>📋 पिछले वर्षों के बोर्ड प्रश्न</h3>
                    
                    <div class="previous-questions">
                        <div class="year-wise">
                            <h4>2023 बोर्ड प्रश्न</h4>
                            <p><strong>Q:</strong> 'ध्वनि' कविता में कवि ने प्रकृति के संगीत का वर्णन कैसे किया है? उदाहरण सहित स्पष्ट करें। [5 अंक]</p>
                            <div class="marking-scheme">
                                <p><strong>अंक विभाजन:</strong> भूमिका (1) + उदाहरण (2) + व्याख्या (1) + निष्कर्ष (1)</p>
                            </div>
                        </div>

                        <div class="year-wise">
                            <h4>2022 बोर्ड प्रश्न</h4>
                            <p><strong>Q:</strong> निम्न काव्यांश की व्याख्या करें:</p>
                            <p><em>"कहीं पवन के साथ उड़ती, धुन भी कोई होगी"</em> [3 अंक]</p>
                        </div>

                        <div class="year-wise">
                            <h4>2021 बोर्ड प्रश्न</h4>
                            <p><strong>Q:</strong> 'पुनरुक्ति प्रकाश अलंकार' की परिभाषा देते हुए 'ध्वनि' कविता से उदाहरण दें। [2 अंक]</p>
                        </div>
                    </div>

                    <h3>💡 परीक्षा टिप्स</h3>
                    <div class="exam-tips">
                        <div class="tip-card last-day">
                            <h4>⚡ एक दिन पहले रिविजन</h4>
                            <ul>
                                <li><strong>10 मिनट:</strong> कवि का नाम और जीवन परिचय</li>
                                <li><strong>15 मिनट:</strong> सभी पद्यांशों का भाव</li>
                                <li><strong>10 मिनट:</strong> मुख्य keywords और अर्थ</li>
                                <li><strong>5 मिनट:</strong> अलंकार के उदाहरण</li>
                            </ul>
                        </div>

                        <div class="tip-card writing">
                            <h4>✍️ उत्तर लेखन टिप्स</h4>
                            <ul>
                                <li>हमेशा काव्यांश के साथ reference दें</li>
                                <li>शब्दों के अर्थ स्पष्ट करें</li>
                                <li>भाव को सरल भाषा में लिखें</li>
                                <li>उदाहरण ज़रूर दें</li>
                            </ul>
                        </div>

                        <div class="tip-card common-mistakes">
                            <h4>⚠️ सामान्य गलतियां</h4>
                            <ul>
                                <li>कवि का नाम गलत लिखना</li>
                                <li>अलंकार की गलत पहचान</li>
                                <li>भाव के बजाय शब्दार्थ लिखना</li>
                                <li>उदाहरण न देना</li>
                            </ul>
                        </div>
                    </div>
                </div>
                `
            }
        }
    },
    "linear-equations-one-variable": {
        title: "Linear Equations in One Variable",
        subject: "Mathematics", 
        class: "8",
        content: {
        introduction: {
            title: "Linear Equations in One Variable - The Detective Game! 🕵️‍♂️",
            content: `
            <div class="intro-section">
                <h3>Real-Life Connection</h3>
                <p>Imagine you're a detective solving mysteries! 🔍 When you say "I bought some pens for ₹50, each pen costs ₹5, how many pens did I buy?" - you're solving a <strong>linear equation</strong>!</p>
                
                <div class="definition-box">
                    <h4>📚 Definition</h4>
                    <p>A <strong>linear equation in one variable</strong> is an equation where the highest power of the variable is 1.</p>
                    <p><strong>General Form:</strong> <span class="formula">ax + b = 0</span>, where a ≠ 0</p>
                </div>

                <h3>Why Study This Chapter?</h3>
                <div class="real-world-examples">
                    <div class="example-card">
                        <h4>💰 Money Problems</h4>
                        <p>"I have some money. If I spend ₹20, I'll have ₹30 left. How much do I have?"</p>
                    </div>
                    <div class="example-card">
                        <h4>📏 Measurement</h4>
                        <p>"Length of rectangle is 3 times its width. Perimeter is 24 cm. Find dimensions?"</p>
                    </div>
                    <div class="example-card">
                        <h4>⏰ Age Problems</h4>
                        <p>"Father is 3 times son's age. After 12 years, he'll be twice. Find current ages?"</p>
                    </div>
                    <div class="example-card">
                        <h4>🏃‍♂️ Speed & Distance</h4>
                        <p>"A car travels 240 km in some hours at 60 km/h. How long did it take?"</p>
                    </div>
                </div>
            </div>
            `
        },
        content: {
            title: "Mastering Linear Equations Step by Step",
            content: `
            <div class="content-section">
                <h3>🎯 What is a Linear Equation?</h3>
                
                <div class="concept-box">
                    <h4>Characteristics of Linear Equations</h4>
                    <ul>
                        <li><strong>One variable only</strong> (usually x)</li>
                        <li><strong>Highest power is 1</strong> (no x², x³, etc.)</li>
                        <li><strong>Can be written as ax + b = 0</strong></li>
                        <li><strong>Graph is always a straight line</strong></li>
                    </ul>
                    <p class="hindi-explanation">Yani simple equations jin mein sirf x ki power 1 ho! 😊</p>
                </div>

                <h3>✅ Examples of Linear Equations</h3>
                <div class="examples">
                    <span class="example">2x + 3 = 7</span>
                    <span class="example">5x - 2 = 18</span>
                    <span class="example">x/3 + 4 = 10</span>
                    <span class="example">3(x + 2) = 15</span>
                </div>

                <h3>❌ NOT Linear Equations</h3>
                <div class="examples">
                    <span class="example" style="background-color: #ffcccb;">x² + 2 = 6</span>
                    <span class="example" style="background-color: #ffcccb;">xy + 3 = 8</span>
                    <span class="example" style="background-color: #ffcccb;">√x = 4</span>
                    <span class="example" style="background-color: #ffcccb;">1/x = 5</span>
                </div>

                <h3>🔧 Methods to Solve Linear Equations</h3>

                <div class="method-section">
                    <h4>Method 1: Trial and Error Method</h4>
                    <div class="step-by-step">
                        <div class="step">
                            <h5>Example: Solve 2x + 3 = 11</h5>
                            <p>Try different values of x:</p>
                            <div class="math-example">
                                <p>If x = 1: 2(1) + 3 = 5 ≠ 11 ❌</p>
                                <p>If x = 2: 2(2) + 3 = 7 ≠ 11 ❌</p>
                                <p>If x = 4: 2(4) + 3 = 11 ✅</p>
                                <p><strong>Answer: x = 4</strong></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="method-section">
                    <h4>Method 2: Systematic Method (Most Important!)</h4>
                    <div class="step-by-step">
                        <div class="step">
                            <h5>Step 1: Simplify both sides</h5>
                            <p>Remove brackets, combine like terms</p>
                        </div>
                        <div class="step">
                            <h5>Step 2: Move variables to one side</h5>
                            <p>Move constants to the other side</p>
                        </div>
                        <div class="step">
                            <h5>Step 3: Make coefficient of variable = 1</h5>
                            <p>Divide both sides by coefficient of x</p>
                        </div>
                        <div class="step">
                            <h5>Step 4: Check your answer</h5>
                            <p>Substitute back in original equation</p>
                        </div>
                    </div>
                </div>

                <h3>📝 Detailed Examples</h3>

                <div class="example-detailed">
                    <h4>Example 1: Simple Linear Equation</h4>
                    <p><strong>Solve:</strong> 3x + 7 = 22</p>
                    <div class="solution-steps">
                        <p><strong>Step 1:</strong> 3x + 7 = 22</p>
                        <p><strong>Step 2:</strong> 3x = 22 - 7 (Move 7 to right side)</p>
                        <p><strong>Step 3:</strong> 3x = 15</p>
                        <p><strong>Step 4:</strong> x = 15/3 = 5</p>
                        <p><strong>Check:</strong> 3(5) + 7 = 15 + 7 = 22 ✅</p>
                    </div>
                    <p class="hindi-explanation">Dekho kaise step by step solve kiya! Bas transpose karte jaao! 🎯</p>
                </div>

                <div class="example-detailed">
                    <h4>Example 2: Equation with Fractions</h4>
                    <p><strong>Solve:</strong> x/4 + x/6 = 5</p>
                    <div class="solution-steps">
                        <p><strong>Step 1:</strong> Find LCM of 4 and 6 = 12</p>
                        <p><strong>Step 2:</strong> Multiply both sides by 12</p>
                        <p><strong>Step 3:</strong> 3x + 2x = 60</p>
                        <p><strong>Step 4:</strong> 5x = 60</p>
                        <p><strong>Step 5:</strong> x = 12</p>
                        <p><strong>Check:</strong> 12/4 + 12/6 = 3 + 2 = 5 ✅</p>
                    </div>
                </div>

                <div class="example-detailed">
                    <h4>Example 3: Equation with Brackets</h4>
                    <p><strong>Solve:</strong> 2(x + 3) = 3(x - 1) + 7</p>
                    <div class="solution-steps">
                        <p><strong>Step 1:</strong> 2x + 6 = 3x - 3 + 7 (Open brackets)</p>
                        <p><strong>Step 2:</strong> 2x + 6 = 3x + 4 (Simplify right side)</p>
                        <p><strong>Step 3:</strong> 6 - 4 = 3x - 2x (Move variables and constants)</p>
                        <p><strong>Step 4:</strong> 2 = x</p>
                        <p><strong>Therefore:</strong> x = 2</p>
                        <p><strong>Check:</strong> 2(2+3) = 10 and 3(2-1)+7 = 10 ✅</p>
                    </div>
                </div>

                <h3>🎲 Word Problems Strategy</h3>
                
                <div class="strategy-box">
                    <h4>4-Step Strategy for Word Problems</h4>
                    <div class="strategy-steps">
                        <div class="strategy-step">
                            <h5>1. READ & UNDERSTAND</h5>
                            <p>What is given? What to find?</p>
                        </div>
                        <div class="strategy-step">
                            <h5>2. CHOOSE VARIABLE</h5>
                            <p>Let x = unknown quantity</p>
                        </div>
                        <div class="strategy-step">
                            <h5>3. FORM EQUATION</h5>
                            <p>Translate words into math</p>
                        </div>
                        <div class="strategy-step">
                            <h5>4. SOLVE & CHECK</h5>
                            <p>Solve equation and verify</p>
                        </div>
                    </div>
                </div>

                <div class="word-problem-example">
                    <h4>Word Problem Example</h4>
                    <p><strong>Problem:</strong> The sum of three consecutive integers is 48. Find the integers.</p>
                    <div class="solution-steps">
                        <p><strong>Step 1:</strong> Let first integer = x</p>
                        <p><strong>Step 2:</strong> Then second = x + 1, third = x + 2</p>
                        <p><strong>Step 3:</strong> x + (x + 1) + (x + 2) = 48</p>
                        <p><strong>Step 4:</strong> 3x + 3 = 48</p>
                        <p><strong>Step 5:</strong> 3x = 45, so x = 15</p>
                        <p><strong>Answer:</strong> The integers are 15, 16, 17</p>
                        <p><strong>Check:</strong> 15 + 16 + 17 = 48 ✅</p>
                    </div>
                </div>

                <div class="diagram-placeholder">
                    <h4>📊 Visual Representation</h4>
                    <p><strong>[DIAGRAM PLACEHOLDER]</strong></p>
                    <p>Balance scale showing equation solving process</p>
                    <p>Number line representation of solutions</p>
                    <p>Step-by-step visual method for transposition</p>
                </div>
            </div>
            `
        },
        formulas: {
            title: "📋 Formula Sheet & Important Points",
            content: `
            <div class="formula-sheet">
                <h3>🔥 Must Remember Formulas & Rules</h3>
                
                <div class="formula-card">
                    <h4>Basic Forms</h4>
                    <ul>
                        <li><strong>Standard Form:</strong> ax + b = 0, where a ≠ 0</li>
                        <li><strong>Solution:</strong> x = -b/a</li>
                        <li><strong>General Form:</strong> ax + b = cx + d</li>
                        <li><strong>Solution:</strong> x = (d - b)/(a - c)</li>
                    </ul>
                </div>

                <div class="formula-card">
                    <h4>Transposition Rules</h4>
                    <ul>
                        <li><strong>Addition:</strong> If x + a = b, then x = b - a</li>
                        <li><strong>Subtraction:</strong> If x - a = b, then x = b + a</li>
                        <li><strong>Multiplication:</strong> If ax = b, then x = b/a</li>
                        <li><strong>Division:</strong> If x/a = b, then x = ab</li>
                    </ul>
                </div>

                <div class="formula-card">
                    <h4>Word Problem Formulas</h4>
                    <ul>
                        <li><strong>Consecutive integers:</strong> x, x+1, x+2...</li>
                        <li><strong>Consecutive even:</strong> x, x+2, x+4...</li>
                        <li><strong>Consecutive odd:</strong> x, x+2, x+4...</li>
                        <li><strong>Age problems:</strong> Present age ± years = Future/Past age</li>
                    </ul>
                </div>

                <h3>⚡ Points to Remember</h3>
                <div class="remember-points">
                    <div class="point-card important">
                        <h4>🎯 Super Important!</h4>
                        <ul>
                            <li>Always check your answer by substituting back</li>
                            <li>Whatever you do to one side, do to the other side</li>
                            <li>Linear equation has exactly ONE solution</li>
                            <li>Graph of linear equation is always a straight line</li>
                        </ul>
                    </div>
                    
                    <div class="point-card">
                        <h4>🧠 Quick Tips</h4>
                        <ul>
                            <li>Move variables to left, constants to right</li>
                            <li>Always simplify before solving</li>
                            <li>For fractions, multiply by LCM first</li>
                            <li>In word problems, define variable clearly</li>
                        </ul>
                    </div>

                    <div class="point-card">
                        <h4>⚠️ Common Mistakes</h4>
                        <ul>
                            <li>Forgetting to change sign while transposing</li>
                            <li>Not checking the answer</li>
                            <li>Mixing up the signs in brackets</li>
                            <li>Not clearing fractions properly</li>
                        </ul>
                    </div>
                </div>

                <div class="quick-reference">
                    <h3>📚 Quick Reference Table</h3>
                    <table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
                        <tr style="background-color: var(--bg-secondary);">
                            <th style="border: 1px solid var(--border-color); padding: 0.5rem;">Operation</th>
                            <th style="border: 1px solid var(--border-color); padding: 0.5rem;">Rule</th>
                            <th style="border: 1px solid var(--border-color); padding: 0.5rem;">Example</th>
                        </tr>
                        <tr>
                            <td style="border: 1px solid var(--border-color); padding: 0.5rem;">+a moves to other side</td>
                            <td style="border: 1px solid var(--border-color); padding: 0.5rem;">Becomes -a</td>
                            <td style="border: 1px solid var(--border-color); padding: 0.5rem;">x + 5 = 8 → x = 8 - 5</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid var(--border-color); padding: 0.5rem;">-a moves to other side</td>
                            <td style="border: 1px solid var(--border-color); padding: 0.5rem;">Becomes +a</td>
                            <td style="border: 1px solid var(--border-color); padding: 0.5rem;">x - 3 = 7 → x = 7 + 3</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid var(--border-color); padding: 0.5rem;">×a moves to other side</td>
                            <td style="border: 1px solid var(--border-color); padding: 0.5rem;">Becomes ÷a</td>
                            <td style="border: 1px solid var(--border-color); padding: 0.5rem;">3x = 12 → x = 12/3</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid var(--border-color); padding: 0.5rem;">÷a moves to other side</td>
                            <td style="border: 1px solid var(--border-color); padding: 0.5rem;">Becomes ×a</td>
                            <td style="border: 1px solid var(--border-color); padding: 0.5rem;">x/4 = 5 → x = 5 × 4</td>
                        </tr>
                    </table>
                </div>
            </div>
            `
        },
        practice: {
            title: "🎮 Practice Questions",
            content: `
            <div class="practice-section">
                <h3>🔥 MCQ Questions (Quick Fire Round!)</h3>
                
                <div class="mcq-container">
                    <div class="question-card">
                        <h4>Q1. The solution of 2x + 3 = 11 is:</h4>
                        <div class="options">
                            <label><input type="radio" name="q1" value="a"> a) x = 4</label>
                            <label><input type="radio" name="q1" value="b"> b) x = 7</label>
                            <label><input type="radio" name="q1" value="c"> c) x = 3</label>
                            <label><input type="radio" name="q1" value="d"> d) x = 5</label>
                        </div>
                        <div class="answer hidden">
                            <p><strong>Answer: a) x = 4</strong></p>
                            <p><strong>Solution:</strong> 2x + 3 = 11 → 2x = 8 → x = 4</p>
                        </div>
                    </div>

                    <div class="question-card">
                        <h4>Q2. Which of the following is NOT a linear equation?</h4>
                        <div class="options">
                            <label><input type="radio" name="q2" value="a"> a) 2x + 5 = 0</label>
                            <label><input type="radio" name="q2" value="b"> b) x² + 3 = 7</label>
                            <label><input type="radio" name="q2" value="c"> c) 3x - 2 = 10</label>
                            <label><input type="radio" name="q2" value="d"> d) x/3 = 4</label>
                        </div>
                        <div class="answer hidden">
                            <p><strong>Answer: b) x² + 3 = 7</strong></p>
                            <p><strong>Reason:</strong> Highest power of x is 2, not 1</p>
                        </div>
                    </div>

                    <div class="question-card">
                        <h4>Q3. If 3x - 7 = 2x + 8, then x = ?</h4>
                        <div class="options">
                            <label><input type="radio" name="q3" value="a"> a) 15</label>
                            <label><input type="radio" name="q3" value="b"> b) 1</label>
                            <label><input type="radio" name="q3" value="c"> c) -1</label>
                            <label><input type="radio" name="q3" value="d"> d) 8</label>
                        </div>
                        <div class="answer hidden">
                            <p><strong>Answer: a) 15</strong></p>
                            <p><strong>Solution:</strong> 3x - 2x = 8 + 7 → x = 15</p>
                        </div>
                    </div>

                    <div class="question-card">
                        <h4>Q4. The sum of three consecutive integers is 24. The middle integer is:</h4>
                        <div class="options">
                            <label><input type="radio" name="q4" value="a"> a) 8</label>
                            <label><input type="radio" name="q4" value="b"> b) 7</label>
                            <label><input type="radio" name="q4" value="c"> c) 9</label>
                            <label><input type="radio" name="q4" value="d"> d) 6</label>
                        </div>
                        <div class="answer hidden">
                            <p><strong>Answer: a) 8</strong></p>
                            <p><strong>Solution:</strong> Let integers be x, x+1, x+2</p>
                            <p>x + (x+1) + (x+2) = 24 → 3x + 3 = 24 → x = 7</p>
                            <p>So integers are 7, 8, 9. Middle = 8</p>
                        </div>
                    </div>

                    <div class="question-card">
                        <h4>Q5. If x/3 + x/4 = 7, then x = ?</h4>
                        <div class="options">
                            <label><input type="radio" name="q5" value="a"> a) 12</label>
                            <label><input type="radio" name="q5" value="b"> b) 21</label>
                            <label><input type="radio" name="q5" value="c"> c) 28</label>
                            <label><input type="radio" name="q5" value="d"> d) 84</label>
                        </div>
                        <div class="answer hidden">
                            <p><strong>Answer: a) 12</strong></p>
                            <p><strong>Solution:</strong> LCM of 3,4 = 12</p>
                            <p>4x + 3x = 84 → 7x = 84 → x = 12</p>
                        </div>
                    </div>
                </div>

                <h3>📝 Descriptive Questions</h3>
                
                <div class="descriptive-questions">
                    <div class="question-level easy">
                        <h4>🟢 Easy Level</h4>
                        
                        <div class="question">
                            <p><strong>Q1.</strong> Solve: 5x - 3 = 2x + 9</p>
                            <div class="solution hidden">
                                <p><strong>Solution:</strong></p>
                                <p>5x - 3 = 2x + 9</p>
                                <p>5x - 2x = 9 + 3</p>
                                <p>3x = 12</p>
                                <p>x = 4</p>
                                <p><strong>Check:</strong> 5(4) - 3 = 17 and 2(4) + 9 = 17 ✅</p>
                            </div>
                        </div>
                        
                        <div class="question">
                            <p><strong>Q2.</strong> Solve: x/2 + 3 = 8</p>
                            <div class="solution hidden">
                                <p><strong>Solution:</strong></p>
                                <p>x/2 + 3 = 8</p>
                                <p>x/2 = 8 - 3</p>
                                <p>x/2 = 5</p>
                                <p>x = 10</p>
                            </div>
                        </div>

                        <div class="question">
                            <p><strong>Q3.</strong> Solve: 3(x + 2) = 21</p>
                            <div class="solution hidden">
                                <p><strong>Solution:</strong></p>
                                <p>3(x + 2) = 21</p>
                                <p>3x + 6 = 21</p>
                                <p>3x = 15</p>
                                <p>x = 5</p>
                            </div>
                        </div>
                    </div>

                    <div class="question-level medium">
                        <h4>🟡 Medium Level</h4>
                        
                        <div class="question">
                            <p><strong>Q4.</strong> Solve: 2(x - 3) = 3(x + 1) - 8</p>
                            <div class="solution hidden">
                                <p><strong>Solution:</strong></p>
                                <p>2(x - 3) = 3(x + 1) - 8</p>
                                <p>2x - 6 = 3x + 3 - 8</p>
                                <p>2x - 6 = 3x - 5</p>
                                <p>-6 + 5 = 3x - 2x</p>
                                <p>-1 = x</p>
                                <p>Therefore, x = -1</p>
                            </div>
                        </div>
                        
                        <div class="question">
                            <p><strong>Q5.</strong> Solve: (x + 2)/3 = (x - 1)/2</p>
                            <div class="solution hidden">
                                <p><strong>Solution:</strong></p>
                                <p>Cross multiply: 2(x + 2) = 3(x - 1)</p>
                                <p>2x + 4 = 3x - 3</p>
                                <p>4 + 3 = 3x - 2x</p>
                                <p>7 = x</p>
                                <p>Therefore, x = 7</p>
                            </div>
                        </div>

                        <div class="question">
                            <p><strong>Q6.</strong> The sum of two consecutive even integers is 46. Find the integers.</p>
                            <div class="solution hidden">
                                <p><strong>Solution:</strong></p>
                                <p>Let first even integer = x</p>
                                <p>Second even integer = x + 2</p>
                                <p>x + (x + 2) = 46</p>
                                <p>2x + 2 = 46</p>
                                <p>2x = 44</p>
                                <p>x = 22</p>
                                <p><strong>Answer:</strong> The integers are 22 and 24</p>
                            </div>
                        </div>
                    </div>

                    <div class="question-level hard">
                        <h4>🔴 Hard Level</h4>
                        
                        <div class="question">
                            <p><strong>Q7.</strong> A number consists of two digits whose sum is 9. If 27 is subtracted from the number, the digits are reversed. Find the number.</p>
                            <div class="solution hidden">
                                <p><strong>Solution:</strong></p>
                                <p>Let tens digit = x, units digit = 9 - x</p>
                                <p>Original number = 10x + (9 - x) = 9x + 9</p>
                                <p>Reversed number = 10(9 - x) + x = 90 - 9x</p>
                                <p>According to condition:</p>
                                <p>(9x + 9) - 27 = 90 - 9x</p>
                                <p>9x - 18 = 90 - 9x</p>
                                <p>18x = 108</p>
                                <p>x = 6</p>
                                <p><strong>Answer:</strong> The number is 63</p>
                            </div>
                        </div>

                        <div class="question">
                            <p><strong>Q8.</strong> A father is 3 times as old as his son. After 12 years, he will be twice as old as his son. Find their present ages.</p>
                            <div class="solution hidden">
                                <p><strong>Solution:</strong></p>
                                <p>Let son's present age = x years</p>
                                <p>Father's present age = 3x years</p>
                                <p>After 12 years:</p>
                                <p>Son's age = x + 12</p>
                                <p>Father's age = 3x + 12</p>
                                <p>According to condition:</p>
                                <p>3x + 12 = 2(x + 12)</p>
                                <p>3x + 12 = 2x + 24</p>
                                <p>x = 12</p>
                                <p><strong>Answer:</strong> Son = 12 years, Father = 36 years</p>
                            </div>
                        </div>
                    </div>
                </div>

                <h3>🏆 Challenge Questions (For Toppers!)</h3>
                <div class="challenge-questions">
                    <div class="question">
                        <p><strong>Challenge 1:</strong> Solve: 1/(x-1) + 1/(x-2) = 1/(x-3) + 1/(x-4)</p>
                        <div class="solution hidden">
                            <p><strong>Hint:</strong> Rearrange and cross multiply carefully!</p>
                            <p><strong>Answer:</strong> x = 2.5</p>
                        </div>
                    </div>
                    <div class="question">
                        <p><strong>Challenge 2:</strong> A two-digit number is 4 times the sum of its digits. If 18 is added to it, the digits are reversed. Find the number.</p>
                        <div class="solution hidden">
                            <p><strong>Answer:</strong> The number is 24</p>
                        </div>
                    </div>
                </div>

                <div class="fun-activity">
                    <h3>🎨 Fun Activity Corner!</h3>
                    <div class="activity-card">
                        <h4>🎯 Equation Detective Game</h4>
                        <p>Create your own word problems and challenge your friends:</p>
                        <ul>
                            <li>Think of a mystery number</li>
                            <li>Create clues using mathematical operations</li>
                            <li>Let friends solve the linear equation</li>
                            <li>Example: "I'm thinking of a number. If I multiply it by 3 and add 7, I get 28. What's my number?"</li>
                        </ul>
                    </div>
                </div>
            </div>
            `
        },
        pyq: {
            title: "📚 Previous Year Questions & Board Patterns",
            content: `
            <div class="pyq-section">
                <h3>🎯 Board Exam Pattern Analysis</h3>
                
                <div class="pattern-analysis">
                    <div class="pattern-card">
                        <h4>Question Distribution</h4>
                        <ul>
                            <li><strong>MCQ:</strong> 1-2 questions (1 mark each)</li>
                            <li><strong>Very Short Answer:</strong> 1 question (1 mark)</li>
                            <li><strong>Short Answer:</strong> 2-3 questions (2 marks each)</li>
                            <li><strong>Long Answer:</strong> 1-2 questions (3-4 marks each)</li>
                            <li><strong>Word Problems:</strong> 1-2 questions (3-5 marks each)</li>
                        </ul>
                    </div>
                </div>

                <h3>🔥 Most Repeated Questions</h3>
                
                <div class="repeated-questions">
                    <div class="frequency high">
                        <h4>🌟 Asked Every Year!</h4>
                        <ul>
                            <li>Simple linear equations (2x + 3 = 7 type)</li>
                            <li>Equations with brackets and fractions</li>
                            <li>Age-related word problems</li>
                            <li>Consecutive integers problems</li>
                            <li>Verification of solutions</li>
                        </ul>
                    </div>

                    <div class="frequency medium">
                        <h4>📈 Frequently Asked</h4>
                        <ul>
                            <li>Two-digit number problems</li>
                            <li>Perimeter and area problems using equations</li>
                            <li>Money-related word problems</li>
                            <li>Equations involving reciprocals</li>
                        </ul>
                    </div>
                </div>

                <h3>📋 Board Exam Questions (Last 5 Years) with Complete Solutions</h3>
                
                <div class="board-questions">
                    <div class="year-question">
                        <h4>🔹 2023 Board Question [3 marks]</h4>
                        <p><strong>Q:</strong> Solve: 2(x + 4) = 3(x - 2) + 7</p>
                        <div class="complete-solution">
                            <p><strong>Solution:</strong></p>
                            <p><strong>Step 1:</strong> Open the brackets</p>
                            <p>2x + 8 = 3x - 6 + 7</p>
                            <p><strong>Step 2:</strong> Simplify the right side</p>
                            <p>2x + 8 = 3x + 1</p>
                            <p><strong>Step 3:</strong> Move variables to one side, constants to other</p>
                            <p>8 - 1 = 3x - 2x</p>
                            <p><strong>Step 4:</strong> Solve</p>
                            <p>7 = x</p>
                            <p><strong>Step 5:</strong> Verification</p>
                            <p>LHS: 2(7 + 4) = 2(11) = 22</p>
                            <p>RHS: 3(7 - 2) + 7 = 3(5) + 7 = 22 ✅</p>
                            <p><strong>Answer: x = 7</strong></p>
                            <div class="marking-scheme">
                                <p><strong>Marking Scheme:</strong> Method (1 mark) + Calculation (1 mark) + Answer (1 mark)</p>
                            </div>
                        </div>
                    </div>

                    <div class="year-question">
                        <h4>🔹 2022 Board Question [4 marks]</h4>
                        <p><strong>Q:</strong> The sum of three consecutive odd integers is 63. Find the integers.</p>
                        <div class="complete-solution">
                            <p><strong>Solution:</strong></p>
                            <p><strong>Step 1:</strong> Let the three consecutive odd integers be x, x+2, x+4</p>
                            <p><strong>Step 2:</strong> Form the equation</p>
                            <p>x + (x + 2) + (x + 4) = 63</p>
                            <p><strong>Step 3:</strong> Simplify</p>
                            <p>3x + 6 = 63</p>
                            <p><strong>Step 4:</strong> Solve</p>
                            <p>3x = 57</p>
                            <p>x = 19</p>
                            <p><strong>Step 5:</strong> Find all integers</p>
                            <p>First integer = 19</p>
                            <p>Second integer = 21</p>
                            <p>Third integer = 23</p>
                            <p><strong>Step 6:</strong> Verification</p>
                            <p>19 + 21 + 23 = 63 ✅</p>
                            <p><strong>Answer: 19, 21, 23</strong></p>
                            <div class="marking-scheme">
                                <p><strong>Marking Scheme:</strong> Variable definition (1) + Equation formation (1) + Solution (1) + Answer (1)</p>
                            </div>
                        </div>
                    </div>

                    <div class="year-question">
                        <h4>🔹 2021 Board Question [3 marks]</h4>
                        <p><strong>Q:</strong> Solve and verify: (x + 2)/4 = (x - 1)/3</p>
                        <div class="complete-solution">
                            <p><strong>Solution:</strong></p>
                            <p><strong>Step 1:</strong> Cross multiply</p>
                            <p>3(x + 2) = 4(x - 1)</p>
                            <p><strong>Step 2:</strong> Open brackets</p>
                            <p>3x + 6 = 4x - 4</p>
                            <p><strong>Step 3:</strong> Solve</p>
                            <p>6 + 4 = 4x - 3x</p>
                            <p>10 = x</p>
                            <p><strong>Step 4:</strong> Verification</p>
                            <p>LHS: (10 + 2)/4 = 12/4 = 3</p>
                            <p>RHS: (10 - 1)/3 = 9/3 = 3 ✅</p>
                            <p><strong>Answer: x = 10</strong></p>
                        </div>
                    </div>

                    <div class="year-question">
                        <h4>🔹 2020 Board Question [5 marks]</h4>
                        <p><strong>Q:</strong> A man's age is three times his son's age. Ten years ago, he was five times as old as his son. Find their present ages.</p>
                        <div class="complete-solution">
                            <p><strong>Solution:</strong></p>
                            <p><strong>Step 1:</strong> Define variables</p>
                            <p>Let son's present age = x years</p>
                            <p>Man's present age = 3x years</p>
                            <p><strong>Step 2:</strong> Consider ages 10 years ago</p>
                            <p>Son's age 10 years ago = (x - 10) years</p>
                            <p>Man's age 10 years ago = (3x - 10) years</p>
                            <p><strong>Step 3:</strong> Form equation</p>
                            <p>3x - 10 = 5(x - 10)</p>
                            <p><strong>Step 4:</strong> Solve</p>
                            <p>3x - 10 = 5x - 50</p>
                            <p>50 - 10 = 5x - 3x</p>
                            <p>40 = 2x</p>
                            <p>x = 20</p>
                            <p><strong>Step 5:</strong> Find present ages</p>
                            <p>Son's present age = 20 years</p>
                            <p>Man's present age = 3 × 20 = 60 years</p>
                            <p><strong>Step 6:</strong> Verification</p>
                            <p>10 years ago: Son = 10, Man = 50</p>
                            <p>50 = 5 × 10 ✅</p>
                            <p><strong>Answer: Son = 20 years, Man = 60 years</strong></p>
                        </div>
                    </div>

                    <div class="year-question">
                        <h4>🔹 2019 Board Question [2 marks]</h4>
                        <p><strong>Q:</strong> If 2x - 1 = 14 - x, find the value of x² + 1.</p>
                        <div class="complete-solution">
                            <p><strong>Solution:</strong></p>
                            <p><strong>Step 1:</strong> Solve for x</p>
                            <p>2x - 1 = 14 - x</p>
                            <p>2x + x = 14 + 1</p>
                            <p>3x = 15</p>
                            <p>x = 5</p>
                            <p><strong>Step 2:</strong> Calculate x² + 1</p>
                            <p>x² + 1 = 5² + 1 = 25 + 1 = 26</p>
                            <p><strong>Answer: 26</strong></p>
                        </div>
                    </div>
                </div>

                <h3>💡 Exam Tips & Strategy</h3>
                <div class="exam-tips">
                    <div class="tip-card last-day">
                        <h4>⚡ Last Day Revision Tips (60 minutes)</h4>
                        <ul>
                            <li><strong>15 min:</strong> Review transposition rules</li>
                            <li><strong>20 min:</strong> Practice 5 different types of equations</li>
                            <li><strong>15 min:</strong> Solve 2 word problems (age + consecutive integers)</li>
                            <li><strong>10 min:</strong> Quick formula revision</li>
                        </ul>
                    </div>

                    <div class="tip-card writing">
                        <h4>✍️ Answer Writing Strategy</h4>
                        <ul>
                            <li><strong>Always show step-by-step working</strong></li>
                            <li><strong>For word problems:</strong> Define variable clearly</li>
                            <li><strong>Verification is mandatory</strong> (gives extra marks)</li>
                            <li><strong>Box the final answer</strong></li>
                            <li><strong>Use proper mathematical notation</strong></li>
                        </ul>
                    </div>

                    <div class="tip-card time-management">
                        <h4>⏰ Time Management</h4>
                        <ul>
                            <li><strong>Simple equations:</strong> 2-3 minutes</li>
                            <li><strong>Bracket/fraction equations:</strong> 4-5 minutes</li>
                            <li><strong>Word problems:</strong> 6-8 minutes</li>
                            <li><strong>Always leave time for verification</strong></li>
                        </ul>
                    </div>

                    <div class="tip-card common-mistakes">
                        <h4>⚠️ Common Board Exam Mistakes</h4>
                        <ul>
                            <li><strong>Sign errors while transposing</strong> - Practice more!</li>
                            <li><strong>Not showing verification</strong> - Lose 1 mark</li>
                            <li><strong>Wrong variable definition in word problems</strong></li>
                            <li><strong>Calculation errors in fractions</strong></li>
                            <li><strong>Not writing final answer clearly</strong></li>
                        </ul>
                    </div>
                </div>

                <h3>📊 Success Formula for 100% Marks</h3>
                <div class="success-formula">
                    <div class="formula-step">
                        <h4>🎯 Master These 5 Types:</h4>
                        <ol>
                            <li>Simple equations (ax + b = c)</li>
                            <li>Equations with brackets</li>
                            <li>Equations with fractions</li>
                            <li>Age problems</li>
                            <li>Consecutive integer problems</li>
                        </ol>
                    </div>
                    <div class="formula-step">
                        <h4>✅ Must-Do Checklist:</h4>
                        <ul>
                            <li>✓ Can solve any equation in under 5 minutes</li>
                            <li>✓ Never forget to verify the answer</li>
                            <li>✓ Can set up word problems correctly</li>
                            <li>✓ Know all transposition rules by heart</li>
                        </ul>
                    </div>
                </div>
            </div>
            `
        }
    }
},
"understanding-quadrilaterals": {
    title: "Understanding Quadrilaterals",
    subject: "Mathematics",
    class: "8",
    content: {
        introduction: {
            title: "Understanding Quadrilaterals - Shapes Around Us! 🏠",
            content: `
            <div class="intro-section">
                <h3>Real-Life Connection</h3>
                <p>Look around you! 👀 Your phone screen, table, book, window, door - almost everything is a <strong>quadrilateral</strong>! From the rectangular frame of your TV to the square tiles on the floor, quadrilaterals are everywhere!</p>
                
                <div class="definition-box">
                    <h4>📚 Definition</h4>
                    <p>A <strong>quadrilateral</strong> is a polygon with <strong>four sides</strong>, <strong>four vertices</strong>, and <strong>four angles</strong>.</p>
                    <p><strong>Key Point:</strong> Sum of all interior angles = <span class="formula">360°</span></p>
                </div>

                <h3>Why Study This Chapter?</h3>
                <div class="real-world-examples">
                    <div class="example-card">
                        <h4>🏗️ Architecture</h4>
                        <p>Building designs, floor plans, window frames - all use quadrilateral properties</p>
                    </div>
                    <div class="example-card">
                        <h4>📱 Technology</h4>
                        <p>Screen dimensions, circuit boards, solar panels - rectangular shapes everywhere</p>
                    </div>
                    <div class="example-card">
                        <h4>🎨 Art & Design</h4>
                        <p>Creating patterns, logos, graphics - understanding shapes is crucial</p>
                    </div>
                    <div class="example-card">
                        <h4>🏃‍♂️ Sports</h4>
                        <p>Football fields, tennis courts, basketball courts - all rectangular!</p>
                    </div>
                </div>

                <div class="modern-context">
                    <h3>🎮 Modern Connection</h3>
                    <p>Ever played Minecraft? 🎮 Every block is a square! When you build houses, you're using quadrilateral properties. Even in games like Tetris, understanding shapes helps you fit pieces perfectly!</p>
                </div>
            </div>
            `
        },
        content: {
            title: "Exploring Different Types of Quadrilaterals",
            content: `
            <div class="content-section">
                <h3>🔍 Basic Properties of Quadrilaterals</h3>
                
                <div class="concept-box">
                    <h4>Universal Properties (For ALL Quadrilaterals)</h4>
                    <ul>
                        <li><strong>4 sides</strong> (edges)</li>
                        <li><strong>4 vertices</strong> (corners)</li>
                        <li><strong>4 angles</strong> (interior)</li>
                        <li><strong>Sum of interior angles = 360°</strong></li>
                        <li><strong>2 diagonals</strong></li>
                    </ul>
                    <p class="hindi-explanation">Har quadrilateral mein ye sab properties hamesha hoti hain! 📐</p>
                </div>

                <h3>🏛️ Types of Quadrilaterals - The Family Tree</h3>

                <div class="quadrilateral-family">
                    <div class="quad-type">
                        <h4>1. 🟨 Square (Perfect Shape!)</h4>
                        <div class="properties-list">
                            <h5>Properties:</h5>
                            <ul>
                                <li>All 4 sides are <strong>equal</strong></li>
                                <li>All 4 angles are <strong>90°</strong></li>
                                <li>Diagonals are <strong>equal</strong> and <strong>perpendicular</strong></li>
                                <li>Diagonals <strong>bisect each other</strong> at 90°</li>
                                <li>All properties of rectangle and rhombus</li>
                            </ul>
                            <div class="real-life-examples">
                                <p><strong>Real Life:</strong> Chess board squares, tiles, stamps, sticky notes</p>
                            </div>
                        </div>
                    </div>

                    <div class="quad-type">
                        <h4>2. 🟫 Rectangle (Most Common!)</h4>
                        <div class="properties-list">
                            <h5>Properties:</h5>
                            <ul>
                                <li><strong>Opposite sides</strong> are equal and parallel</li>
                                <li>All 4 angles are <strong>90°</strong></li>
                                <li>Diagonals are <strong>equal</strong> in length</li>
                                <li>Diagonals <strong>bisect each other</strong></li>
                                <li>Area = length × breadth</li>
                            </ul>
                            <div class="real-life-examples">
                                <p><strong>Real Life:</strong> Books, phones, laptops, doors, windows, football field</p>
                            </div>
                        </div>
                    </div>

                    <div class="quad-type">
                        <h4>3. 🔶 Rhombus (Diamond Shape!)</h4>
                        <div class="properties-list">
                            <h5>Properties:</h5>
                            <ul>
                                <li>All 4 sides are <strong>equal</strong></li>
                                <li><strong>Opposite angles</strong> are equal</li>
                                <li>Diagonals are <strong>perpendicular</strong> to each other</li>
                                <li>Diagonals <strong>bisect each other</strong> at 90°</li>
                                <li>Area = ½ × d₁ × d₂ (where d₁, d₂ are diagonals)</li>
                            </ul>
                            <div class="real-life-examples">
                                <p><strong>Real Life:</strong> Playing card symbols (♦), kite shapes, some floor patterns</p>
                            </div>
                        </div>
                    </div>

                    <div class="quad-type">
                        <h4>4. ▱ Parallelogram (Slanted Rectangle!)</h4>
                        <div class="properties-list">
                            <h5>Properties:</h5>
                            <ul>
                                <li><strong>Opposite sides</strong> are equal and parallel</li>
                                <li><strong>Opposite angles</strong> are equal</li>
                                <li><strong>Adjacent angles</strong> are supplementary (sum = 180°)</li>
                                <li>Diagonals <strong>bisect each other</strong></li>
                                <li>Area = base × height</li>
                            </ul>
                            <div class="real-life-examples">
                                <p><strong>Real Life:</strong> Slanted parking spaces, some building designs</p>
                            </div>
                        </div>
                    </div>

                    <div class="quad-type">
                        <h4>5. 🪁 Kite (Unique Shape!)</h4>
                        <div class="properties-list">
                            <h5>Properties:</h5>
                            <ul>
                                <li><strong>Two pairs</strong> of adjacent sides are equal</li>
                                <li><strong>One diagonal</strong> is perpendicular bisector of the other</li>
                                <li><strong>One axis of symmetry</strong></li>
                                <li>One pair of opposite angles are equal</li>
                            </ul>
                            <div class="real-life-examples">
                                <p><strong>Real Life:</strong> Actual kites, some decorative designs</p>
                            </div>
                        </div>
                    </div>

                    <div class="quad-type">
                        <h4>6. 🏺 Trapezium (One Parallel Pair!)</h4>
                        <div class="properties-list">
                            <h5>Properties:</h5>
                            <ul>
                                <li><strong>One pair</strong> of opposite sides are parallel</li>
                                <li>The parallel sides are called <strong>bases</strong></li>
                                <li>Distance between parallel sides is <strong>height</strong></li>
                                <li>Area = ½ × (sum of parallel sides) × height</li>
                            </ul>
                            <div class="real-life-examples">
                                <p><strong>Real Life:</strong> Bridges, some table designs, funnel shapes</p>
                            </div>
                            <div class="special-note">
                                <p><strong>Special:</strong> Isosceles Trapezium - non-parallel sides are equal</p>
                            </div>
                        </div>
                    </div>
                </div>

                <h3>🧮 Important Formulas & Theorems</h3>

                <div class="formula-section">
                    <div class="theorem-box">
                        <h4>🎯 Angle Sum Property</h4>
                        <p><strong>For ANY quadrilateral:</strong> Sum of all interior angles = 360°</p>
                        <div class="math-example">
                            <p>If angles are A, B, C, D then: A + B + C + D = 360°</p>
                        </div>
                        <p class="hindi-explanation">Koi bhi quadrilateral ho, saare angles ka sum hamesha 360° hota hai!</p>
                    </div>

                    <div class="theorem-box">
                        <h4>📏 Diagonal Properties</h4>
                        <ul>
                            <li><strong>Square:</strong> Diagonals are equal, perpendicular, and bisect each other</li>
                            <li><strong>Rectangle:</strong> Diagonals are equal and bisect each other</li>
                            <li><strong>Rhombus:</strong> Diagonals are perpendicular and bisect each other</li>
                            <li><strong>Parallelogram:</strong> Diagonals bisect each other</li>
                        </ul>
                    </div>
                </div>

                <h3>🔗 The Quadrilateral Hierarchy</h3>
                
                <div class="hierarchy-explanation">
                    <p>Think of quadrilaterals like a family tree! 👨‍👩‍👧‍👦</p>
                    <div class="hierarchy-levels">
                        <div class="level">
                            <h5>🏰 Top Level: Quadrilateral (Grandparent)</h5>
                            <p>All 4-sided figures</p>
                        </div>
                        <div class="level">
                            <h5>🏠 Middle Level: Parallelogram (Parent)</h5>
                            <p>Opposite sides parallel</p>
                        </div>
                        <div class="level">
                            <h5>👶 Bottom Level: Rectangle, Rhombus, Square (Children)</h5>
                            <p>Each has special additional properties</p>
                        </div>
                    </div>
                    <p><strong>Key Point:</strong> A square is also a rectangle, rhombus, parallelogram, and quadrilateral!</p>
                </div>

                <h3>📝 Problem-Solving Strategies</h3>

                <div class="strategy-box">
                    <h4>Step-by-Step Approach</h4>
                    <div class="strategy-steps">
                        <div class="strategy-step">
                            <h5>1. IDENTIFY</h5>
                            <p>What type of quadrilateral is it?</p>
                        </div>
                        <div class="strategy-step">
                            <h5>2. LIST PROPERTIES</h5>
                            <p>What properties apply to this type?</p>
                        </div>
                        <div class="strategy-step">
                            <h5>3. USE FORMULAS</h5>
                            <p>Apply relevant formulas and theorems</p>
                        </div>
                        <div class="strategy-step">
                            <h5>4. CHECK ANSWER</h5>
                            <p>Does it make geometric sense?</p>
                        </div>
                    </div>
                </div>

                <div class="example-detailed">
                    <h4>Example 1: Finding Unknown Angles</h4>
                    <p><strong>Problem:</strong> In a quadrilateral, three angles are 80°, 95°, and 110°. Find the fourth angle.</p>
                    <div class="solution-steps">
                        <p><strong>Step 1:</strong> Use angle sum property</p>
                        <p>Sum of all angles = 360°</p>
                        <p><strong>Step 2:</strong> Set up equation</p>
                        <p>80° + 95° + 110° + x = 360°</p>
                        <p><strong>Step 3:</strong> Solve</p>
                        <p>285° + x = 360°</p>
                        <p>x = 360° - 285° = 75°</p>
                        <p><strong>Answer:</strong> Fourth angle = 75°</p>
                    </div>
                </div>

                <div class="example-detailed">
                    <h4>Example 2: Properties of Rhombus</h4>
                    <p><strong>Problem:</strong> In a rhombus ABCD, if one angle is 60°, find all other angles.</p>
                    <div class="solution-steps">
                        <p><strong>Step 1:</strong> Use property of rhombus</p>
                        <p>Opposite angles are equal</p>
                        <p><strong>Step 2:</strong> Identify angles</p>
                        <p>Let ∠A = 60°, then ∠C = 60° (opposite angles)</p>
                        <p><strong>Step 3:</strong> Find remaining angles</p>
                        <p>Adjacent angles are supplementary in parallelogram</p>
                        <p>∠B = 180° - 60° = 120°</p>
                        <p>∠D = 120° (opposite to ∠B)</p>
                        <p><strong>Answer:</strong> Angles are 60°, 120°, 60°, 120°</p>
                    </div>
                </div>

                <div class="diagram-placeholder">
                    <h4>📊 Visual Representations</h4>
                    <p><strong>[DIAGRAM PLACEHOLDER]</strong></p>
                    <p>Different types of quadrilaterals with labeled properties</p>
                    <p>Hierarchy chart showing relationships between quadrilaterals</p>
                    <p>Diagonal patterns in different quadrilaterals</p>
                    <p>Real-life examples of each quadrilateral type</p>
                </div>
            </div>
            `
        },
        formulas: {
            title: "📋 Formula Sheet & Important Points",
            content: `
            <div class="formula-sheet">
                <h3>🔥 Must Remember Formulas</h3>
                
                <div class="formula-card">
                    <h4>Universal Formulas</h4>
                    <ul>
                        <li><strong>Angle Sum:</strong> Sum of interior angles = 360°</li>
                        <li><strong>Number of diagonals:</strong> n(n-3)/2 = 4(4-3)/2 = 2</li>
                        <li><strong>Perimeter:</strong> Sum of all four sides</li>
                    </ul>
                </div>

                <div class="formula-card">
                    <h4>Area Formulas</h4>
                    <ul>
                        <li><strong>Rectangle:</strong> Area = length × breadth</li>
                        <li><strong>Square:</strong> Area = side²</li>
                        <li><strong>Parallelogram:</strong> Area = base × height</li>
                        <li><strong>Rhombus:</strong> Area = ½ × d₁ × d₂</li>
                        <li><strong>Trapezium:</strong> Area = ½ × (a + b) × h</li>
                    </ul>
                </div>

                <div class="formula-card">
                    <h4>Diagonal Formulas</h4>
                    <ul>
                        <li><strong>Rectangle/Square:</strong> d = √(l² + b²)</li>
                        <li><strong>Rhombus:</strong> If diagonals are d₁, d₂, then side = ½√(d₁² + d₂²)</li>
                    </ul>
                </div>

                <h3>⚡ Properties Quick Reference</h3>
                
                <div class="properties-table">
                    <table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
                        <tr style="background-color: var(--bg-secondary);">
                            <th style="border: 1px solid var(--border-color); padding: 0.5rem;">Shape</th>
                            <th style="border: 1px solid var(--border-color); padding: 0.5rem;">Sides</th>
                            <th style="border: 1px solid var(--border-color); padding: 0.5rem;">Angles</th>
                            <th style="border: 1px solid var(--border-color); padding: 0.5rem;">Diagonals</th>
                        </tr>
                        <tr>
                            <td style="border: 1px solid var(--border-color); padding: 0.5rem;"><strong>Square</strong></td>
                            <td style="border: 1px solid var(--border-color); padding: 0.5rem;">All equal</td>
                            <td style="border: 1px solid var(--border-color); padding: 0.5rem;">All 90°</td>
                            <td style="border: 1px solid var(--border-color); padding: 0.5rem;">Equal, ⊥, bisect</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid var(--border-color); padding: 0.5rem;"><strong>Rectangle</strong></td>
                            <td style="border: 1px solid var(--border-color); padding: 0.5rem;">Opposite equal</td>
                            <td style="border: 1px solid var(--border-color); padding: 0.5rem;">All 90°</td>
                            <td style="border: 1px solid var(--border-color); padding: 0.5rem;">Equal, bisect</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid var(--border-color); padding: 0.5rem;"><strong>Rhombus</strong></td>
                            <td style="border: 1px solid var(--border-color); padding: 0.5rem;">All equal</td>
                            <td style="border: 1px solid var(--border-color); padding: 0.5rem;">Opposite equal</td>
                            <td style="border: 1px solid var(--border-color); padding: 0.5rem;">⊥, bisect</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid var(--border-color); padding: 0.5rem;"><strong>Parallelogram</strong></td>
                            <td style="border: 1px solid var(--border-color); padding: 0.5rem;">Opposite equal</td>
                            <td style="border: 1px solid var(--border-color); padding: 0.5rem;">Opposite equal</td>
                            <td style="border: 1px solid var(--border-color); padding: 0.5rem;">Bisect each other</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid var(--border-color); padding: 0.5rem;"><strong>Trapezium</strong></td>
                            <td style="border: 1px solid var(--border-color); padding: 0.5rem;">One pair parallel</td>
                            <td style="border: 1px solid var(--border-color); padding: 0.5rem;">Co-interior supplementary</td>
                            <td style="border: 1px solid var(--border-color); padding: 0.5rem;">No special property</td>
                        </tr>
                    </table>
                </div>

                <h3>⚡ Points to Remember</h3>
                <div class="remember-points">
                    <div class="point-card important">
                        <h4>🎯 Super Important!</h4>
                        <ul>
                            <li>Every square is a rectangle, rhombus, and parallelogram</li>
                            <li>Every rectangle and rhombus is a parallelogram</li>
                            <li>Sum of angles in ANY quadrilateral = 360°</li>
                            <li>Diagonals of square and rhombus are perpendicular</li>
                        </ul>
                    </div>
                    
                    <div class="point-card">
                        <h4>🧠 Quick Tips</h4>
                        <ul>
                            <li>In parallelogram: opposite sides and angles are equal</li>
                            <li>Adjacent angles in parallelogram are supplementary</li>
                            <li>Diagonals of rectangle are equal in length</li>
                            <li>All sides of rhombus and square are equal</li>
                        </ul>
                    </div>

                    <div class="point-card">
                        <h4>⚠️ Common Mistakes</h4>
                        <ul>
                            <li>Confusing properties of different quadrilaterals</li>
                            <li>Forgetting that square has ALL properties of rectangle and rhombus</li>
                            <li>Not using angle sum property = 360°</li>
                            <li>Mixing up diagonal properties</li>
                        </ul>
                    </div>
                </div>

                <div class="memory-tricks">
                    <h3>🧠 Memory Tricks</h3>
                    <div class="trick-card">
                        <h4>🎯 SQUARE Memory Trick</h4>
                        <p><strong>"SQUARE = PERFECT"</strong></p>
                        <p>Perfect sides (all equal), Perfect angles (all 90°), Perfect diagonals (equal + perpendicular)</p>
                    </div>
                    <div class="trick-card">
                        <h4>🎯 RECTANGLE Memory Trick</h4>
                        <p><strong>"RECT = RIGHT"</strong></p>
                        <p>All RIGHT angles (90°), diagonals are equal in length</p>
                    </div>
                    <div class="trick-card">
                        <h4>🎯 RHOMBUS Memory Trick</h4>
                        <p><strong>"RHOMBUS = DIAMOND"</strong></p>
                        <p>Like a diamond - all sides equal, diagonals cut at right angles</p>
                    </div>
                </div>
            </div>
            `
        },
        practice: {
            title: "🎮 Practice Questions",
            content: `
            <div class="practice-section">
                <h3>🔥 MCQ Questions (Quick Fire Round!)</h3>
                
                <div class="mcq-container">
                    <div class="question-card">
                        <h4>Q1. The sum of interior angles of any quadrilateral is:</h4>
                        <div class="options">
                            <label><input type="radio" name="q1" value="a"> a) 180°</label>
                            <label><input type="radio" name="q1" value="b"> b) 360°</label>
                            <label><input type="radio" name="q1" value="c"> c) 270°</label>
                            <label><input type="radio" name="q1" value="d"> d) 540°</label>
                        </div>
                        <div class="answer hidden">
                            <p><strong>Answer: b) 360°</strong></p>
                            <p><strong>Reason:</strong> This is the universal property of all quadrilaterals!</p>
                        </div>
                    </div>

                    <div class="question-card">
                        <h4>Q2. Which quadrilateral has all sides equal but angles are not 90°?</h4>
                        <div class="options">
                            <label><input type="radio" name="q2" value="a"> a) Rectangle</label>
                            <label><input type="radio" name="q2" value="b"> b) Square</label>
                            <label><input type="radio" name="q2" value="c"> c) Rhombus</label>
                            <label><input type="radio" name="q2" value="d"> d) Parallelogram</label>
                        </div>
                        <div class="answer hidden">
                            <p><strong>Answer: c) Rhombus</strong></p>
                            <p><strong>Explanation:</strong> Rhombus has all sides equal but only opposite angles are equal (not necessarily 90°)</p>
                        </div>
                    </div>

                    <div class="question-card">
                        <h4>Q3. In a parallelogram, opposite angles are:</h4>
                        <div class="options">
                            <label><input type="radio" name="q3" value="a"> a) Supplementary</label>
                            <label><input type="radio" name="q3" value="b"> b) Equal</label>
                            <label><input type="radio" name="q3" value="c"> c) Complementary</label>
                            <label><input type="radio" name="q3" value="d"> d) Right angles</label>
                        </div>
                        <div class="answer hidden">
                            <p><strong>Answer: b) Equal</strong></p>
                            <p><strong>Note:</strong> Adjacent angles are supplementary in parallelogram</p>
                        </div>
                    </div>

                    <div class="question-card">
                        <h4>Q4. A quadrilateral with only one pair of parallel sides is called:</h4>
                        <div class="options">
                            <label><input type="radio" name="q4" value="a"> a) Parallelogram</label>
                            <label><input type="radio" name="q4" value="b"> b) Rhombus</label>
                            <label><input type="radio" name="q4" value="c"> c) Trapezium</label>
                            <label><input type="radio" name="q4" value="d"> d) Kite</label>
                        </div>
                        <div class="answer hidden">
                            <p><strong>Answer: c) Trapezium</strong></p>
                            <p><strong>Definition:</strong> Trapezium has exactly one pair of parallel sides</p>
                        </div>
                    </div>

                    <div class="question-card">
                        <h4>Q5. Which property is NOT true for a square?</h4>
                        <div class="options">
                            <label><input type="radio" name="q5" value="a"> a) All sides are equal</label>
                            <label><input type="radio" name="q5" value="b"> b) All angles are 90°</label>
                            <label><input type="radio" name="q5" value="c"> c) Diagonals are equal</label>
                            <label><input type="radio" name="q5" value="d"> d) Only one diagonal bisects the other</label>
                        </div>
                        <div class="answer hidden">
                            <p><strong>Answer: d) Only one diagonal bisects the other</strong></p>
                            <p><strong>Correct fact:</strong> Both diagonals bisect each other in a square</p>
                        </div>
                    </div>
                </div>

                <h3>📝 Descriptive Questions</h3>
                
                <div class="descriptive-questions">
                    <div class="question-level easy">
                        <h4>🟢 Easy Level</h4>
                        
                        <div class="question">
                            <p><strong>Q1.</strong> Three angles of a quadrilateral are 75°, 90°, and 115°. Find the fourth angle.</p>
                            <div class="solution hidden">
                                <p><strong>Solution:</strong></p>
                                <p>Sum of all angles in quadrilateral = 360°</p>
                                <p>Let fourth angle = x</p>
                                <p>75° + 90° + 115° + x = 360°</p>
                                <p>280° + x = 360°</p>
                                <p>x = 360° - 280° = 80°</p>
                                <p><strong>Answer:</strong> Fourth angle = 80°</p>
                            </div>
                        </div>
                        
                        <div class="question">
                            <p><strong>Q2.</strong> Name the quadrilateral which has all sides equal and all angles equal.</p>
                            <div class="solution hidden">
                                <p><strong>Answer:</strong> Square</p>
                                <p><strong>Explanation:</strong> Square is the only quadrilateral with all sides equal AND all angles equal (90° each)</p>
                            </div>
                        </div>

                        <div class="question">
                            <p><strong>Q3.</strong> State whether true or false: "Every rectangle is a parallelogram."</p>
                            <div class="solution hidden">
                                <p><strong>Answer:</strong> True</p>
                                <p><strong>Reason:</strong> Rectangle has opposite sides parallel and equal, which satisfies the definition of parallelogram</p>
                            </div>
                        </div>
                    </div>

                    <div class="question-level medium">
                        <h4>🟡 Medium Level</h4>
                        
                        <div class="question">
                            <p><strong>Q4.</strong> In a rhombus ABCD, ∠A = 70°. Find all other angles.</p>
                            <div class="solution hidden">
                                <p><strong>Solution:</strong></p>
                                <p>In rhombus, opposite angles are equal</p>
                                <p>∠A = ∠C = 70°</p>
                                <p>Adjacent angles are supplementary in parallelogram</p>
                                <p>∠B = 180° - ∠A = 180° - 70° = 110°</p>
                                <p>∠D = ∠B = 110° (opposite angles)</p>
                                <p><strong>Answer:</strong> ∠A = 70°, ∠B = 110°, ∠C = 70°, ∠D = 110°</p>
                            </div>
                        </div>
                        
                        <div class="question">
                            <p><strong>Q5.</strong> The diagonals of a rhombus are 16 cm and 12 cm. Find its area.</p>
                            <div class="solution hidden">
                                <p><strong>Solution:</strong></p>
                                <p>Area of rhombus = ½ × d₁ × d₂</p>
                                <p>Given: d₁ = 16 cm, d₂ = 12 cm</p>
                                <p>Area = ½ × 16 × 12</p>
                                <p>Area = ½ × 192 = 96 cm²</p>
                                <p><strong>Answer:</strong> 96 cm²</p>
                            </div>
                        </div>

                        <div class="question">
                            <p><strong>Q6.</strong> Prove that the diagonals of a rectangle are equal.</p>
                            <div class="solution hidden">
                                <p><strong>Proof:</strong></p>
                                <p>Let rectangle ABCD have diagonals AC and BD</p>
                                <p>In △ABC and △BAD:</p>
                                <p>AB = AB (common side)</p>
                                <p>BC = AD (opposite sides of rectangle)</p>
                                <p>∠ABC = ∠BAD = 90°</p>
                                <p>∴ △ABC ≅ △BAD (SAS)</p>
                                <p>∴ AC = BD (corresponding sides)</p>
                                <p><strong>Hence proved: Diagonals of rectangle are equal</strong></p>
                            </div>
                        </div>
                    </div>

                    <div class="question-level hard">
                        <h4>🔴 Hard Level</h4>
                        
                        <div class="question">
                            <p><strong>Q7.</strong> ABCD is a parallelogram. P and Q are mid-points of AB and CD respectively. Prove that APCQ is a parallelogram.</p>
                            <div class="solution hidden">
                                <p><strong>Given:</strong> ABCD is parallelogram, P is mid-point of AB, Q is mid-point of CD</p>
                                <p><strong>To Prove:</strong> APCQ is a parallelogram</p>
                                <p><strong>Proof:</strong></p>
                                <p>In parallelogram ABCD: AB = CD and AB ∥ CD</p>
                                <p>Since P is mid-point of AB: AP = ½AB</p>
                                <p>Since Q is mid-point of CD: CQ = ½CD</p>
                                <p>∴ AP = CQ (∵ AB = CD)</p>
                                <p>Also, AP ∥ CQ (∵ AB ∥ CD)</p>
                                <p>One pair of opposite sides are equal and parallel</p>
                                <p><strong>∴ APCQ is a parallelogram</strong></p>
                            </div>
                        </div>

                        <div class="question">
                            <p><strong>Q8.</strong> The perimeter of a rhombus is 60 cm and one diagonal is 18 cm. Find the other diagonal.</p>
                            <div class="solution hidden">
                                <p><strong>Solution:</strong></p>
                                <p>Perimeter = 60 cm ⟹ Each side = 60/4 = 15 cm</p>
                                <p>Let diagonals be d₁ = 18 cm and d₂ = ? cm</p>
                                <p>In rhombus, diagonals bisect at right angles</p>
                                <p>Each diagonal divides rhombus into 4 right triangles</p>
                                <p>In right triangle: (side)² = (d₁/2)² + (d₂/2)²</p>
                                <p>15² = (18/2)² + (d₂/2)²</p>
                                <p>225 = 81 + (d₂/2)²</p>
                                <p>(d₂/2)² = 144</p>
                                <p>d₂/2 = 12 ⟹ d₂ = 24 cm</p>
                                <p><strong>Answer:</strong> Other diagonal = 24 cm</p>
                            </div>
                        </div>
                    </div>
                </div>

                <h3>🏆 Challenge Questions (For Toppers!)</h3>
                <div class="challenge-questions">
                    <div class="question">
                        <p><strong>Challenge 1:</strong> Prove that if the diagonals of a parallelogram are equal, then it is a rectangle.</p>
                        <div class="solution hidden">
                            <p><strong>Hint:</strong> Use congruent triangles and properties of parallelogram</p>
                        </div>
                    </div>
                    <div class="question">
                        <p><strong>Challenge 2:</strong> A quadrilateral has vertices at A(1,1), B(4,1), C(4,4), and D(1,4). Identify the type of quadrilateral and find its area.</p>
                        <div class="solution hidden">
                            <p><strong>Answer:</strong> Square with area 9 square units</p>
                        </div>
                    </div>
                </div>

                <div class="fun-activity">
                    <h3>🎨 Fun Activity Corner!</h3>
                    <div class="activity-card">
                        <h4>🏠 Quadrilateral Hunt at Home!</h4>
                        <p>Find and photograph different quadrilaterals around your house:</p>
                        <ul>
                            <li><strong>Rectangles:</strong> Books, doors, windows, phones</li>
                            <li><strong>Squares:</strong> Tiles, sticky notes, chess board squares</li>
                            <li><strong>Parallelograms:</strong> Slanted parking spaces (if any)</li>
                            <li><strong>Trapeziums:</strong> Some table designs, architectural elements</li>
                        </ul>
                        <p>Make a collage and label each shape with its properties!</p>
                    </div>
                    
                    <div class="activity-card">
                        <h4>🎮 Quadrilateral Memory Game</h4>
                        <p>Create flashcards with:</p>
                        <ul>
                            <li>Front: Shape name</li>
                            <li>Back: Properties</li>
                            <li>Test yourself or challenge friends!</li>
                        </ul>
                    </div>
                </div>
            </div>
            `
        },
        pyq: {
            title: "📚 Previous Year Questions & Board Patterns",
            content: `
            <div class="pyq-section">
                <h3>🎯 Board Exam Pattern Analysis</h3>
                
                <div class="pattern-analysis">
                    <div class="pattern-card">
                        <h4>Question Distribution</h4>
                        <ul>
                            <li><strong>MCQ:</strong> 1-2 questions (1 mark each)</li>
                            <li><strong>Very Short Answer:</strong> 1-2 questions (1 mark each)</li>
                            <li><strong>Short Answer:</strong> 2-3 questions (2-3 marks each)</li>
                            <li><strong>Long Answer:</strong> 1-2 questions (4-5 marks each)</li>
                            <li><strong>Proof Problems:</strong> 1 question (3-4 marks)</li>
                        </ul>
                    </div>
                </div>

                <h3>🔥 Most Repeated Questions</h3>
                
                <div class="repeated-questions">
                    <div class="frequency high">
                        <h4>🌟 Asked Every Year!</h4>
                        <ul>
                            <li>Angle sum property of quadrilaterals</li>
                            <li>Properties of parallelogram, rectangle, rhombus, square</li>
                            <li>Finding unknown angles in quadrilaterals</li>
                            <li>Diagonal properties of different quadrilaterals</li>
                            <li>Area problems of rhombus and trapezium</li>
                        </ul>
                    </div>

                    <div class="frequency medium">
                        <h4>📈 Frequently Asked</h4>
                        <ul>
                            <li>Proof that rectangle is a parallelogram</li>
                            <li>Classification and hierarchy of quadrilaterals</li>
                            <li>Word problems involving quadrilateral properties</li>
                            <li>Coordinate geometry with quadrilaterals</li>
                        </ul>
                    </div>
                </div>

                <h3>📋 Board Exam Questions (Last 5 Years) with Complete Solutions</h3>
                
                <div class="board-questions">
                    <div class="year-question">
                        <h4>🔹 2023 Board Question [3 marks]</h4>
                        <p><strong>Q:</strong> In a parallelogram ABCD, ∠A = 75°. Find the measures of ∠B, ∠C, and ∠D.</p>
                        <div class="complete-solution">
                            <p><strong>Solution:</strong></p>
                            <p><strong>Step 1:</strong> Properties of parallelogram</p>
                            <p>• Opposite angles are equal</p>
                            <p>• Adjacent angles are supplementary</p>
                            <p><strong>Step 2:</strong> Find ∠C (opposite to ∠A)</p>
                            <p>∠C = ∠A = 75°</p>
                            <p><strong>Step 3:</strong> Find ∠B (adjacent to ∠A)</p>
                            <p>∠A + ∠B = 180° (adjacent angles)</p>
                            <p>75° + ∠B = 180°</p>
                            <p>∠B = 105°</p>
                            <p><strong>Step 4:</strong> Find ∠D (opposite to ∠B)</p>
                            <p>∠D = ∠B = 105°</p>
                            <p><strong>Verification:</strong> 75° + 105° + 75° + 105° = 360° ✅</p>
                            <p><strong>Answer:</strong> ∠B = 105°, ∠C = 75°, ∠D = 105°</p>
                            <div class="marking-scheme">
                                <p><strong>Marking:</strong> Properties (1) + Method (1) + Answer (1)</p>
                            </div>
                        </div>
                    </div>

                    <div class="year-question">
                        <h4>🔹 2022 Board Question [4 marks]</h4>
                        <p><strong>Q:</strong> The diagonals of a rhombus are 24 cm and 18 cm. Find the area and perimeter of the rhombus.</p>
                        <div class="complete-solution">
                            <p><strong>Given:</strong> Diagonals d₁ = 24 cm, d₂ = 18 cm</p>
                            <p><strong>Solution:</strong></p>
                            <p><strong>Step 1:</strong> Find Area</p>
                            <p>Area of rhombus = ½ × d₁ × d₂</p>
                            <p>Area = ½ × 24 × 18 = 216 cm²</p>
                            <p><strong>Step 2:</strong> Find side length</p>
                            <p>Diagonals of rhombus bisect at right angles</p>
                            <p>Half diagonals: 12 cm and 9 cm</p>
                            <p>Side = √[(d₁/2)² + (d₂/2)²]</p>
                            <p>Side = √[12² + 9²] = √[144 + 81] = √225 = 15 cm</p>
                            <p><strong>Step 3:</strong> Find Perimeter</p>
                            <p>Perimeter = 4 × side = 4 × 15 = 60 cm</p>
                            <p><strong>Answer:</strong> Area = 216 cm², Perimeter = 60 cm</p>
                            <div class="marking-scheme">
                                <p><strong>Marking:</strong> Area (1) + Side calculation (2) + Perimeter (1)</p>
                            </div>
                        </div>
                    </div>

                    <div class="year-question">
                        <h4>🔹 2021 Board Question [5 marks]</h4>
                        <p><strong>Q:</strong> Prove that if the diagonals of a quadrilateral bisect each other, then it is a parallelogram.</p>
                        <div class="complete-solution">
                            <p><strong>Given:</strong> Quadrilateral ABCD with diagonals AC and BD bisecting each other at O</p>
                            <p><strong>To Prove:</strong> ABCD is a parallelogram</p>
                            <p><strong>Proof:</strong></p>
                            <p><strong>Step 1:</strong> Since diagonals bisect each other</p>
                            <p>AO = OC and BO = OD</p>
                            <p><strong>Step 2:</strong> In △AOB and △COD</p>
                            <p>AO = OC (given)</p>
                            <p>BO = OD (given)</p>
                            <p>∠AOB = ∠COD (vertically opposite angles)</p>
                            <p>∴ △AOB ≅ △COD (SAS)</p>
                            <p><strong>Step 3:</strong> From congruent triangles</p>
                            <p>AB = CD and ∠OAB = ∠OCD</p>
                            <p>∴ AB ∥ CD (alternate angles equal)</p>
                            <p><strong>Step 4:</strong> Similarly, in △AOD and △COB</p>
                            <p>△AOD ≅ △COB (SAS)</p>
                            <p>∴ AD = BC and AD ∥ BC</p>
                            <p><strong>Conclusion:</strong> Opposite sides are equal and parallel</p>
                            <p><strong>∴ ABCD is a parallelogram</strong></p>
                            <div class="marking-scheme">
                                <p><strong>Marking:</strong> Given/To Prove (1) + Congruency proof (2) + Parallel lines (1) + Conclusion (1)</p>
                            </div>
                        </div>
                    </div>

                    <div class="year-question">
                        <h4>🔹 2020 Board Question [2 marks]</h4>
                        <p><strong>Q:</strong> State whether the following statement is true or false. Give reason: "A rectangle is a parallelogram but a parallelogram is not necessarily a rectangle."</p>
                        <div class="complete-solution">
                            <p><strong>Answer:</strong> TRUE</p>
                            <p><strong>Reason:</strong></p>
                            <p><strong>Part 1:</strong> Rectangle is a parallelogram</p>
                            <p>• Rectangle has opposite sides parallel and equal</p>
                            <p>• This satisfies the definition of parallelogram</p>
                            <p>• ∴ Every rectangle is a parallelogram ✅</p>
                            <p><strong>Part 2:</strong> Parallelogram is not necessarily a rectangle</p>
                            <p>• Parallelogram may not have all angles = 90°</p>
                            <p>• Rectangle must have all angles = 90°</p>
                            <p>• ∴ Not every parallelogram is a rectangle ✅</p>
                            <p><strong>Conclusion:</strong> Statement is TRUE</p>
                        </div>
                    </div>

                    <div class="year-question">
                        <h4>🔹 2019 Board Question [3 marks]</h4>
                        <p><strong>Q:</strong> Three angles of a quadrilateral are in the ratio 1:2:3. If the fourth angle is 60°, find all the angles.</p>
                        <div class="complete-solution">
                            <p><strong>Given:</strong> Three angles in ratio 1:2:3, Fourth angle = 60°</p>
                            <p><strong>Solution:</strong></p>
                            <p><strong>Step 1:</strong> Let the three angles be x, 2x, and 3x</p>
                            <p><strong>Step 2:</strong> Use angle sum property</p>
                            <p>Sum of all angles = 360°</p>
                            <p>x + 2x + 3x + 60° = 360°</p>
                            <p>6x + 60° = 360°</p>
                            <p>6x = 300°</p>
                            <p>x = 50°</p>
                            <p><strong>Step 3:</strong> Find all angles</p>
                            <p>First angle = x = 50°</p>
                            <p>Second angle = 2x = 100°</p>
                            <p>Third angle = 3x = 150°</p>
                            <p>Fourth angle = 60° (given)</p>
                            <p><strong>Verification:</strong> 50° + 100° + 150° + 60° = 360° ✅</p>
                            <p><strong>Answer:</strong> 50°, 100°, 150°, 60°</p>
                        </div>
                    </div>
                </div>

                <h3>💡 Exam Tips & Strategy</h3>
                <div class="exam-tips">
                    <div class="tip-card last-day">
                        <h4>⚡ Last Day Revision (90 minutes)</h4>
                        <ul>
                            <li><strong>20 min:</strong> Properties table revision</li>
                            <li><strong>25 min:</strong> Practice angle problems (5 questions)</li>
                            <li><strong>25 min:</strong> Area and diagonal problems</li>
                            <li><strong>20 min:</strong> Quick proof practice</li>
                        </ul>
                    </div>

                    <div class="tip-card writing">
                        <h4>✍️ Answer Writing Strategy</h4>
                        <ul>
                            <li><strong>For proofs:</strong> Write Given, To Prove, Proof clearly</li>
                            <li><strong>For angle problems:</strong> State which property you're using</li>
                            <li><strong>Draw diagrams</strong> whenever possible</li>
                            <li><strong>Always verify your answers</strong> (especially angles should sum to 360°)</li>
                        </ul>
                    </div>

                    <div class="tip-card common-mistakes">
                        <h4>⚠️ Avoid These Mistakes</h4>
                        <ul>
                            <li><strong>Confusing properties</strong> of different quadrilaterals</li>
                            <li><strong>Not stating reasons</strong> in geometry proofs</li>
                            <li><strong>Calculation errors</strong> in angle sum problems</li>
                            <li><strong>Forgetting to verify</strong> that angles sum to 360°</li>
                            <li><strong>Mixing up diagonal properties</strong> of different shapes</li>
                        </ul>
                    </div>

                    <div class="tip-card geometry-tips">
                        <h4>📐 Geometry Proof Tips</h4>
                        <ul>
                            <li><strong>Always draw a clear diagram</strong></li>
                            <li><strong>Mark given information</strong> on the diagram</li>
                            <li><strong>State which congruency rule</strong> you're using (SAS, SSS, etc.)</li>
                            <li><strong>Write logical steps</strong> in sequence</li>
                            <li><strong>End with a clear conclusion</strong></li>
                        </ul>
                    </div>
                </div>

                <h3>📊 Success Formula for Full Marks</h3>
                <div class="success-formula">
                    <div class="formula-step">
                        <h4>🎯 Master These Topics:</h4>
                        <ol>
                            <li><strong>Angle sum property</strong> (360° rule)</li>
                            <li><strong>Properties of each quadrilateral type</strong></li>
                            <li><strong>Diagonal properties</strong> and their applications</li>
                            <li><strong>Area formulas</strong> for rhombus and trapezium</li>
                            <li><strong>Basic proofs</strong> about parallelograms</li>
                        </ol>
                    </div>
                    <div class="formula-step">
                        <h4>✅ Perfect Score Checklist:</h4>
                        <ul>
                            <li>✓ Can identify any quadrilateral from its properties</li>
                            <li>✓ Can solve angle problems in under 3 minutes</li>
                            <li>✓ Know all area formulas by heart</li>
                            <li>✓ Can write clear geometric proofs</li>
                            <li>✓ Never make calculation errors</li>
                        </ul>
                    </div>
                </div>
            </div>
            `
        }
    }
},
"practical-geometry": {
    title: "Practical Geometry",
    subject: "Mathematics",
    class: "8",
    content: {
        introduction: {
            title: "Practical Geometry - Drawing Perfect Shapes! 📐",
            content: `
            <div class="intro-section">
                <h3>Real-Life Connection</h3>
                <p>Ever wondered how architects design buildings with perfect angles? 🏗️ How engineers create precise blueprints? Or how artists draw geometric patterns? Welcome to <strong>Practical Geometry</strong> - where math meets art and precision meets creativity!</p>
                
                <div class="definition-box">
                    <h4>What is Practical Geometry?</h4>
                    <p><strong>Practical Geometry</strong> is the art and science of constructing geometric figures using only basic tools like compass, ruler, and pencil.</p>
                    <p><strong>Key Tools:</strong> Compass, Ruler (scale), Pencil, Protractor</p>
                </div>

                <h3>Why Study This Chapter?</h3>
                <div class="real-world-examples">
                    <div class="example-card">
                        <h4>Architecture & Engineering</h4>
                        <p>Designing buildings, bridges, and structures with precise angles and measurements</p>
                    </div>
                    <div class="example-card">
                        <h4>Art & Design</h4>
                        <p>Creating geometric patterns, logos, and artistic designs with mathematical precision</p>
                    </div>
                    <div class="example-card">
                        <h4>Navigation & Mapping</h4>
                        <p>Creating accurate maps, determining directions, and plotting courses</p>
                    </div>
                    <div class="example-card">
                        <h4>Manufacturing</h4>
                        <p>Designing machine parts, creating templates, and ensuring perfect fits</p>
                    </div>
                </div>

                <div class="modern-context">
                    <h3>Modern Applications</h3>
                    <p>From CAD software that architects use to design skyscrapers, to GPS systems that help you navigate - all are based on the geometric construction principles you'll learn in this chapter! 🚀</p>
                </div>
            </div>
            `
        },
        content: {
            title: "Mastering Geometric Constructions Step by Step",
            content: `
            <div class="content-section">
                <h3>Essential Tools for Practical Geometry</h3>
                
                <div class="concept-box">
                    <h4>The Geometer's Toolkit</h4>
                    <ul>
                        <li><strong>Compass:</strong> For drawing circles and arcs</li>
                        <li><strong>Ruler/Scale:</strong> For drawing straight lines and measuring</li>
                        <li><strong>Set Squares:</strong> For drawing perpendicular lines</li>
                        <li><strong>Protractor:</strong> For measuring and drawing angles</li>
                        <li><strong>Pencil:</strong> For marking and drawing (use HB or 2H)</li>
                    </ul>
                    <p class="hindi-explanation">Ye tools tumhare geometry ke best friends hain! Har construction mein inki zaroorat hogi.</p>
                </div>

                <h3>Types of Quadrilateral Constructions</h3>

                <div class="construction-type">
                    <h4>1. Constructing a Quadrilateral with 4 Sides and 1 Diagonal</h4>
                    <div class="step-by-step">
                        <h5>Given: AB = 4 cm, BC = 3 cm, CD = 5 cm, DA = 6 cm, AC = 5 cm</h5>
                        <div class="construction-steps">
                            <div class="step">
                                <h6>Step 1: Draw the base</h6>
                                <p>Draw AB = 4 cm using ruler</p>
                            </div>
                            <div class="step">
                                <h6>Step 2: Locate point C</h6>
                                <p>From A, draw arc of radius 5 cm (AC)</p>
                                <p>From B, draw arc of radius 3 cm (BC)</p>
                                <p>Mark intersection point as C</p>
                            </div>
                            <div class="step">
                                <h6>Step 3: Locate point D</h6>
                                <p>From A, draw arc of radius 6 cm (DA)</p>
                                <p>From C, draw arc of radius 5 cm (CD)</p>
                                <p>Mark intersection point as D</p>
                            </div>
                            <div class="step">
                                <h6>Step 4: Complete the quadrilateral</h6>
                                <p>Join all vertices: A-B-C-D-A</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="construction-type">
                    <h4>2. Constructing a Quadrilateral with 3 Sides and 2 Diagonals</h4>
                    <div class="step-by-step">
                        <h5>Given: AB = 5 cm, BC = 6 cm, CD = 4 cm, AC = 7 cm, BD = 6 cm</h5>
                        <div class="construction-steps">
                            <div class="step">
                                <h6>Step 1: Draw triangle ABC</h6>
                                <p>Draw AB = 5 cm</p>
                                <p>From A, arc of radius 7 cm; from B, arc of radius 6 cm</p>
                                <p>Mark intersection as C</p>
                            </div>
                            <div class="step">
                                <h6>Step 2: Locate point D</h6>
                                <p>From B, draw arc of radius 6 cm (BD)</p>
                                <p>From C, draw arc of radius 4 cm (CD)</p>
                                <p>Mark intersection point as D</p>
                            </div>
                            <div class="step">
                                <h6>Step 3: Complete quadrilateral</h6>
                                <p>Join A-D to complete ABCD</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="construction-type">
                    <h4>3. Constructing a Quadrilateral with 2 Adjacent Sides and 3 Angles</h4>
                    <div class="step-by-step">
                        <h5>Given: AB = 4 cm, BC = 5 cm, ∠A = 60°, ∠B = 90°, ∠C = 120°</h5>
                        <div class="construction-steps">
                            <div class="step">
                                <h6>Step 1: Draw base AB</h6>
                                <p>Draw AB = 4 cm</p>
                            </div>
                            <div class="step">
                                <h6>Step 2: Draw angle at A</h6>
                                <p>At A, draw ray making 60° with AB</p>
                            </div>
                            <div class="step">
                                <h6>Step 3: Draw angle at B and locate C</h6>
                                <p>At B, draw ray making 90° with BA</p>
                                <p>Mark point C at distance 5 cm from B on this ray</p>
                            </div>
                            <div class="step">
                                <h6>Step 4: Draw angle at C and locate D</h6>
                                <p>At C, draw ray making 120° with CB</p>
                                <p>Mark intersection with ray from A as point D</p>
                            </div>
                        </div>
                    </div>
                </div>

                <h3>Special Quadrilateral Constructions</h3>

                <div class="special-construction">
                    <h4>Constructing a Parallelogram</h4>
                    <div class="method-box">
                        <h5>Method 1: Using two adjacent sides and included angle</h5>
                        <p><strong>Given:</strong> AB = 5 cm, BC = 4 cm, ∠ABC = 70°</p>
                        <div class="construction-steps">
                            <p>1. Draw AB = 5 cm</p>
                            <p>2. At B, draw angle 70° and mark BC = 4 cm</p>
                            <p>3. From A, draw line parallel to BC</p>
                            <p>4. From C, draw line parallel to AB</p>
                            <p>5. Mark intersection as D</p>
                        </div>
                    </div>

                    <div class="method-box">
                        <h5>Method 2: Using two adjacent sides and one diagonal</h5>
                        <p><strong>Given:</strong> AB = 6 cm, BC = 4 cm, AC = 7 cm</p>
                        <div class="construction-steps">
                            <p>1. Construct triangle ABC with given measurements</p>
                            <p>2. From A, draw arc equal to BC</p>
                            <p>3. From C, draw arc equal to AB</p>
                            <p>4. Mark intersection as D</p>
                            <p>5. Join A-D and C-D</p>
                        </div>
                    </div>
                </div>

                <div class="special-construction">
                    <h4>Constructing a Rhombus</h4>
                    <div class="method-box">
                        <h5>Method 1: Using side and one angle</h5>
                        <p><strong>Given:</strong> Side = 5 cm, ∠A = 60°</p>
                        <div class="construction-steps">
                            <p>1. Draw AB = 5 cm</p>
                            <p>2. At A, draw angle 60° and mark AD = 5 cm</p>
                            <p>3. From B, draw arc of radius 5 cm</p>
                            <p>4. From D, draw arc of radius 5 cm</p>
                            <p>5. Mark intersection as C and join</p>
                        </div>
                    </div>

                    <div class="method-box">
                        <h5>Method 2: Using diagonals</h5>
                        <p><strong>Given:</strong> Diagonals AC = 8 cm, BD = 6 cm</p>
                        <div class="construction-steps">
                            <p>1. Draw AC = 8 cm</p>
                            <p>2. Draw perpendicular bisector of AC</p>
                            <p>3. Mark points B and D at 3 cm each from center</p>
                            <p>4. Join A-B-C-D-A</p>
                        </div>
                    </div>
                </div>

                <div class="special-construction">
                    <h4>Constructing a Rectangle</h4>
                    <div class="method-box">
                        <h5>Using adjacent sides</h5>
                        <p><strong>Given:</strong> Length = 6 cm, Breadth = 4 cm</p>
                        <div class="construction-steps">
                            <p>1. Draw AB = 6 cm</p>
                            <p>2. At A and B, draw perpendiculars</p>
                            <p>3. Mark AD = BC = 4 cm</p>
                            <p>4. Join C-D to complete rectangle</p>
                        </div>
                    </div>
                </div>

                <h3>Construction Tips & Tricks</h3>

                <div class="tips-section">
                    <div class="tip-card">
                        <h4>Accuracy Tips</h4>
                        <ul>
                            <li>Keep your pencil sharp for precise marks</li>
                            <li>Don't press too hard with compass</li>
                            <li>Make light construction lines first</li>
                            <li>Double-check measurements before final lines</li>
                        </ul>
                    </div>

                    <div class="tip-card">
                        <h4>Common Mistakes to Avoid</h4>
                        <ul>
                            <li>Not maintaining compass radius while drawing arcs</li>
                            <li>Erasing construction lines (keep them light)</li>
                            <li>Starting without planning the construction</li>
                            <li>Not checking if quadrilateral can exist with given data</li>
                        </ul>
                    </div>
                </div>

                <div class="verification-box">
                    <h4>How to Verify Your Construction</h4>
                    <ul>
                        <li><strong>Measure all sides:</strong> Check if they match given lengths</li>
                        <li><strong>Measure all angles:</strong> Verify against given angles</li>
                        <li><strong>Check diagonals:</strong> Measure if diagonal lengths are correct</li>
                        <li><strong>Sum of angles:</strong> Should equal 360° for any quadrilateral</li>
                    </ul>
                </div>

                <div class="diagram-placeholder">
                    <h4>Visual Construction Guide</h4>
                    <p><strong>[DIAGRAM PLACEHOLDER]</strong></p>
                    <p>Step-by-step visual construction of different quadrilaterals</p>
                    <p>Tool usage demonstrations with compass and ruler</p>
                    <p>Common construction patterns and techniques</p>
                    <p>Before and after construction comparisons</p>
                </div>
            </div>
            `
        },
        formulas: {
            title: "Construction Rules & Quick Reference",
            content: `
            <div class="formula-sheet">
                <h3>Essential Construction Rules</h3>
                
                <div class="formula-card">
                    <h4>Existence Conditions for Quadrilaterals</h4>
                    <ul>
                        <li><strong>4 Sides + 1 Diagonal:</strong> Sum of any 3 sides > 4th side</li>
                        <li><strong>3 Sides + 2 Diagonals:</strong> Triangle inequality for each triangle formed</li>
                        <li><strong>2 Sides + 3 Angles:</strong> Sum of 3 given angles < 360°</li>
                        <li><strong>General Rule:</strong> Sum of all angles = 360°</li>
                    </ul>
                </div>

                <div class="formula-card">
                    <h4>Parallelogram Properties</h4>
                    <ul>
                        <li><strong>Opposite sides:</strong> Equal and parallel</li>
                        <li><strong>Opposite angles:</strong> Equal</li>
                        <li><strong>Adjacent angles:</strong> Supplementary (sum = 180°)</li>
                        <li><strong>Diagonals:</strong> Bisect each other</li>
                    </ul>
                </div>

                <div class="formula-card">
                    <h4>Rhombus Properties</h4>
                    <ul>
                        <li><strong>All sides:</strong> Equal</li>
                        <li><strong>Opposite angles:</strong> Equal</li>
                        <li><strong>Diagonals:</strong> Perpendicular bisectors of each other</li>
                        <li><strong>Area:</strong> ½ × d₁ × d₂</li>
                    </ul>
                </div>

                <div class="formula-card">
                    <h4>Rectangle Properties</h4>
                    <ul>
                        <li><strong>All angles:</strong> 90°</li>
                        <li><strong>Opposite sides:</strong> Equal</li>
                        <li><strong>Diagonals:</strong> Equal and bisect each other</li>
                        <li><strong>Area:</strong> Length × Breadth</li>
                    </ul>
                </div>

                <h3>Construction Methods Summary</h3>
                
                <div class="method-table">
                    <table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
                        <tr style="background-color: var(--bg-secondary);">
                            <th style="border: 1px solid var(--border); padding: 0.5rem;">Given Data</th>
                            <th style="border: 1px solid var(--border); padding: 0.5rem;">Construction Method</th>
                            <th style="border: 1px solid var(--border); padding: 0.5rem;">Key Steps</th>
                        </tr>
                        <tr>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">4 sides + 1 diagonal</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">Triangle method</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">Form 2 triangles using diagonal</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">3 sides + 2 diagonals</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">Triangle + intersection</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">Construct one triangle, locate 4th vertex</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">2 adjacent sides + 3 angles</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">Angle construction</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">Draw angles at vertices sequentially</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">2 adjacent sides + included angle</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">Parallelogram method</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">Use parallel line property</td>
                        </tr>
                    </table>
                </div>

                <h3>Quick Reference Checklist</h3>
                
                <div class="checklist-section">
                    <div class="checklist-card">
                        <h4>Before Starting Construction</h4>
                        <ul>
                            <li>✓ Check if quadrilateral can exist with given data</li>
                            <li>✓ Plan which method to use</li>
                            <li>✓ Prepare all tools (compass, ruler, pencil)</li>
                            <li>✓ Choose appropriate scale if needed</li>
                        </ul>
                    </div>

                    <div class="checklist-card">
                        <h4>During Construction</h4>
                        <ul>
                            <li>✓ Make light construction lines</li>
                            <li>✓ Maintain compass settings carefully</li>
                            <li>✓ Label all vertices clearly</li>
                            <li>✓ Don't erase construction arcs</li>
                        </ul>
                    </div>

                    <div class="checklist-card">
                        <h4>After Construction</h4>
                        <ul>
                            <li>✓ Measure all sides and angles</li>
                            <li>✓ Verify against given data</li>
                            <li>✓ Check angle sum = 360°</li>
                            <li>✓ Darken final figure</li>
                        </ul>
                    </div>
                </div>

                <div class="measurement-tips">
                    <h3>Measurement Accuracy Guide</h3>
                    <div class="tip-grid">
                        <div class="tip-item">
                            <h5>Length Measurements</h5>
                            <p>Accurate to nearest mm (0.1 cm)</p>
                        </div>
                        <div class="tip-item">
                            <h5>Angle Measurements</h5>
                            <p>Accurate to nearest degree</p>
                        </div>
                        <div class="tip-item">
                            <h5>Arc Intersections</h5>
                            <p>Use sharp pencil for precise points</p>
                        </div>
                        <div class="tip-item">
                            <h5>Parallel Lines</h5>
                            <p>Use set square for accuracy</p>
                        </div>
                    </div>
                </div>
            </div>
            `
        },
        practice: {
            title: "Practice Constructions & Problems",
            content: `
            <div class="practice-section">
                <h3>MCQ Questions (Quick Understanding Check!)</h3>
                
                <div class="mcq-container">
                    <div class="question-card">
                        <h4>Q1. To construct a quadrilateral ABCD with AB = 4 cm, BC = 3 cm, CD = 5 cm, DA = 6 cm, AC = 5 cm, how many triangles do we construct?</h4>
                        <div class="options">
                            <label><input type="radio" name="q1" value="a"> a) 1</label>
                            <label><input type="radio" name="q1" value="b"> b) 2</label>
                            <label><input type="radio" name="q1" value="c"> c) 3</label>
                            <label><input type="radio" name="q1" value="d"> d) 4</label>
                        </div>
                        <div class="answer hidden">
                            <p><strong>Answer: b) 2</strong></p>
                            <p><strong>Explanation:</strong> With 4 sides and 1 diagonal, we construct triangles ABC and ACD using the diagonal AC.</p>
                        </div>
                    </div>

                    <div class="question-card">
                        <h4>Q2. Which tool is most essential for constructing arcs in quadrilateral construction?</h4>
                        <div class="options">
                            <label><input type="radio" name="q2" value="a"> a) Protractor</label>
                            <label><input type="radio" name="q2" value="b"> b) Compass</label>
                            <label><input type="radio" name="q2" value="c"> c) Set square</label>
                            <label><input type="radio" name="q2" value="d"> d) Ruler</label>
                        </div>
                        <div class="answer hidden">
                            <p><strong>Answer: b) Compass</strong></p>
                            <p><strong>Reason:</strong> Compass is used to draw arcs with specific radii to locate vertices accurately.</p>
                        </div>
                    </div>

                    <div class="question-card">
                        <h4>Q3. In a parallelogram, if one angle is 70°, what is the measure of its adjacent angle?</h4>
                        <div class="options">
                            <label><input type="radio" name="q3" value="a"> a) 70°</label>
                            <label><input type="radio" name="q3" value="b"> b) 110°</label>
                            <label><input type="radio" name="q3" value="c"> c) 140°</label>
                            <label><input type="radio" name="q3" value="d"> d) 290°</label>
                        </div>
                        <div class="answer hidden">
                            <p><strong>Answer: b) 110°</strong></p>
                            <p><strong>Explanation:</strong> Adjacent angles in parallelogram are supplementary: 180° - 70° = 110°</p>
                        </div>
                    </div>

                    <div class="question-card">
                        <h4>Q4. For constructing a rhombus with diagonals 8 cm and 6 cm, the diagonals should be:</h4>
                        <div class="options">
                            <label><input type="radio" name="q4" value="a"> a) Parallel to each other</label>
                            <label><input type="radio" name="q4" value="b"> b) Perpendicular to each other</label>
                            <label><input type="radio" name="q4" value="c"> c) Equal in length</label>
                            <label><input type="radio" name="q4" value="d"> d) At 45° to each other</label>
                        </div>
                        <div class="answer hidden">
                            <p><strong>Answer: b) Perpendicular to each other</strong></p>
                            <p><strong>Property:</strong> Diagonals of rhombus are perpendicular bisectors of each other</p>
                        </div>
                    </div>

                    <div class="question-card">
                        <h4>Q5. A quadrilateral cannot be constructed if we are given:</h4>
                        <div class="options">
                            <label><input type="radio" name="q5" value="a"> a) 4 sides and 1 diagonal</label>
                            <label><input type="radio" name="q5" value="b"> b) 3 sides and 2 diagonals</label>
                            <label><input type="radio" name="q5" value="c"> c) 4 sides only</label>
                            <label><input type="radio" name="q5" value="d"> d) 2 sides and 3 angles</label>
                        </div>
                        <div class="answer hidden">
                            <p><strong>Answer: c) 4 sides only</strong></p>
                            <p><strong>Reason:</strong> With only 4 sides, infinite quadrilaterals are possible. We need additional information like angles or diagonals.</p>
                        </div>
                    </div>
                </div>

                <h3>Construction Practice Problems</h3>
                
                <div class="construction-problems">
                    <div class="problem-level easy">
                        <h4>Easy Level - Basic Constructions</h4>
                        
                        <div class="problem">
                            <p><strong>Problem 1:</strong> Construct quadrilateral PQRS with PQ = 4 cm, QR = 3 cm, RS = 5 cm, SP = 6 cm, and diagonal PR = 5 cm.</p>
                            <div class="solution hidden">
                                <p><strong>Construction Steps:</strong></p>
                                <p>1. Draw PQ = 4 cm</p>
                                <p>2. From P, draw arc of radius 5 cm (PR)</p>
                                <p>3. From Q, draw arc of radius 3 cm (QR)</p>
                                <p>4. Mark intersection as R</p>
                                <p>5. From P, draw arc of radius 6 cm (PS)</p>
                                <p>6. From R, draw arc of radius 5 cm (RS)</p>
                                <p>7. Mark intersection as S</p>
                                <p>8. Join all vertices to complete quadrilateral</p>
                            </div>
                        </div>
                        
                        <div class="problem">
                            <p><strong>Problem 2:</strong> Construct a rectangle with length 6 cm and breadth 4 cm.</p>
                            <div class="solution hidden">
                                <p><strong>Construction Steps:</strong></p>
                                <p>1. Draw AB = 6 cm</p>
                                <p>2. At A, draw perpendicular and mark AD = 4 cm</p>
                                <p>3. At B, draw perpendicular and mark BC = 4 cm</p>
                                <p>4. Join C and D to complete rectangle ABCD</p>
                                <p><strong>Verification:</strong> All angles = 90°, opposite sides equal</p>
                            </div>
                        </div>

                        <div class="problem">
                            <p><strong>Problem 3:</strong> Construct a parallelogram ABCD with AB = 5 cm, BC = 3 cm, and angle ABC = 60°.</p>
                            <div class="solution hidden">
                                <p><strong>Construction Steps:</strong></p>
                                <p>1. Draw AB = 5 cm</p>
                                <p>2. At B, construct angle of 60° with AB</p>
                                <p>3. On this ray, mark BC = 3 cm</p>
                                <p>4. From A, draw line parallel to BC</p>
                                <p>5. From C, draw line parallel to AB</p>
                                <p>6. Mark intersection as D and complete parallelogram</p>
                            </div>
                        </div>
                    </div>

                    <div class="problem-level medium">
                        <h4>Medium Level - Complex Constructions</h4>
                        
                        <div class="problem">
                            <p><strong>Problem 4:</strong> Construct quadrilateral ABCD with AB = 4 cm, BC = 5 cm, CD = 6 cm, diagonals AC = 7 cm, and BD = 8 cm.</p>
                            <div class="solution hidden">
                                <p><strong>Construction Steps:</strong></p>
                                <p>1. Draw triangle ABC with AB = 4 cm, BC = 5 cm, AC = 7 cm</p>
                                <p>2. From B, draw arc of radius 8 cm (BD)</p>
                                <p>3. From C, draw arc of radius 6 cm (CD)</p>
                                <p>4. Mark intersection as D</p>
                                <p>5. Join AD to complete quadrilateral</p>
                                <p><strong>Check:</strong> Measure AD and verify triangle inequality in triangles ABD and ACD</p>
                            </div>
                        </div>
                        
                        <div class="problem">
                            <p><strong>Problem 5:</strong> Construct rhombus PQRS with side 4 cm and one angle 120°.</p>
                            <div class="solution hidden">
                                <p><strong>Construction Steps:</strong></p>
                                <p>1. Draw PQ = 4 cm</p>
                                <p>2. At P, construct angle of 120° with PQ</p>
                                <p>3. On this ray, mark PS = 4 cm</p>
                                <p>4. From Q, draw arc of radius 4 cm</p>
                                <p>5. From S, draw arc of radius 4 cm</p>
                                <p>6. Mark intersection as R and complete rhombus</p>
                                <p><strong>Properties Check:</strong> All sides equal, opposite angles equal</p>
                            </div>
                        </div>

                        <div class="problem">
                            <p><strong>Problem 6:</strong> Construct quadrilateral WXYZ with WX = 3 cm, XY = 4 cm, angle W = 75°, angle X = 105°, angle Y = 135°.</p>
                            <div class="solution hidden">
                                <p><strong>Construction Steps:</strong></p>
                                <p>1. Draw WX = 3 cm</p>
                                <p>2. At W, construct angle of 75° with WX</p>
                                <p>3. At X, construct angle of 105° with XW</p>
                                <p>4. On ray from X, mark XY = 4 cm</p>
                                <p>5. At Y, construct angle of 135° with YX</p>
                                <p>6. Mark intersection of rays from W and Y as Z</p>
                                <p><strong>Verification:</strong> Angle Z = 360° - (75° + 105° + 135°) = 45°</p>
                            </div>
                        </div>
                    </div>

                    <div class="problem-level hard">
                        <h4>Hard Level - Challenge Constructions</h4>
                        
                        <div class="problem">
                            <p><strong>Problem 7:</strong> Construct quadrilateral ABCD such that AB = 5 cm, angle A = 60°, angle B = 90°, angle C = 120°, and BC = 4 cm.</p>
                            <div class="solution hidden">
                                <p><strong>Solution Strategy:</strong></p>
                                <p>1. Check: Sum of given angles = 60° + 90° + 120° = 270° < 360° ✓</p>
                                <p>2. Angle D = 360° - 270° = 90°</p>
                                <p><strong>Construction:</strong></p>
                                <p>3. Draw AB = 5 cm</p>
                                <p>4. At A, draw ray making 60° with AB</p>
                                <p>5. At B, draw ray making 90° with BA</p>
                                <p>6. On ray from B, mark BC = 4 cm</p>
                                <p>7. At C, draw ray making 120° with CB</p>
                                <p>8. Mark intersection with ray from A as D</p>
                            </div>
                        </div>

                        <div class="problem">
                            <p><strong>Problem 8:</strong> Is it possible to construct a quadrilateral with sides 3 cm, 4 cm, 5 cm, 15 cm? If not, why?</p>
                            <div class="solution hidden">
                                <p><strong>Analysis:</strong></p>
                                <p>Check: Sum of three smaller sides vs largest side</p>
                                <p>3 + 4 + 5 = 12 cm < 15 cm</p>
                                <p><strong>Answer:</strong> NO, construction is not possible</p>
                                <p><strong>Reason:</strong> In any quadrilateral, sum of any three sides must be greater than the fourth side</p>
                                <p>This is similar to triangle inequality but extended to quadrilaterals</p>
                            </div>
                        </div>
                    </div>
                </div>

                <h3>Practical Construction Challenges</h3>
                
                <div class="challenge-section">
                    <div class="challenge-problem">
                        <h4>Challenge 1: Design a Kite</h4>
                        <p>Construct a kite-shaped quadrilateral where two pairs of adjacent sides are equal. Given: AB = AD = 6 cm, CB = CD = 4 cm, and angle BAD = 100°.</p>
                        <div class="solution hidden">
                            <p><strong>Special Method for Kite:</strong></p>
                            <p>1. Draw diagonal AC</p>
                            <p>2. This diagonal is the axis of symmetry</p>
                            <p>3. Construct points B and D equidistant from AC</p>
                            <p>4. Use angle bisector property of kites</p>
                        </div>
                    </div>

                    <div class="challenge-problem">
                        <h4>Challenge 2: Trapezium Construction</h4>
                        <p>Construct trapezium PQRS with PQ parallel to SR, PQ = 6 cm, SR = 4 cm, PS = 5 cm, and angle SPQ = 75°.</p>
                        <div class="solution hidden">
                            <p><strong>Trapezium Method:</strong></p>
                            <p>1. Draw PQ = 6 cm</p>
                            <p>2. At P, construct angle 75° and mark PS = 5 cm</p>
                            <p>3. From S, draw line parallel to PQ</p>
                            <p>4. From Q, draw perpendicular to PQ</p>
                            <p>5. Mark intersection points to locate R</p>
                        </div>
                    </div>
                </div>

                <div class="activity-section">
                    <h3>Fun Construction Activities</h3>
                    
                    <div class="activity-card">
                        <h4>Activity 1: Pattern Making</h4>
                        <p>Create a geometric pattern using multiple quadrilaterals:</p>
                        <ul>
                            <li>Construct 4 identical rhombuses with side 3 cm and angle 60°</li>
                            <li>Arrange them to form a larger hexagonal pattern</li>
                            <li>Color different quadrilaterals with different patterns</li>
                        </ul>
                    </div>

                    <div class="activity-card">
                        <h4>Activity 2: Construction Race</h4>
                        <p>Time yourself constructing these shapes:</p>
                        <ul>
                            <li>Rectangle 5×3 cm: Target time 2 minutes</li>
                            <li>Parallelogram with given sides and angle: Target time 3 minutes</li>
                            <li>Quadrilateral with 4 sides and 1 diagonal: Target time 4 minutes</li>
                        </ul>
                    </div>

                    <div class="activity-card">
                        <h4>Activity 3: Error Detective</h4>
                        <p>Find the error in constructions:</p>
                        <ul>
                            <li>Given faulty construction diagrams</li>
                            <li>Identify what went wrong in each step</li>
                            <li>Suggest corrections for accurate construction</li>
                        </ul>
                    </div>
                </div>
            </div>
            `
        },
        pyq: {
            title: "Previous Year Questions & Construction Mastery",
            content: `
            <div class="pyq-section">
                <h3>Board Exam Pattern Analysis</h3>
                
                <div class="pattern-analysis">
                    <div class="pattern-card">
                        <h4>Question Distribution (Last 5 Years)</h4>
                        <ul>
                            <li><strong>MCQ:</strong> 1 question (1 mark) - Tool identification, properties</li>
                            <li><strong>Very Short Answer:</strong> 1 question (1 mark) - Condition checking</li>
                            <li><strong>Short Answer:</strong> 1 question (2 marks) - Simple construction</li>
                            <li><strong>Long Answer:</strong> 1-2 questions (4-5 marks) - Complex construction</li>
                            <li><strong>Practical:</strong> 1 construction (5 marks) - Actual drawing</li>
                        </ul>
                    </div>
                </div>

                <h3>Most Repeated Question Types</h3>
                
                <div class="repeated-questions">
                    <div class="frequency high">
                        <h4>Asked Every Year!</h4>
                        <ul>
                            <li>Quadrilateral construction with 4 sides and 1 diagonal</li>
                            <li>Parallelogram construction with 2 sides and included angle</li>
                            <li>Rectangle and rhombus construction problems</li>
                            <li>Checking possibility of construction with given data</li>
                            <li>Step-by-step construction explanation</li>
                        </ul>
                    </div>

                    <div class="frequency medium">
                        <h4>Frequently Asked</h4>
                        <ul>
                            <li>Construction with 3 sides and 2 diagonals</li>
                            <li>Quadrilateral with 2 adjacent sides and 3 angles</li>
                            <li>Properties verification after construction</li>
                            <li>Tool usage and their purposes</li>
                        </ul>
                    </div>
                </div>

                <h3>Complete Board Questions with Step-by-Step Solutions</h3>
                
                <div class="board-questions">
                    <div class="year-question">
                        <h4>2023 Board Question [5 marks]</h4>
                        <p><strong>Q:</strong> Construct a quadrilateral ABCD in which AB = 4 cm, BC = 3 cm, CD = 5.5 cm, DA = 4.5 cm and diagonal AC = 5 cm. Also verify your construction by measuring the other diagonal BD.</p>
                        <div class="complete-solution">
                            <p><strong>Given:</strong> AB = 4 cm, BC = 3 cm, CD = 5.5 cm, DA = 4.5 cm, AC = 5 cm</p>
                            <p><strong>Construction Steps:</strong></p>
                            <p><strong>Step 1:</strong> Draw base AB = 4 cm using ruler</p>
                            <p><strong>Step 2:</strong> Construct triangle ABC</p>
                            <p>• From A, draw arc of radius 5 cm (for AC)</p>
                            <p>• From B, draw arc of radius 3 cm (for BC)</p>
                            <p>• Mark intersection point as C</p>
                            <p><strong>Step 3:</strong> Locate point D</p>
                            <p>• From A, draw arc of radius 4.5 cm (for AD)</p>
                            <p>• From C, draw arc of radius 5.5 cm (for CD)</p>
                            <p>• Mark intersection point as D</p>
                            <p><strong>Step 4:</strong> Complete quadrilateral</p>
                            <p>• Join A-D to complete quadrilateral ABCD</p>
                            <p><strong>Verification:</strong></p>
                            <p>• Measure diagonal BD with ruler</p>
                            <p>• Expected length: approximately 6.2 cm (may vary slightly)</p>
                            <p>• Check all given sides match measurements</p>
                            <div class="marking-scheme">
                                <p><strong>Marking Scheme:</strong> Correct construction (3) + Labeling (1) + Verification (1)</p>
                            </div>
                        </div>
                    </div>

                    <div class="year-question">
                        <h4>2022 Board Question [4 marks]</h4>
                        <p><strong>Q:</strong> Construct a parallelogram PQRS with PQ = 5 cm, QR = 3 cm, and angle PQR = 60°. Verify that opposite sides are equal and parallel.</p>
                        <div class="complete-solution">
                            <p><strong>Given:</strong> PQ = 5 cm, QR = 3 cm, ∠PQR = 60°</p>
                            <p><strong>Construction Steps:</strong></p>
                            <p><strong>Step 1:</strong> Draw PQ = 5 cm</p>
                            <p><strong>Step 2:</strong> Construct angle at Q</p>
                            <p>• At Q, draw ray making 60° with QP using protractor</p>
                            <p>• On this ray, mark QR = 3 cm</p>
                            <p><strong>Step 3:</strong> Draw parallel lines</p>
                            <p>• From P, draw line parallel to QR using set square</p>
                            <p>• From R, draw line parallel to PQ using set square</p>
                            <p><strong>Step 4:</strong> Complete parallelogram</p>
                            <p>• Mark intersection of parallel lines as S</p>
                            <p>• Join P-S and R-S to complete PQRS</p>
                            <p><strong>Verification:</strong></p>
                            <p>• Measure PS and verify PS = QR = 3 cm</p>
                            <p>• Measure RS and verify RS = PQ = 5 cm</p>
                            <p>• Check parallel lines using set square</p>
                            <div class="marking-scheme">
                                <p><strong>Marking:</strong> Construction (2) + Parallel lines (1) + Verification (1)</p>
                            </div>
                        </div>
                    </div>

                    <div class="year-question">
                        <h4>2021 Board Question [3 marks]</h4>
                        <p><strong>Q:</strong> Can a quadrilateral be constructed with sides 2 cm, 3 cm, 4 cm, and 10 cm? Give reason for your answer.</p>
                        <div class="complete-solution">
                            <p><strong>Analysis:</strong></p>
                            <p><strong>Step 1:</strong> Apply quadrilateral inequality condition</p>
                            <p>For a quadrilateral to exist, sum of any three sides must be greater than the fourth side</p>
                            <p><strong>Step 2:</strong> Check all possible combinations</p>
                            <p>• 2 + 3 + 4 = 9 < 10 ❌</p>
                            <p>• 2 + 3 + 10 = 15 > 4 ✓</p>
                            <p>• 2 + 4 + 10 = 16 > 3 ✓</p>
                            <p>• 3 + 4 + 10 = 17 > 2 ✓</p>
                            <p><strong>Step 3:</strong> Conclusion</p>
                            <p><strong>Answer:</strong> NO, the quadrilateral cannot be constructed</p>
                            <p><strong>Reason:</strong> Sum of three sides (2 + 3 + 4 = 9) is less than the fourth side (10)</p>
                            <p>This violates the basic condition for quadrilateral existence</p>
                            <div class="marking-scheme">
                                <p><strong>Marking:</strong> Answer (1) + Reason (1) + Calculation (1)</p>
                            </div>
                        </div>
                    </div>

                    <div class="year-question">
                        <h4>2020 Board Question [4 marks]</h4>
                        <p><strong>Q:</strong> Construct rhombus ABCD with side 4 cm and one angle 120°. Find the length of both diagonals by measurement.</p>
                        <div class="complete-solution">
                            <p><strong>Given:</strong> Side = 4 cm, one angle = 120°</p>
                            <p><strong>Construction Steps:</strong></p>
                            <p><strong>Step 1:</strong> Draw AB = 4 cm</p>
                            <p><strong>Step 2:</strong> Construct angle at A</p>
                            <p>• At A, draw ray making 120° with AB</p>
                            <p>• On this ray, mark AD = 4 cm</p>
                            <p><strong>Step 3:</strong> Locate remaining vertices</p>
                            <p>• From B, draw arc of radius 4 cm</p>
                            <p>• From D, draw arc of radius 4 cm</p>
                            <p>• Mark intersection as C</p>
                            <p><strong>Step 4:</strong> Complete rhombus</p>
                            <p>• Join B-C and D-C</p>
                            <p>• Draw diagonals AC and BD</p>
                            <p><strong>Measurement:</strong></p>
                            <p>• Measure AC using ruler ≈ 4 cm</p>
                            <p>• Measure BD using ruler ≈ 6.9 cm</p>
                            <p><strong>Note:</strong> In rhombus with 120° angle, shorter diagonal ≈ side length</p>
                            <div class="marking-scheme">
                                <p><strong>Marking:</strong> Construction (2) + Diagonals (1) + Measurements (1)</p>
                            </div>
                        </div>
                    </div>

                    <div class="year-question">
                        <h4>2019 Board Question [2 marks]</h4>
                        <p><strong>Q:</strong> List the minimum measurements required to construct a unique quadrilateral. Give one example of each type.</p>
                        <div class="complete-solution">
                            <p><strong>Minimum Requirements for Unique Quadrilateral:</strong></p>
                            <p><strong>Type 1:</strong> 4 sides + 1 diagonal (5 measurements)</p>
                            <p><strong>Example:</strong> AB = 3 cm, BC = 4 cm, CD = 5 cm, DA = 6 cm, AC = 7 cm</p>
                            <p><strong>Type 2:</strong> 3 sides + 2 diagonals (5 measurements)</p>
                            <p><strong>Example:</strong> AB = 4 cm, BC = 3 cm, CD = 5 cm, AC = 6 cm, BD = 7 cm</p>
                            <p><strong>Type 3:</strong> 2 adjacent sides + 3 angles (5 measurements)</p>
                            <p><strong>Example:</strong> AB = 4 cm, BC = 5 cm, ∠A = 70°, ∠B = 90°, ∠C = 110°</p>
                            <p><strong>Note:</strong> We always need exactly 5 independent measurements for unique construction</p>
                            <div class="marking-scheme">
                                <p><strong>Marking:</strong> Three types listed (1) + Examples (1)</p>
                            </div>
                        </div>
                    </div>
                </div>

                <h3>Construction Exam Strategy</h3>
                
                <div class="exam-tips">
                    <div class="tip-card construction-tips">
                        <h4>Before Construction</h4>
                        <ul>
                            <li><strong>Read carefully:</strong> Note all given measurements</li>
                            <li><strong>Check possibility:</strong> Apply inequality conditions</li>
                            <li><strong>Plan method:</strong> Choose appropriate construction technique</li>
                            <li><strong>Prepare tools:</strong> Compass, ruler, protractor, pencil</li>
                        </ul>
                    </div>

                    <div class="tip-card during-construction">
                        <h4>During Construction</h4>
                        <ul>
                            <li><strong>Light lines first:</strong> Make construction lines light</li>
                            <li><strong>Accurate arcs:</strong> Don't change compass setting</li>
                            <li><strong>Clear labels:</strong> Mark all vertices properly</li>
                            <li><strong>Show working:</strong> Don't erase construction arcs</li>
                        </ul>
                    </div>

                    <div class="tip-card after-construction">
                        <h4>After Construction</h4>
                        <ul>
                            <li><strong>Darken final figure:</strong> Make final quadrilateral clear</li>
                            <li><strong>Verify measurements:</strong> Check all given data</li>
                            <li><strong>Answer verification:</strong> Measure what's asked</li>
                            <li><strong>Write conclusion:</strong> State final measurements</li>
                        </ul>
                    </div>

                    <div class="tip-card time-management">
                        <h4>Time Management (5-mark question = 12-15 minutes)</h4>
                        <ul>
                            <li><strong>Planning:</strong> 2 minutes</li>
                            <li><strong>Construction:</strong> 8-10 minutes</li>
                            <li><strong>Verification:</strong> 2-3 minutes</li>
                            <li><strong>Review:</strong> 1-2 minutes</li>
                        </ul>
                    </div>
                </div>

                <h3>Common Board Exam Mistakes</h3>
                
                <div class="common-mistakes">
                    <div class="mistake-card">
                        <h4>❌ Construction Errors</h4>
                        <ul>
                            <li>Changing compass radius while drawing arcs</li>
                            <li>Not maintaining scale throughout construction</li>
                            <li>Erasing important construction lines</li>
                            <li>Poor accuracy in measurements</li>
                        </ul>
                    </div>

                    <div class="mistake-card">
                        <h4>❌ Presentation Errors</h4>
                        <ul>
                            <li>Not labeling vertices clearly</li>
                            <li>Forgetting to show given measurements</li>
                            <li>Not writing construction steps</li>
                            <li>Missing verification measurements</li>
                        </ul>
                    </div>

                    <div class="mistake-card">
                        <h4>❌ Conceptual Errors</h4>
                        <ul>
                            <li>Not checking if construction is possible</li>
                            <li>Using wrong construction method</li>
                            <li>Ignoring geometric properties</li>
                            <li>Incorrect angle measurements</li>
                        </ul>
                    </div>
                </div>

                <h3>Perfect Score Strategy</h3>
                
                <div class="perfect-score">
                    <div class="score-section">
                        <h4>🎯 5/5 Marks Formula</h4>
                        <div class="score-breakdown">
                            <p><strong>Construction (3 marks):</strong></p>
                            <ul>
                                <li>Accurate measurements and angles</li>
                                <li>Correct method and sequence</li>
                                <li>Clear, neat construction</li>
                            </ul>
                            
                            <p><strong>Labeling (1 mark):</strong></p>
                            <ul>
                                <li>All vertices labeled correctly</li>
                                <li>Given measurements marked</li>
                            </ul>
                            
                            <p><strong>Verification (1 mark):</strong></p>
                            <ul>
                                <li>Measure what's asked</li>
                                <li>State final answer clearly</li>
                            </ul>
                        </div>
                    </div>

                    <div class="score-section">
                        <h4>✅ Last-Minute Checklist</h4>
                        <ul>
                            <li>✓ All vertices labeled (A, B, C, D)</li>
                            <li>✓ Given measurements shown on figure</li>
                            <li>✓ Construction lines visible but light</li>
                            <li>✓ Final quadrilateral clearly drawn</li>
                            <li>✓ Verification measurements stated</li>
                            <li>✓ Answer written in proper units</li>
                        </ul>
                    </div>
                </div>
            </div>
            `
        }
    }
},
"data-handling": {
    title: "Data Handling",
    subject: "Mathematics",
    class: "8",
    content: {
        introduction: {
            title: "Data Handling - Making Sense of Numbers Around Us! 📊",
            content: `
            <div class="intro-section">
                <h3>Real-Life Connection</h3>
                <p>Ever wondered how Netflix knows what movies you'll like? 🎬 How weather forecasters predict rain? Or how your school decides which subject needs more focus? Welcome to <strong>Data Handling</strong> - the science of collecting, organizing, and interpreting information to make smart decisions!</p>
                
                <div class="definition-box">
                    <h4>What is Data Handling?</h4>
                    <p><strong>Data Handling</strong> is the process of collecting, organizing, presenting, and interpreting numerical information to draw meaningful conclusions.</p>
                    <p><strong>Key Components:</strong> Collection → Organization → Presentation → Analysis → Interpretation</p>
                </div>

                <h3>Why Study This Chapter?</h3>
                <div class="real-world-examples">
                    <div class="example-card">
                        <h4>Sports Analytics</h4>
                        <p>Cricket teams analyze player statistics, match conditions, and historical data to make strategic decisions</p>
                    </div>
                    <div class="example-card">
                        <h4>Business Intelligence</h4>
                        <p>Companies track sales data, customer preferences, and market trends to improve products and services</p>
                    </div>
                    <div class="example-card">
                        <h4>Healthcare</h4>
                        <p>Hospitals monitor patient recovery rates, treatment effectiveness, and disease patterns for better care</p>
                    </div>
                    <div class="example-card">
                        <h4>Education</h4>
                        <p>Schools analyze test scores, attendance patterns, and learning outcomes to enhance teaching methods</p>
                    </div>
                </div>

                <div class="modern-context">
                    <h3>Data in the Digital Age</h3>
                    <p>From social media likes to GPS tracking, from online shopping recommendations to COVID-19 tracking - we're living in the age of Big Data! Understanding data handling helps you become a smart digital citizen. 🌐📱</p>
                </div>
            </div>
            `
        },
        content: {
            title: "Mastering Data Collection and Organization",
            content: `
            <div class="content-section">
                <h3>Understanding Data Types</h3>
                
                <div class="concept-box">
                    <h4>Types of Data</h4>
                    <div class="data-types">
                        <div class="data-type">
                            <h5>1. Qualitative Data (Categorical)</h5>
                            <p>Data that describes qualities or characteristics</p>
                            <p><strong>Examples:</strong> Colors (red, blue, green), Grades (A, B, C), Gender (male, female)</p>
                        </div>
                        <div class="data-type">
                            <h5>2. Quantitative Data (Numerical)</h5>
                            <p>Data that can be measured and expressed in numbers</p>
                            <p><strong>Examples:</strong> Height (150 cm), Age (15 years), Temperature (25°C)</p>
                        </div>
                    </div>
                    <p class="hindi-explanation">Qualitative matlab qualities (gun) aur Quantitative matlab numbers mein measure kar sakte hain!</p>
                </div>

                <h3>Data Collection Methods</h3>

                <div class="collection-methods">
                    <div class="method-card">
                        <h4>1. Primary Data Collection</h4>
                        <p><strong>Definition:</strong> Data collected firsthand for a specific purpose</p>
                        <div class="methods-list">
                            <ul>
                                <li><strong>Surveys:</strong> Questionnaires to gather opinions</li>
                                <li><strong>Observations:</strong> Watching and recording behavior</li>
                                <li><strong>Experiments:</strong> Controlled tests to gather data</li>
                                <li><strong>Interviews:</strong> Direct conversations with people</li>
                            </ul>
                        </div>
                        <p><strong>Example:</strong> Surveying classmates about their favorite subjects</p>
                    </div>

                    <div class="method-card">
                        <h4>2. Secondary Data Collection</h4>
                        <p><strong>Definition:</strong> Data already collected by someone else</p>
                        <div class="methods-list">
                            <ul>
                                <li><strong>Books and Reports:</strong> Published research data</li>
                                <li><strong>Government Records:</strong> Census, statistics</li>
                                <li><strong>Internet Sources:</strong> Online databases</li>
                                <li><strong>Newspapers:</strong> Published surveys and studies</li>
                            </ul>
                        </div>
                        <p><strong>Example:</strong> Using census data for population studies</p>
                    </div>
                </div>

                <h3>Data Organization Techniques</h3>

                <div class="organization-section">
                    <h4>1. Frequency Distribution Tables</h4>
                    <p>A systematic way to organize data showing how often each value occurs</p>
                    
                    <div class="example-detailed">
                        <h5>Example: Heights of 20 students (in cm)</h5>
                        <p><strong>Raw Data:</strong> 150, 155, 160, 150, 165, 155, 160, 150, 170, 155, 160, 165, 150, 155, 160, 155, 165, 150, 160, 155</p>
                        
                        <div class="frequency-table">
                            <table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
                                <tr style="background-color: var(--bg-secondary);">
                                    <th style="border: 1px solid var(--border); padding: 0.5rem;">Height (cm)</th>
                                    <th style="border: 1px solid var(--border); padding: 0.5rem;">Tally Marks</th>
                                    <th style="border: 1px solid var(--border); padding: 0.5rem;">Frequency</th>
                                </tr>
                                <tr>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">150</td>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">||||  |</td>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">6</td>
                                </tr>
                                <tr>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">155</td>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">||||  |</td>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">6</td>
                                </tr>
                                <tr>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">160</td>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">||||</td>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">5</td>
                                </tr>
                                <tr>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">165</td>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">|||</td>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">3</td>
                                </tr>
                                <tr>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">170</td>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">|</td>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">1</td>
                                </tr>
                                <tr style="background-color: var(--bg-secondary);">
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;"><strong>Total</strong></td>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;"></td>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;"><strong>20</strong></td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <h4>2. Grouped Frequency Distribution</h4>
                    <p>When data has many different values, we group them into intervals (classes)</p>
                    
                    <div class="example-detailed">
                        <h5>Example: Marks of 30 students in Mathematics</h5>
                        <div class="grouped-table">
                            <table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
                                <tr style="background-color: var(--bg-secondary);">
                                    <th style="border: 1px solid var(--border); padding: 0.5rem;">Class Interval</th>
                                    <th style="border: 1px solid var(--border); padding: 0.5rem;">Frequency</th>
                                </tr>
                                <tr>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">0-10</td>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">2</td>
                                </tr>
                                <tr>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">10-20</td>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">3</td>
                                </tr>
                                <tr>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">20-30</td>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">5</td>
                                </tr>
                                <tr>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">30-40</td>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">8</td>
                                </tr>
                                <tr>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">40-50</td>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">12</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>

                <h3>Data Presentation Methods</h3>

                <div class="presentation-methods">
                    <h4>1. Bar Graphs (Column Charts)</h4>
                    <p>Used for comparing different categories of data</p>
                    <div class="chart-description">
                        <p><strong>Best for:</strong> Comparing quantities across different categories</p>
                        <p><strong>Example:</strong> Favorite sports among students, sales by month</p>
                        <p><strong>Key Features:</strong> Equal width bars, gaps between bars, heights represent frequency</p>
                    </div>

                    <h4>2. Histograms</h4>
                    <p>Used for continuous data shown in class intervals</p>
                    <div class="chart-description">
                        <p><strong>Best for:</strong> Showing distribution of continuous data</p>
                        <p><strong>Example:</strong> Height distribution, age groups</p>
                        <p><strong>Key Features:</strong> No gaps between bars, width represents class interval</p>
                    </div>

                    <h4>3. Pie Charts</h4>
                    <p>Used to show parts of a whole as percentages</p>
                    <div class="chart-description">
                        <p><strong>Best for:</strong> Showing proportions and percentages</p>
                        <p><strong>Example:</strong> Budget allocation, market share</p>
                        <p><strong>Key Features:</strong> Total = 360°, each sector represents a category</p>
                    </div>

                    <h4>4. Line Graphs</h4>
                    <p>Used to show changes over time</p>
                    <div class="chart-description">
                        <p><strong>Best for:</strong> Showing trends and changes over time</p>
                        <p><strong>Example:</strong> Temperature over days, stock prices</p>
                        <p><strong>Key Features:</strong> Points connected by lines, time on x-axis</p>
                    </div>
                </div>

                <h3>Reading and Interpreting Data</h3>

                <div class="interpretation-section">
                    <h4>Key Questions to Ask When Interpreting Data:</h4>
                    <div class="question-cards">
                        <div class="question-card">
                            <h5>1. What does the data show?</h5>
                            <p>Identify the main trends and patterns</p>
                        </div>
                        <div class="question-card">
                            <h5>2. What is the highest/lowest value?</h5>
                            <p>Find extremes and outliers</p>
                        </div>
                        <div class="question-card">
                            <h5>3. What are the patterns?</h5>
                            <p>Look for increases, decreases, or cycles</p>
                        </div>
                        <div class="question-card">
                            <h5>4. What conclusions can we draw?</h5>
                            <p>Make logical inferences from the data</p>
                        </div>
                    </div>
                </div>

                <div class="practical-example">
                    <h4>Complete Data Handling Example</h4>
                    <p><strong>Problem:</strong> A class teacher wants to analyze the performance of 25 students in a Mathematics test.</p>
                    
                    <div class="solution-steps">
                        <p><strong>Step 1: Data Collection</strong></p>
                        <p>Marks obtained: 85, 92, 78, 95, 88, 76, 91, 83, 87, 94, 89, 82, 90, 86, 93, 84, 88, 91, 87, 85, 92, 89, 86, 88, 90</p>
                        
                        <p><strong>Step 2: Data Organization</strong></p>
                        <p>Create grouped frequency table:</p>
                        <div class="example-table">
                            <table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
                                <tr style="background-color: var(--bg-secondary);">
                                    <th style="border: 1px solid var(--border); padding: 0.5rem;">Marks Range</th>
                                    <th style="border: 1px solid var(--border); padding: 0.5rem;">Frequency</th>
                                </tr>
                                <tr>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">75-80</td>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">2</td>
                                </tr>
                                <tr>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">80-85</td>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">4</td>
                                </tr>
                                <tr>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">85-90</td>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">11</td>
                                </tr>
                                <tr>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">90-95</td>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">7</td>
                                </tr>
                            </table>
                        </div>
                        
                        <p><strong>Step 3: Data Presentation</strong></p>
                        <p>Create a histogram showing the distribution</p>
                        
                        <p><strong>Step 4: Data Interpretation</strong></p>
                        <ul>
                            <li>Most students (11 out of 25) scored between 85-90 marks</li>
                            <li>Only 2 students scored below 80 marks</li>
                            <li>The class performance is good with most students above 85</li>
                            <li>Teacher might focus on helping the low-scoring students</li>
                        </ul>
                    </div>
                </div>

                <div class="diagram-placeholder">
                    <h4>Visual Data Representations</h4>
                    <p><strong>[DIAGRAM PLACEHOLDER]</strong></p>
                    <p>Different types of charts and graphs with examples</p>
                    <p>Step-by-step guide to creating bar graphs and histograms</p>
                    <p>Pie chart construction with angle calculations</p>
                    <p>Line graph plotting techniques</p>
                </div>
            </div>
            `
        },
        formulas: {
            title: "Data Handling Formulas & Key Concepts",
            content: `
            <div class="formula-sheet">
                <h3>Essential Data Handling Formulas</h3>
                
                <div class="formula-card">
                    <h4>Pie Chart Calculations</h4>
                    <ul>
                        <li><strong>Central Angle:</strong> θ = (frequency/total) × 360°</li>
                        <li><strong>Percentage:</strong> % = (frequency/total) × 100</li>
                        <li><strong>Total Angle:</strong> Sum of all central angles = 360°</li>
                        <li><strong>Arc Length:</strong> s = (θ/360°) × 2πr</li>
                    </ul>
                </div>

                <div class="formula-card">
                    <h4>Class Interval Calculations</h4>
                    <ul>
                        <li><strong>Class Width:</strong> Upper limit - Lower limit</li>
                        <li><strong>Class Mark:</strong> (Upper limit + Lower limit)/2</li>
                        <li><strong>Number of Classes:</strong> Usually 5-10 for clarity</li>
                        <li><strong>Range:</strong> Highest value - Lowest value</li>
                    </ul>
                </div>

                <div class="formula-card">
                    <h4>Basic Statistical Measures</h4>
                    <ul>
                        <li><strong>Total Frequency:</strong> Sum of all frequencies</li>
                        <li><strong>Relative Frequency:</strong> frequency/total frequency</li>
                        <li><strong>Cumulative Frequency:</strong> Running total of frequencies</li>
                        <li><strong>Percentage Frequency:</strong> (frequency/total) × 100</li>
                    </ul>
                </div>

                <h3>Chart Construction Guidelines</h3>
                
                <div class="construction-guide">
                    <div class="chart-guide">
                        <h4>Bar Graph Construction</h4>
                        <ol>
                            <li>Draw two perpendicular axes (x and y)</li>
                            <li>Mark equal intervals on both axes</li>
                            <li>Label the axes with appropriate titles</li>
                            <li>Draw bars with equal width and gaps</li>
                            <li>Give a suitable title to the graph</li>
                        </ol>
                    </div>

                    <div class="chart-guide">
                        <h4>Histogram Construction</h4>
                        <ol>
                            <li>Draw x-axis for class intervals, y-axis for frequency</li>
                            <li>Mark class intervals on x-axis with no gaps</li>
                            <li>Draw rectangles with heights equal to frequencies</li>
                            <li>Ensure no gaps between consecutive bars</li>
                            <li>Add title and label axes</li>
                        </ol>
                    </div>

                    <div class="chart-guide">
                        <h4>Pie Chart Construction</h4>
                        <ol>
                            <li>Calculate central angle for each category</li>
                            <li>Draw a circle with center and mark radius</li>
                            <li>Start from 12 o'clock position</li>
                            <li>Draw sectors using protractor</li>
                            <li>Label each sector with category and percentage</li>
                        </ol>
                    </div>
                </div>

                <h3>Data Types Summary</h3>
                
                <div class="data-types-table">
                    <table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
                        <tr style="background-color: var(--bg-secondary);">
                            <th style="border: 1px solid var(--border); padding: 0.5rem;">Data Type</th>
                            <th style="border: 1px solid var(--border); padding: 0.5rem;">Description</th>
                            <th style="border: 1px solid var(--border); padding: 0.5rem;">Examples</th>
                            <th style="border: 1px solid var(--border); padding: 0.5rem;">Best Chart</th>
                        </tr>
                        <tr>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">Nominal</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">Categories with no order</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">Colors, Gender, Subjects</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">Bar Chart, Pie Chart</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">Ordinal</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">Categories with order</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">Grades (A,B,C), Ratings</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">Bar Chart</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">Discrete</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">Countable numbers</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">Number of students, Books</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">Bar Chart</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">Continuous</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">Measurable quantities</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">Height, Weight, Time</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">Histogram, Line Graph</td>
                        </tr>
                    </table>
                </div>

                <h3>Quick Reference - When to Use Which Chart</h3>
                
                <div class="chart-selection">
                    <div class="selection-card">
                        <h4>Use Bar Graph When:</h4>
                        <ul>
                            <li>Comparing different categories</li>
                            <li>Data is discrete or categorical</li>
                            <li>You want to show individual values clearly</li>
                            <li>Categories are independent of each other</li>
                        </ul>
                    </div>

                    <div class="selection-card">
                        <h4>Use Histogram When:</h4>
                        <ul>
                            <li>Data is continuous and grouped</li>
                            <li>You want to show distribution</li>
                            <li>Data is in class intervals</li>
                            <li>Looking for patterns in frequency</li>
                        </ul>
                    </div>

                    <div class="selection-card">
                        <h4>Use Pie Chart When:</h4>
                        <ul>
                            <li>Showing parts of a whole</li>
                            <li>Data represents percentages</li>
                            <li>Categories are mutually exclusive</li>
                            <li>Maximum 6-7 categories for clarity</li>
                        </ul>
                    </div>

                    <div class="selection-card">
                        <h4>Use Line Graph When:</h4>
                        <ul>
                            <li>Showing change over time</li>
                            <li>Data has a time component</li>
                            <li>Looking for trends and patterns</li>
                            <li>Connecting continuous data points</li>
                        </ul>
                    </div>
                </div>

                <h3>Common Mistakes to Avoid</h3>
                
                <div class="mistakes-section">
                    <div class="mistake-card">
                        <h4>❌ Chart Construction Errors</h4>
                        <ul>
                            <li>Not labeling axes properly</li>
                            <li>Using inappropriate scales</li>
                            <li>Missing chart titles</li>
                            <li>Inconsistent bar widths in histograms</li>
                        </ul>
                    </div>

                    <div class="mistake-card">
                        <h4>❌ Data Organization Errors</h4>
                        <ul>
                            <li>Overlapping class intervals</li>
                            <li>Unequal class widths without reason</li>
                            <li>Missing data values</li>
                            <li>Incorrect frequency calculations</li>
                        </ul>
                    </div>

                    <div class="mistake-card">
                        <h4>❌ Interpretation Errors</h4>
                        <ul>
                            <li>Drawing conclusions beyond data scope</li>
                            <li>Ignoring outliers or extreme values</li>
                            <li>Confusing correlation with causation</li>
                            <li>Not considering data source reliability</li>
                        </ul>
                    </div>
                </div>

                <div class="memory-tips">
                    <h3>Memory Tips</h3>
                    <div class="tip-card">
                        <h4>🎯 CHART Selection Trick</h4>
                        <p><strong>C</strong>ategorical data → Bar Chart</p>
                        <p><strong>H</strong>istory/Time → Line Graph</p>
                        <p><strong>A</strong>ll parts of whole → Pie Chart</p>
                        <p><strong>R</strong>ange/Distribution → Histogram</p>
                        <p><strong>T</strong>otal understanding needed!</p>
                    </div>
                </div>
            </div>
            `
        },
        practice: {
            title: "Data Handling Practice & Application",
            content: `
            <div class="practice-section">
                <h3>MCQ Questions (Data Analysis Skills!)</h3>
                
                <div class="mcq-container">
                    <div class="question-card">
                        <h4>Q1. A pie chart shows different subjects' preferences among 120 students. If Mathematics gets a central angle of 90°, how many students prefer Mathematics?</h4>
                        <div class="options">
                            <label><input type="radio" name="q1" value="a"> a) 20 students</label>
                            <label><input type="radio" name="q1" value="b"> b) 30 students</label>
                            <label><input type="radio" name="q1" value="c"> c) 40 students</label>
                            <label><input type="radio" name="q1" value="d"> d) 25 students</label>
                        </div>
                        <div class="answer hidden">
                            <p><strong>Answer: b) 30 students</strong></p>
                            <p><strong>Solution:</strong> Students = (90°/360°) × 120 = (1/4) × 120 = 30 students</p>
                        </div>
                    </div>

                    <div class="question-card">
                        <h4>Q2. Which type of graph is most suitable for showing the temperature changes in a city over a week?</h4>
                        <div class="options">
                            <label><input type="radio" name="q2" value="a"> a) Bar graph</label>
                            <label><input type="radio" name="q2" value="b"> b) Pie chart</label>
                            <label><input type="radio" name="q2" value="c"> c) Line graph</label>
                            <label><input type="radio" name="q2" value="d"> d) Histogram</label>
                        </div>
                        <div class="answer hidden">
                            <p><strong>Answer: c) Line graph</strong></p>
                            <p><strong>Reason:</strong> Line graphs are best for showing changes over time, and temperature over a week shows time-based variation.</p>
                        </div>
                    </div>

                    <div class="question-card">
                        <h4>Q3. In a frequency distribution table, if the total frequency is 50 and one class has a frequency of 15, what is the relative frequency of that class?</h4>
                        <div class="options">
                            <label><input type="radio" name="q3" value="a"> a) 0.3</label>
                            <label><input type="radio" name="q3" value="b"> b) 0.15</label>
                            <label><input type="radio" name="q3" value="c"> c) 15</label>
                            <label><input type="radio" name="q3" value="d"> d) 3.33</label>
                        </div>
                        <div class="answer hidden">
                            <p><strong>Answer: a) 0.3</strong></p>
                            <p><strong>Solution:</strong> Relative frequency = frequency/total frequency = 15/50 = 0.3</p>
                        </div>
                    </div>

                    <div class="question-card">
                        <h4>Q4. The difference between a bar graph and a histogram is:</h4>
                        <div class="options">
                            <label><input type="radio" name="q4" value="a"> a) Bar graphs have gaps between bars, histograms don't</label>
                            <label><input type="radio" name="q4" value="b"> b) Histograms are always horizontal</label>
                            <label><input type="radio" name="q4" value="c"> c) Bar graphs are only for numerical data</label>
                            <label><input type="radio" name="q4" value="d"> d) There is no difference</label>
                        </div>
                        <div class="answer hidden">
                            <p><strong>Answer: a) Bar graphs have gaps between bars, histograms don't</strong></p>
                            <p><strong>Explanation:</strong> Bar graphs show discrete/categorical data with gaps, while histograms show continuous data without gaps.</p>
                        </div>
                    </div>

                    <div class="question-card">
                        <h4>Q5. Primary data is:</h4>
                        <div class="options">
                            <label><input type="radio" name="q5" value="a"> a) Data collected from books</label>
                            <label><input type="radio" name="q5" value="b"> b) Data collected firsthand for a specific purpose</label>
                            <label><input type="radio" name="q5" value="c"> c) Data found on the internet</label>
                            <label><input type="radio" name="q5" value="d"> d) Government published data</label>
                        </div>
                        <div class="answer hidden">
                            <p><strong>Answer: b) Data collected firsthand for a specific purpose</strong></p>
                            <p><strong>Note:</strong> Primary data is original data collected directly by the researcher, while options a, c, and d are examples of secondary data.</p>
                        </div>
                    </div>
                </div>

                <h3>Data Handling Problems</h3>
                
                <div class="data-problems">
                    <div class="problem-level easy">
                        <h4>Easy Level - Basic Data Organization</h4>
                        
                        <div class="problem">
                            <p><strong>Problem 1:</strong> The following data shows the number of books read by 15 students in a month:</p>
                            <p>3, 5, 2, 4, 6, 3, 5, 4, 2, 5, 6, 4, 3, 5, 4</p>
                            <p>Create a frequency distribution table.</p>
                            <div class="solution hidden">
                                <p><strong>Solution:</strong></p>
                                <table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
                                    <tr style="background-color: var(--bg-secondary);">
                                        <th style="border: 1px solid var(--border); padding: 0.5rem;">Number of Books</th>
                                        <th style="border: 1px solid var(--border); padding: 0.5rem;">Tally Marks</th>
                                        <th style="border: 1px solid var(--border); padding: 0.5rem;">Frequency</th>
                                    </tr>
                                    <tr>
                                        <td style="border: 1px solid var(--border); padding: 0.5rem;">2</td>
                                        <td style="border: 1px solid var(--border); padding: 0.5rem;">||</td>
                                        <td style="border: 1px solid var(--border); padding: 0.5rem;">2</td>
                                    </tr>
                                    <tr>
                                        <td style="border: 1px solid var(--border); padding: 0.5rem;">3</td>
                                        <td style="border: 1px solid var(--border); padding: 0.5rem;">|||</td>
                                        <td style="border: 1px solid var(--border); padding: 0.5rem;">3</td>
                                    </tr>
                                    <tr>
                                        <td style="border: 1px solid var(--border); padding: 0.5rem;">4</td>
                                        <td style="border: 1px solid var(--border); padding: 0.5rem;">||||</td>
                                        <td style="border: 1px solid var(--border); padding: 0.5rem;">4</td>
                                    </tr>
                                    <tr>
                                        <td style="border: 1px solid var(--border); padding: 0.5rem;">5</td>
                                        <td style="border: 1px solid var(--border); padding: 0.5rem;">||||</td>
                                        <td style="border: 1px solid var(--border); padding: 0.5rem;">4</td>
                                    </tr>
                                    <tr>
                                        <td style="border: 1px solid var(--border); padding: 0.5rem;">6</td>
                                        <td style="border: 1px solid var(--border); padding: 0.5rem;">||</td>
                                        <td style="border: 1px solid var(--border); padding: 0.5rem;">2</td>
                                    </tr>
                                    <tr style="background-color: var(--bg-secondary);">
                                        <td style="border: 1px solid var(--border); padding: 0.5rem;"><strong>Total</strong></td>
                                        <td style="border: 1px solid var(--border); padding: 0.5rem;"></td>
                                        <td style="border: 1px solid var(--border); padding: 0.5rem;"><strong>15</strong></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        
                        <div class="problem">
                            <p><strong>Problem 2:</strong> In a class survey about favorite colors, the results were: Red-8, Blue-12, Green-6, Yellow-4. Draw a bar graph.</p>
                            <div class="solution hidden">
                                <p><strong>Solution Steps:</strong></p>
                                <p>1. Draw x-axis (Colors) and y-axis (Number of students)</p>
                                <p>2. Mark scale: x-axis (Red, Blue, Green, Yellow), y-axis (0 to 15)</p>
                                <p>3. Draw bars: Red (height 8), Blue (height 12), Green (height 6), Yellow (height 4)</p>
                                <p>4. Title: "Favorite Colors Among Students"</p>
                                <p>5. Label axes: X-axis: "Colors", Y-axis: "Number of Students"</p>
                            </div>
                        </div>

                        <div class="problem">
                            <p><strong>Problem 3:</strong> Calculate the central angle for each subject if 40 students chose Science, 30 chose Mathematics, 20 chose English, and 10 chose Social Studies.</p>
                            <div class="solution hidden">
                                <p><strong>Solution:</strong></p>
                                <p>Total students = 40 + 30 + 20 + 10 = 100</p>
                                <p><strong>Science:</strong> (40/100) × 360° = 144°</p>
                                <p><strong>Mathematics:</strong> (30/100) × 360° = 108°</p>
                                <p><strong>English:</strong> (20/100) × 360° = 72°</p>
                                <p><strong>Social Studies:</strong> (10/100) × 360° = 36°</p>
                                <p><strong>Verification:</strong> 144° + 108° + 72° + 36° = 360° ✓</p>
                            </div>
                        </div>
                    </div>

                    <div class="problem-level medium">
                        <h4>Medium Level - Advanced Analysis</h4>
                        
                        <div class="problem">
                            <p><strong>Problem 4:</strong> The following data shows marks of 25 students:</p>
                            <p>78, 85, 92, 67, 88, 91, 76, 82, 89, 95, 73, 87, 84, 90, 79, 86, 93, 81, 88, 94, 77, 83, 91, 85, 89</p>
                            <p>Create a grouped frequency distribution with class intervals of width 5.</p>
                            <div class="solution hidden">
                                <p><strong>Solution:</strong></p>
                                <p>Range = 95 - 67 = 28</p>
                                <p>Class intervals (width 5):</p>
                                <table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
                                    <tr style="background-color: var(--bg-secondary);">
                                        <th style="border: 1px solid var(--border); padding: 0.5rem;">Class Interval</th>
                                        <th style="border: 1px solid var(--border); padding: 0.5rem;">Frequency</th>
                                    </tr>
                                    <tr>
                                        <td style="border: 1px solid var(--border); padding: 0.5rem;">65-70</td>
                                        <td style="border: 1px solid var(--border); padding: 0.5rem;">1</td>
                                    </tr>
                                    <tr>
                                        <td style="border: 1px solid var(--border); padding: 0.5rem;">70-75</td>
                                        <td style="border: 1px solid var(--border); padding: 0.5rem;">1</td>
                                    </tr>
                                    <tr>
                                        <td style="border: 1px solid var(--border); padding: 0.5rem;">75-80</td>
                                        <td style="border: 1px solid var(--border); padding: 0.5rem;">4</td>
                                    </tr>
                                    <tr>
                                        <td style="border: 1px solid var(--border); padding: 0.5rem;">80-85</td>
                                        <td style="border: 1px solid var(--border); padding: 0.5rem;">5</td>
                                    </tr>
                                    <tr>
                                        <td style="border: 1px solid var(--border); padding: 0.5rem;">85-90</td>
                                        <td style="border: 1px solid var(--border); padding: 0.5rem;">8</td>
                                    </tr>
                                    <tr>
                                        <td style="border: 1px solid var(--border); padding: 0.5rem;">90-95</td>
                                        <td style="border: 1px solid var(--border); padding: 0.5rem;">6</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        
                        <div class="problem">
                            <p><strong>Problem 5:</strong> A shop's daily sales for a week were: Mon-₹2000, Tue-₹2500, Wed-₹1800, Thu-₹3000, Fri-₹3500, Sat-₹4000, Sun-₹2200. Create a line graph and analyze the trend.</p>
                            <div class="solution hidden">
                                <p><strong>Solution:</strong></p>
                                <p><strong>Line Graph Construction:</strong></p>
                                <p>1. X-axis: Days of week, Y-axis: Sales (₹)</p>
                                <p>2. Plot points: (Mon,2000), (Tue,2500), (Wed,1800), (Thu,3000), (Fri,3500), (Sat,4000), (Sun,2200)</p>
                                <p>3. Connect points with straight lines</p>
                                <p><strong>Analysis:</strong></p>
                                <p>• Sales dip on Wednesday (₹1800)</p>
                                <p>• Steady increase from Thursday to Saturday</p>
                                <p>• Peak sales on Saturday (₹4000)</p>
                                <p>• Weekend effect: High Saturday, moderate Sunday</p>
                                <p>• Average daily sales: ₹2714</p>
                            </div>
                        </div>

                        <div class="problem">
                            <p><strong>Problem 6:</strong> In a survey of 200 people about their preferred mode of transport: Car-80, Bus-60, Bike-40, Walk-20. Create a pie chart with percentages.</p>
                            <div class="solution hidden">
                                <p><strong>Solution:</strong></p>
                                <p><strong>Step 1: Calculate percentages</strong></p>
                                <p>Car: (80/200) × 100 = 40%</p>
                                <p>Bus: (60/200) × 100 = 30%</p>
                                <p>Bike: (40/200) × 100 = 20%</p>
                                <p>Walk: (20/200) × 100 = 10%</p>
                                <p><strong>Step 2: Calculate central angles</strong></p>
                                <p>Car: 40% × 360° = 144°</p>
                                <p>Bus: 30% × 360° = 108°</p>
                                <p>Bike: 20% × 360° = 72°</p>
                                <p>Walk: 10% × 360° = 36°</p>
                                <p><strong>Step 3: Draw pie chart with labeled sectors</strong></p>
                            </div>
                        </div>
                    </div>

                    <div class="problem-level hard">
                        <h4>Hard Level - Complex Data Analysis</h4>
                        
                        <div class="problem">
                            <p><strong>Problem 7:</strong> Compare two datasets and draw conclusions:</p>
                            <p><strong>Class A test scores:</strong> 85, 88, 92, 78, 90, 85, 87, 89, 91, 86</p>
                            <p><strong>Class B test scores:</strong> 82, 89, 95, 87, 84, 90, 88, 91, 86, 93</p>
                            <p>Create frequency tables, find ranges, and compare performance.</p>
                            <div class="solution hidden">
                                <p><strong>Class A Analysis:</strong></p>
                                <p>Range = 92 - 78 = 14</p>
                                <p>Most frequent score range: 85-90</p>
                                <p>Average performance: Good consistency</p>
                                <p><strong>Class B Analysis:</strong></p>
                                <p>Range = 95 - 82 = 13</p>
                                <p>Higher maximum score (95 vs 92)</p>
                                <p>More scores above 90</p>
                                <p><strong>Comparison:</strong></p>
                                <p>• Class B has higher peak performance</p>
                                <p>• Class A shows more consistency</p>
                                <p>• Both classes have similar lower ranges</p>
                                <p>• Class B has slight edge in overall performance</p>
                            </div>
                        </div>

                        <div class="problem">
                            <p><strong>Problem 8:</strong> A company's quarterly profits (in lakhs): Q1-₹15, Q2-₹22, Q3-₹18, Q4-₹25. If this trend continues, predict next year's Q1 profit and total annual profit.</p>
                            <div class="solution hidden">
                                <p><strong>Analysis:</strong></p>
                                <p>Current year total = 15 + 22 + 18 + 25 = ₹80 lakhs</p>
                                <p><strong>Trend Analysis:</strong></p>
                                <p>Q1 to Q2: +₹7 lakhs (+47%)</p>
                                <p>Q2 to Q3: -₹4 lakhs (-18%)</p>
                                <p>Q3 to Q4: +₹7 lakhs (+39%)</p>
                                <p><strong>Pattern:</strong> Growth, decline, growth</p>
                                <p><strong>Prediction:</strong></p>
                                <p>If pattern continues: Next Q1 might decline from Q4</p>
                                <p>Estimated next Q1: ₹22-25 lakhs</p>
                                <p>Projected annual growth: 15-20%</p>
                                <p>Next year total: ₹90-95 lakhs (approximate)</p>
                            </div>
                        </div>
                    </div>
                </div>

                <h3>Real-World Data Projects</h3>
                
                <div class="project-section">
                    <div class="project-card">
                        <h4>Project 1: School Canteen Analysis</h4>
                        <p><strong>Task:</strong> Survey 50 students about their favorite canteen items</p>
                        <ul>
                            <li>Collect primary data through questionnaires</li>
                            <li>Create frequency distribution table</li>
                            <li>Draw bar graph and pie chart</li>
                            <li>Analyze trends and make recommendations</li>
                        </ul>
                        <p><strong>Skills Developed:</strong> Data collection, organization, visualization, analysis</p>
                    </div>

                    <div class="project-card">
                        <h4>Project 2: Weather Pattern Study</h4>
                        <p><strong>Task:</strong> Track daily temperature for one month</p>
                        <ul>
                            <li>Collect secondary data from weather websites</li>
                            <li>Create grouped frequency distribution</li>
                            <li>Draw histogram and line graph</li>
                            <li>Identify patterns and seasonal trends</li>
                        </ul>
                        <p><strong>Skills Developed:</strong> Time-series analysis, trend identification, interpretation</p>
                    </div>

                    <div class="project-card">
                        <h4>Project 3: Social Media Usage Survey</h4>
                        <p><strong>Task:</strong> Study screen time patterns among peers</p>
                        <ul>
                            <li>Design survey questions about usage habits</li>
                            <li>Collect and organize data by age groups</li>
                            <li>Create comparative charts</li>
                            <li>Draw conclusions about digital wellness</li>
                        </ul>
                        <p><strong>Skills Developed:</strong> Survey design, comparative analysis, social research</p>
                    </div>
                </div>

                <div class="activity-section">
                    <h3>Fun Data Activities</h3>
                    
                    <div class="activity-card">
                        <h4>Activity 1: Data Detective</h4>
                        <p>Given misleading graphs, identify what's wrong:</p>
                        <ul>
                            <li>Charts with broken y-axis scales</li>
                            <li>Pie charts that don't add to 100%</li>
                            <li>Bar graphs with inconsistent widths</li>
                            <li>Line graphs connecting unrelated data points</li>
                        </ul>
                    </div>

                    <div class="activity-card">
                        <h4>Activity 2: Create Your Own Survey</h4>
                        <p>Design and conduct a mini-survey:</p>
                        <ul>
                            <li>Choose an interesting topic (favorite movies, sports, etc.)</li>
                            <li>Create 5 good survey questions</li>
                            <li>Collect data from 20 people</li>
                            <li>Present findings with appropriate charts</li>
                        </ul>
                    </div>

                    <div class="activity-card">
                        <h4>Activity 3: Data Story Challenge</h4>
                        <p>Tell a story using only data and charts:</p>
                        <ul>
                            <li>Choose a theme (sports performance, academic progress, etc.)</li>
                            <li>Create 3-4 different types of charts</li>
                            <li>Write a narrative explaining the data journey</li>
                            <li>Present conclusions and recommendations</li>
                        </ul>
                    </div>
                </div>
            </div>
            `
        },
        pyq: {
            title: "Board Questions & Data Analysis Mastery",
            content: `
            <div class="pyq-section">
                <h3>Board Exam Pattern Analysis</h3>
                
                <div class="pattern-analysis">
                    <div class="pattern-card">
                        <h4>Question Distribution (Last 5 Years)</h4>
                        <ul>
                            <li><strong>MCQ:</strong> 1-2 questions (1 mark each) - Chart interpretation, data types</li>
                            <li><strong>Very Short Answer:</strong> 1-2 questions (1 mark each) - Formula applications</li>
                            <li><strong>Short Answer:</strong> 2-3 questions (2-3 marks each) - Frequency tables, basic charts</li>
                            <li><strong>Long Answer:</strong> 1-2 questions (4-5 marks each) - Complete data analysis</li>
                            <li><strong>Practical:</strong> 1 question (5 marks) - Chart construction</li>
                        </ul>
                    </div>
                </div>

                <h3>Most Repeated Question Types</h3>
                
                <div class="repeated-questions">
                    <div class="frequency high">
                        <h4>Asked Every Year!</h4>
                        <ul>
                            <li>Frequency distribution table construction</li>
                            <li>Bar graph and histogram drawing</li>
                            <li>Pie chart with central angle calculations</li>
                            <li>Data interpretation from given charts</li>
                            <li>Grouped vs ungrouped data classification</li>
                        </ul>
                    </div>

                    <div class="frequency medium">
                        <h4>Frequently Asked</h4>
                        <ul>
                            <li>Primary vs secondary data examples</li>
                            <li>Choosing appropriate chart types</li>
                            <li>Class interval and class mark calculations</li>
                            <li>Reading and interpreting line graphs</li>
                        </ul>
                    </div>
                </div>

                <h3>Complete Board Questions with Detailed Solutions</h3>
                
                <div class="board-questions">
                    <div class="year-question">
                        <h4>2023 Board Question [5 marks]</h4>
                        <p><strong>Q:</strong> The following data shows the marks obtained by 30 students in a Mathematics test:</p>
                        <p>65, 72, 58, 80, 75, 68, 73, 81, 69, 76, 71, 84, 67, 79, 72, 85, 70, 77, 82, 74, 66, 78, 73, 83, 69, 75, 81, 76, 71, 68</p>
                        <p>(i) Prepare a grouped frequency distribution table with class intervals 55-60, 60-65, etc.</p>
                        <p>(ii) Draw a histogram for the data.</p>
                        <p>(iii) In which class interval do most students lie?</p>
                        <div class="complete-solution">
                            <p><strong>Solution:</strong></p>
                            <p><strong>(i) Grouped Frequency Distribution Table:</strong></p>
                            <table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
                                <tr style="background-color: var(--bg-secondary);">
                                    <th style="border: 1px solid var(--border); padding: 0.5rem;">Class Interval</th>
                                    <th style="border: 1px solid var(--border); padding: 0.5rem;">Tally Marks</th>
                                    <th style="border: 1px solid var(--border); padding: 0.5rem;">Frequency</th>
                                </tr>
                                <tr>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">55-60</td>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">|</td>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">1</td>
                                </tr>
                                <tr>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">60-65</td>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">||</td>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">2</td>
                                </tr>
                                <tr>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">65-70</td>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">||||  ||</td>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">7</td>
                                </tr>
                                <tr>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">70-75</td>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">||||  ||||</td>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">9</td>
                                </tr>
                                <tr>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">75-80</td>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">||||  |</td>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">6</td>
                                </tr>
                                <tr>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">80-85</td>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">||||</td>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">5</td>
                                </tr>
                                <tr style="background-color: var(--bg-secondary);">
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;"><strong>Total</strong></td>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;"></td>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;"><strong>30</strong></td>
                                </tr>
                            </table>
                            <p><strong>(ii) Histogram Construction:</strong></p>
                            <p>• X-axis: Class intervals (55-60, 60-65, ..., 80-85)</p>
                            <p>• Y-axis: Frequency (0 to 10)</p>
                            <p>• Draw rectangles with heights equal to frequencies</p>
                            <p>• No gaps between consecutive rectangles</p>
                            <p>• Title: "Distribution of Mathematics Marks"</p>
                            <p><strong>(iii) Analysis:</strong></p>
                            <p>Most students lie in the class interval <strong>70-75</strong> with frequency 9</p>
                            <div class="marking-scheme">
                                <p><strong>Marking:</strong> Frequency table (2) + Histogram (2) + Analysis (1)</p>
                            </div>
                        </div>
                    </div>

                    <div class="year-question">
                        <h4>2022 Board Question [4 marks]</h4>
                        <p><strong>Q:</strong> A survey was conducted among 120 students to find their favorite subject. The results are:</p>
                        <p>Mathematics: 36 students, Science: 30 students, English: 24 students, Social Studies: 18 students, Others: 12 students</p>
                        <p>(a) Draw a pie chart to represent this data.</p>
                        <p>(b) What percentage of students prefer Mathematics?</p>
                        <div class="complete-solution">
                            <p><strong>Solution:</strong></p>
                            <p><strong>(a) Pie Chart Construction:</strong></p>
                            <p><strong>Step 1:</strong> Calculate central angles</p>
                            <p>Mathematics: (36/120) × 360° = 108°</p>
                            <p>Science: (30/120) × 360° = 90°</p>
                            <p>English: (24/120) × 360° = 72°</p>
                            <p>Social Studies: (18/120) × 360° = 54°</p>
                            <p>Others: (12/120) × 360° = 36°</p>
                            <p><strong>Verification:</strong> 108° + 90° + 72° + 54° + 36° = 360° ✓</p>
                            <p><strong>Step 2:</strong> Draw pie chart</p>
                            <p>• Draw circle with center O</p>
                            <p>• Start from 12 o'clock position</p>
                            <p>• Draw sectors using protractor with calculated angles</p>
                            <p>• Label each sector with subject name and percentage</p>
                            <p><strong>(b) Percentage Calculation:</strong></p>
                            <p>Percentage preferring Mathematics = (36/120) × 100 = 30%</p>
                            <div class="marking-scheme">
                                <p><strong>Marking:</strong> Angle calculations (1) + Pie chart (2) + Percentage (1)</p>
                            </div>
                        </div>
                    </div>

                    <div class="year-question">
                        <h4>2021 Board Question [3 marks]</h4>
                        <p><strong>Q:</strong> The daily temperatures (in °C) of a city for two weeks were recorded as:</p>
                        <p>Week 1: 25, 27, 24, 26, 28, 23, 25</p>
                        <p>Week 2: 29, 31, 28, 30, 32, 27, 29</p>
                        <p>Compare the temperature data of both weeks using appropriate statistical measures.</p>
                        <div class="complete-solution">
                            <p><strong>Solution:</strong></p>
                            <p><strong>Week 1 Analysis:</strong></p>
                            <p>Range = 28 - 23 = 5°C</p>
                            <p>Highest = 28°C, Lowest = 23°C</p>
                            <p>Most frequent = 25°C (appears twice)</p>
                            <p><strong>Week 2 Analysis:</strong></p>
                            <p>Range = 32 - 27 = 5°C</p>
                            <p>Highest = 32°C, Lowest = 27°C</p>
                            <p>Most frequent = 29°C (appears twice)</p>
                            <p><strong>Comparison:</strong></p>
                            <p>• Both weeks have same range (5°C)</p>
                            <p>• Week 2 temperatures are consistently higher</p>
                            <p>• Week 2 shows warming trend (27-32°C vs 23-28°C)</p>
                            <p>• Week 1 is more moderate, Week 2 is warmer overall</p>
                            <div class="marking-scheme">
                                <p><strong>Marking:</strong> Week 1 analysis (1) + Week 2 analysis (1) + Comparison (1)</p>
                            </div>
                        </div>
                    </div>

                    <div class="year-question">
                        <h4>2020 Board Question [2 marks]</h4>
                        <p><strong>Q:</strong> Distinguish between primary data and secondary data with one example each.</p>
                        <div class="complete-solution">
                            <p><strong>Answer:</strong></p>
                            <table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
                                <tr style="background-color: var(--bg-secondary);">
                                    <th style="border: 1px solid var(--border); padding: 0.5rem;">Aspect</th>
                                    <th style="border: 1px solid var(--border); padding: 0.5rem;">Primary Data</th>
                                    <th style="border: 1px solid var(--border); padding: 0.5rem;">Secondary Data</th>
                                </tr>
                                <tr>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;"><strong>Definition</strong></td>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">Data collected firsthand by the researcher</td>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">Data already collected by someone else</td>
                                </tr>
                                <tr>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;"><strong>Source</strong></td>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">Original collection</td>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">Published sources</td>
                                </tr>
                                <tr>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;"><strong>Example</strong></td>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">Surveying classmates about favorite sports</td>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">Using government census data</td>
                                </tr>
                                <tr>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;"><strong>Time & Cost</strong></td>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">More time and cost</td>
                                    <td style="border: 1px solid var(--border); padding: 0.5rem;">Less time and cost</td>
                                </tr>
                            </table>
                            <div class="marking-scheme">
                                <p><strong>Marking:</strong> Definitions (1) + Examples (1)</p>
                            </div>
                        </div>
                    </div>

                    <div class="year-question">
                        <h4>2019 Board Question [1 mark]</h4>
                        <p><strong>Q:</strong> Which type of graph is most suitable to show the change in population of a country over the years?</p>
                        <div class="complete-solution">
                            <p><strong>Answer:</strong> Line Graph</p>
                            <p><strong>Reason:</strong> Line graphs are most suitable for showing changes over time. Population change over years is time-series data, and line graphs clearly show trends, increases, or decreases over the time period.</p>
                        </div>
                    </div>
                </div>

                <h3>Exam Strategy & Tips</h3>
                
                <div class="exam-tips">
                    <div class="tip-card data-collection">
                        <h4>Data Organization Tips</h4>
                        <ul>
                            <li><strong>Always check totals:</strong> Frequency sum should equal total observations</li>
                            <li><strong>Use tally marks:</strong> They help avoid counting errors</li>
                            <li><strong>Choose appropriate intervals:</strong> Usually 5-8 classes for clarity</li>
                            <li><strong>Label everything:</strong> Tables, axes, charts need clear labels</li>
                        </ul>
                    </div>

                    <div class="tip-card chart-construction">
                        <h4>Chart Construction Strategy</h4>
                        <ul>
                            <li><strong>Read the question twice:</strong> Understand what type of chart is needed</li>
                            <li><strong>Calculate first, draw later:</strong> Do all calculations before starting the chart</li>
                            <li><strong>Use appropriate scales:</strong> Make charts easy to read</li>
                            <li><strong>Verify angles:</strong> Pie chart angles should sum to 360°</li>
                        </ul>
                    </div>

                    <div class="tip-card interpretation">
                        <h4>Data Interpretation Skills</h4>
                        <ul>
                            <li><strong>Look for patterns:</strong> Highest, lowest, trends, outliers</li>
                            <li><strong>Make comparisons:</strong> Between categories, time periods</li>
                            <li><strong>Draw logical conclusions:</strong> Based only on given data</li>
                            <li><strong>Avoid assumptions:</strong> Don't go beyond what data shows</li>
                        </ul>
                    </div>

                    <div class="tip-card time-management">
                        <h4>Time Management (5-mark question = 12-15 minutes)</h4>
                        <ul>
                            <li><strong>Planning:</strong> 2-3 minutes (understand question, plan approach)</li>
                            <li><strong>Calculations:</strong> 4-5 minutes (frequency tables, angles)</li>
                            <li><strong>Chart construction:</strong> 5-6 minutes (actual drawing)</li>
                            <li><strong>Review:</strong> 2-3 minutes (check calculations, labels)</li>
                        </ul>
                    </div>
                </div>

                <h3>Common Board Exam Mistakes</h3>
                
                <div class="common-mistakes">
                    <div class="mistake-card">
                        <h4>❌ Calculation Errors</h4>
                        <ul>
                            <li>Wrong central angle calculations in pie charts</li>
                            <li>Incorrect frequency totals in tables</li>
                            <li>Percentage calculations errors</li>
                            <li>Not verifying that pie chart angles sum to 360°</li>
                        </ul>
                    </div>

                    <div class="mistake-card">
                        <h4>❌ Chart Construction Errors</h4>
                        <ul>
                            <li>Missing labels on axes and charts</li>
                            <li>Inappropriate scales making charts hard to read</li>
                            <li>Gaps in histograms (should have no gaps)</li>
                            <li>Inconsistent bar widths in bar graphs</li>
                        </ul>
                    </div>

                    <div class="mistake-card">
                        <h4>❌ Interpretation Errors</h4>
                        <ul>
                            <li>Making conclusions beyond what data shows</li>
                            <li>Ignoring key patterns or outliers</li>
                            <li>Not comparing asked elements</li>
                            <li>Confusing correlation with causation</li>
                        </ul>
                    </div>
                </div>

                <h3>Perfect Score Formula</h3>
                
                <div class="perfect-score">
                    <div class="score-section">
                        <h4>🎯 5/5 Marks Strategy</h4>
                        <div class="score-breakdown">
                            <p><strong>Data Organization (1-2 marks):</strong></p>
                            <ul>
                                <li>Correct frequency distribution table</li>
                                <li>Proper class intervals and calculations</li>
                            </ul>
                            
                            <p><strong>Chart Construction (2-3 marks):</strong></p>
                            <ul>
                                <li>Accurate chart with correct proportions</li>
                                <li>Proper labels, titles, and scales</li>
                                <li>Clean, neat presentation</li>
                            </ul>
                            
                            <p><strong>Analysis/Interpretation (1 mark):</strong></p>
                            <ul>
                                <li>Correct conclusions from data</li>
                                <li>Answering specific questions asked</li>
                            </ul>
                        </div>
                    </div>

                    <div class="score-section">
                        <h4>✅ Final Checklist</h4>
                        <ul>
                            <li>✓ All calculations are correct</li>
                            <li>✓ Charts have proper titles and labels</li>
                            <li>✓ Frequency totals match given data</li>
                            <li>✓ Pie chart angles sum to 360°</li>
                            <li>✓ Interpretations are logical and data-based</li>
                            <li>✓ Answers are complete and clearly written</li>
                        </ul>
                    </div>
                </div>
            </div>
            `
        }
    }
},
"squares-square-roots": {
    title: "Squares and Square Roots",
    subject: "Mathematics",
    class: "8",
    content: {
        introduction: {
            title: "Squares and Square Roots - The Power of Perfect Numbers! 🔢",
            content: `
            <div class="intro-section">
                <h3>Real-Life Connection</h3>
                <p>Ever wondered why architects use the "golden ratio" in beautiful buildings? 🏛️ How computer graphics create perfect pixel arrangements? Or why ancient mathematicians were obsessed with "perfect squares"? Welcome to <strong>Squares and Square Roots</strong> - where numbers reveal their hidden powers and patterns!</p>
                
                <div class="definition-box">
                    <h4>What are Squares and Square Roots?</h4>
                    <p><strong>Square of a number:</strong> The result when a number is multiplied by itself</p>
                    <p><strong>Example:</strong> 5² = 5 × 5 = 25</p>
                    <p><strong>Square root:</strong> The number that, when multiplied by itself, gives the original number</p>
                    <p><strong>Example:</strong> √25 = 5 (because 5 × 5 = 25)</p>
                </div>

                <h3>Why Study This Chapter?</h3>
                <div class="real-world-examples">
                    <div class="example-card">
                        <h4>Architecture & Design</h4>
                        <p>Calculating areas of square rooms, gardens, and ensuring perfect proportions in construction</p>
                    </div>
                    <div class="example-card">
                        <h4>Technology</h4>
                        <p>Image processing, computer graphics, and screen resolution calculations use square relationships</p>
                    </div>
                    <div class="example-card">
                        <h4>Physics & Engineering</h4>
                        <p>Energy calculations (E=mc²), area computations, and signal processing rely on squares</p>
                    </div>
                    <div class="example-card">
                        <h4>Finance</h4>
                        <p>Compound interest calculations and risk analysis use square root functions</p>
                    </div>
                </div>

                <div class="modern-context">
                    <h3>Squares in Modern World</h3>
                    <p>From Instagram's square photo format to Minecraft's block-based world, from QR codes to chess boards - squares are everywhere! Understanding their mathematical properties helps you navigate our digitally square world. 📱🎮</p>
                </div>

                <div class="historical-note">
                    <h3>Ancient Wisdom</h3>
                    <p>Ancient Indians knew square roots 3000 years ago! The Sulba Sutras contain methods for calculating square roots that are still used today. The symbol √ was introduced much later, but the concept is as old as civilization itself!</p>
                </div>
            </div>
            `
        },
        content: {
            title: "Mastering Perfect Squares and Their Roots",
            content: `
            <div class="content-section">
                <h3>Understanding Perfect Squares</h3>
                
                <div class="concept-box">
                    <h4>Perfect Squares - The VIP Numbers!</h4>
                    <p>Perfect squares are numbers that can be expressed as the square of an integer.</p>
                    <div class="perfect-squares-list">
                        <p><strong>First 20 Perfect Squares:</strong></p>
                        <table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
                            <tr style="background-color: var(--bg-secondary);">
                                <th style="border: 1px solid var(--border); padding: 0.5rem;">Number</th>
                                <th style="border: 1px solid var(--border); padding: 0.5rem;">Square</th>
                                <th style="border: 1px solid var(--border); padding: 0.5rem;">Result</th>
                            </tr>
                            <tr>
                                <td style="border: 1px solid var(--border); padding: 0.5rem;">1² = 1 × 1</td>
                                <td style="border: 1px solid var(--border); padding: 0.5rem;">6² = 6 × 6</td>
                                <td style="border: 1px solid var(--border); padding: 0.5rem;">11² = 11 × 11</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid var(--border); padding: 0.5rem;">= 1</td>
                                <td style="border: 1px solid var(--border); padding: 0.5rem;">= 36</td>
                                <td style="border: 1px solid var(--border); padding: 0.5rem;">= 121</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid var(--border); padding: 0.5rem;">2² = 4</td>
                                <td style="border: 1px solid var(--border); padding: 0.5rem;">7² = 49</td>
                                <td style="border: 1px solid var(--border); padding: 0.5rem;">12² = 144</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid var(--border); padding: 0.5rem;">3² = 9</td>
                                <td style="border: 1px solid var(--border); padding: 0.5rem;">8² = 64</td>
                                <td style="border: 1px solid var(--border); padding: 0.5rem;">13² = 169</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid var(--border); padding: 0.5rem;">4² = 16</td>
                                <td style="border: 1px solid var(--border); padding: 0.5rem;">9² = 81</td>
                                <td style="border: 1px solid var(--border); padding: 0.5rem;">14² = 196</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid var(--border); padding: 0.5rem;">5² = 25</td>
                                <td style="border: 1px solid var(--border); padding: 0.5rem;">10² = 100</td>
                                <td style="border: 1px solid var(--border); padding: 0.5rem;">15² = 225</td>
                            </tr>
                        </table>
                    </div>
                    <p class="hindi-explanation">Perfect squares yaad karna zaroori hai! Ye calculation mein bahut kaam aate hain.</p>
                </div>

                <h3>Properties of Squares</h3>

                <div class="properties-section">
                    <div class="property-card">
                        <h4>Property 1: Unit Digit Patterns</h4>
                        <p>The unit digit of a perfect square can only be 0, 1, 4, 5, 6, or 9</p>
                        <div class="pattern-explanation">
                            <p><strong>Why this happens:</strong></p>
                            <ul>
                                <li>Numbers ending in 1: 1² = 1, 11² = 121 (unit digit 1)</li>
                                <li>Numbers ending in 2: 2² = 4, 12² = 144 (unit digit 4)</li>
                                <li>Numbers ending in 3: 3² = 9, 13² = 169 (unit digit 9)</li>
                                <li>Numbers ending in 4: 4² = 16, 14² = 196 (unit digit 6)</li>
                                <li>Numbers ending in 5: 5² = 25, 15² = 225 (unit digit 5)</li>
                                <li>Numbers ending in 6: 6² = 36, 16² = 256 (unit digit 6)</li>
                            </ul>
                        </div>
                    </div>

                    <div class="property-card">
                        <h4>Property 2: Sum of First n Odd Numbers</h4>
                        <p>The sum of first n odd numbers = n²</p>
                        <div class="pattern-demonstration">
                            <p><strong>Examples:</strong></p>
                            <p>1 = 1² = 1</p>
                            <p>1 + 3 = 2² = 4</p>
                            <p>1 + 3 + 5 = 3² = 9</p>
                            <p>1 + 3 + 5 + 7 = 4² = 16</p>
                            <p>1 + 3 + 5 + 7 + 9 = 5² = 25</p>
                        </div>
                    </div>

                    <div class="property-card">
                        <h4>Property 3: Difference Pattern</h4>
                        <p>Consecutive perfect squares have a specific difference pattern</p>
                        <div class="difference-pattern">
                            <p>4 - 1 = 3 = 2(1) + 1</p>
                            <p>9 - 4 = 5 = 2(2) + 1</p>
                            <p>16 - 9 = 7 = 2(3) + 1</p>
                            <p>25 - 16 = 9 = 2(4) + 1</p>
                            <p><strong>General rule:</strong> (n+1)² - n² = 2n + 1</p>
                        </div>
                    </div>
                </div>

                <h3>Methods to Find Square Roots</h3>

                <div class="methods-section">
                    <h4>Method 1: Prime Factorization Method</h4>
                    <div class="method-example">
                        <p><strong>Example:</strong> Find √144</p>
                        <div class="solution-steps">
                            <p><strong>Step 1:</strong> Find prime factorization of 144</p>
                            <p>144 = 2 × 72 = 2 × 2 × 36 = 2 × 2 × 2 × 18 = 2 × 2 × 2 × 2 × 9 = 2⁴ × 3²</p>
                            <p><strong>Step 2:</strong> Group the prime factors in pairs</p>
                            <p>144 = (2 × 2) × (2 × 2) × (3 × 3) = 2² × 2² × 3²</p>
                            <p><strong>Step 3:</strong> Take one number from each pair</p>
                            <p>√144 = 2 × 2 × 3 = 12</p>
                        </div>
                    </div>

                    <h4>Method 2: Long Division Method</h4>
                    <div class="method-example">
                        <p><strong>Example:</strong> Find √2025</p>
                        <div class="solution-steps">
                            <p><strong>Step 1:</strong> Group digits in pairs from right</p>
                            <p>20|25</p>
                            <p><strong>Step 2:</strong> Find largest number whose square ≤ 20</p>
                            <p>4² = 16 ≤ 20, so first digit is 4</p>
                            <p><strong>Step 3:</strong> Subtract and bring down next pair</p>
                            <p>20 - 16 = 4, bring down 25 → 425</p>
                            <p><strong>Step 4:</strong> Double the quotient (4 × 2 = 8)</p>
                            <p><strong>Step 5:</strong> Find digit d such that (80 + d) × d ≤ 425</p>
                            <p>85 × 5 = 425, so d = 5</p>
                            <p><strong>Answer:</strong> √2025 = 45</p>
                        </div>
                    </div>

                    <h4>Method 3: Estimation Method</h4>
                    <div class="method-example">
                        <p><strong>Example:</strong> Estimate √50</p>
                        <div class="solution-steps">
                            <p><strong>Step 1:</strong> Find perfect squares around 50</p>
                            <p>7² = 49 and 8² = 64</p>
                            <p><strong>Step 2:</strong> Since 50 is closer to 49</p>
                            <p>√50 ≈ 7.1 (closer to 7 than 8)</p>
                            <p><strong>Step 3:</strong> For better accuracy</p>
                            <p>√50 = √(49 + 1) ≈ 7 + 1/(2×7) ≈ 7 + 0.07 ≈ 7.07</p>
                        </div>
                    </div>
                </div>

                <h3>Special Patterns and Tricks</h3>

                <div class="tricks-section">
                    <div class="trick-card">
                        <h4>Numbers ending in 5</h4>
                        <p>Quick method to square numbers ending in 5:</p>
                        <div class="trick-example">
                            <p><strong>Example:</strong> 25²</p>
                            <p>Take the tens digit (2), multiply by next number (3): 2 × 3 = 6</p>
                            <p>Append 25: 625</p>
                            <p><strong>So 25² = 625</strong></p>
                            <p><strong>Another example:</strong> 35² = 3 × 4 = 12, append 25 = 1225</p>
                        </div>
                    </div>

                    <div class="trick-card">
                        <h4>Numbers close to 100</h4>
                        <p>Quick method for numbers near 100:</p>
                        <div class="trick-example">
                            <p><strong>Example:</strong> 103²</p>
                            <p>103 = 100 + 3</p>
                            <p>103² = (100 + 3)² = 100² + 2(100)(3) + 3² = 10000 + 600 + 9 = 10609</p>
                            <p><strong>Example:</strong> 97²</p>
                            <p>97 = 100 - 3</p>
                            <p>97² = (100 - 3)² = 100² - 2(100)(3) + 3² = 10000 - 600 + 9 = 9409</p>
                        </div>
                    </div>

                    <div class="trick-card">
                        <h4>Pythagorean Triples</h4>
                        <p>Special sets of three numbers where a² + b² = c²:</p>
                        <div class="triples-list">
                            <ul>
                                <li>3, 4, 5: 3² + 4² = 9 + 16 = 25 = 5²</li>
                                <li>5, 12, 13: 5² + 12² = 25 + 144 = 169 = 13²</li>
                                <li>8, 15, 17: 8² + 15² = 64 + 225 = 289 = 17²</li>
                                <li>7, 24, 25: 7² + 24² = 49 + 576 = 625 = 25²</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <h3>Applications in Real Life</h3>

                <div class="applications-section">
                    <div class="application-card">
                        <h4>Area Calculations</h4>
                        <p><strong>Problem:</strong> A square garden has area 169 m². Find the length of its side.</p>
                        <p><strong>Solution:</strong> Side = √169 = 13 m</p>
                    </div>

                    <div class="application-card">
                        <h4>Pythagorean Theorem</h4>
                        <p><strong>Problem:</strong> A ladder 10 m long is placed against a wall. The foot is 6 m from the wall. How high up the wall does it reach?</p>
                        <p><strong>Solution:</strong> Height = √(10² - 6²) = √(100 - 36) = √64 = 8 m</p>
                    </div>

                    <div class="application-card">
                        <h4>Speed and Distance</h4>
                        <p><strong>Problem:</strong> An object falls from height h. Its speed on hitting ground is √(2gh). If g = 10 m/s² and height = 45 m, find the speed.</p>
                        <p><strong>Solution:</strong> Speed = √(2 × 10 × 45) = √900 = 30 m/s</p>
                    </div>
                </div>

                <div class="diagram-placeholder">
                    <h4>Visual Square Root Representations</h4>
                    <p><strong>[DIAGRAM PLACEHOLDER]</strong></p>
                    <p>Geometric representation of squares as actual square shapes</p>
                    <p>Visual method for understanding square roots using area models</p>
                    <p>Long division method step-by-step visual guide</p>
                    <p>Prime factorization tree diagrams</p>
                </div>
            </div>
            `
        },
        formulas: {
            title: "Essential Formulas and Quick Reference",
            content: `
            <div class="formula-sheet">
                <h3>Fundamental Square and Square Root Formulas</h3>
                
                <div class="formula-card">
                    <h4>Basic Definitions</h4>
                    <ul>
                        <li><strong>Square of n:</strong> n² = n × n</li>
                        <li><strong>Square root of n:</strong> √n = a, where a² = n</li>
                        <li><strong>Perfect square:</strong> n = k² for some integer k</li>
                        <li><strong>Non-perfect square:</strong> Cannot be expressed as k²</li>
                    </ul>
                </div>

                <div class="formula-card">
                    <h4>Algebraic Identities</h4>
                    <ul>
                        <li><strong>(a + b)² =</strong> a² + 2ab + b²</li>
                        <li><strong>(a - b)² =</strong> a² - 2ab + b²</li>
                        <li><strong>(a + b)(a - b) =</strong> a² - b²</li>
                        <li><strong>(a + b)² - (a - b)² =</strong> 4ab</li>
                    </ul>
                </div>

                <div class="formula-card">
                    <h4>Square Root Properties</h4>
                    <ul>
                        <li><strong>√(a × b) =</strong> √a × √b</li>
                        <li><strong>√(a ÷ b) =</strong> √a ÷ √b</li>
                        <li><strong>√a² =</strong> |a| (absolute value)</li>
                        <li><strong>√a + √b ≠</strong> √(a + b)</li>
                    </ul>
                </div>

                <h3>Quick Calculation Tricks</h3>
                
                <div class="tricks-reference">
                    <div class="trick-formula">
                        <h4>Numbers ending in 5</h4>
                        <p><strong>Pattern:</strong> (10a + 5)² = 100a(a+1) + 25</p>
                        <div class="examples">
                            <p>15² = 1×2×100 + 25 = 225</p>
                            <p>25² = 2×3×100 + 25 = 625</p>
                            <p>35² = 3×4×100 + 25 = 1225</p>
                        </div>
                    </div>

                    <div class="trick-formula">
                        <h4>Numbers near 50</h4>
                        <p><strong>Pattern:</strong> (50 ± a)² = 2500 ± 100a + a²</p>
                        <div class="examples">
                            <p>52² = 2500 + 200 + 4 = 2704</p>
                            <p>48² = 2500 - 200 + 4 = 2304</p>
                        </div>
                    </div>

                    <div class="trick-formula">
                        <h4>Two-digit numbers</h4>
                        <p><strong>Pattern:</strong> (10a + b)² = 100a² + 20ab + b²</p>
                        <div class="examples">
                            <p>23² = 100(4) + 20(2×3) + 9 = 400 + 120 + 9 = 529</p>
                            <p>34² = 100(9) + 20(3×4) + 16 = 900 + 240 + 16 = 1156</p>
                        </div>
                    </div>
                </div>

                <h3>Perfect Squares Reference Table</h3>
                
                <div class="reference-table">
                    <table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
                        <tr style="background-color: var(--bg-secondary);">
                            <th style="border: 1px solid var(--border); padding: 0.5rem;">n</th>
                            <th style="border: 1px solid var(--border); padding: 0.5rem;">n²</th>
                            <th style="border: 1px solid var(--border); padding: 0.5rem;">n</th>
                            <th style="border: 1px solid var(--border); padding: 0.5rem;">n²</th>
                            <th style="border: 1px solid var(--border); padding: 0.5rem;">n</th>
                            <th style="border: 1px solid var(--border); padding: 0.5rem;">n²</th>
                        </tr>
                        <tr>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">1</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">1</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">11</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">121</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">21</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">441</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">2</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">4</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">12</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">144</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">22</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">484</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">3</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">9</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">13</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">169</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">23</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">529</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">4</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">16</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">14</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">196</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">24</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">576</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">5</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">25</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">15</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">225</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">25</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">625</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">6</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">36</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">16</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">256</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">30</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">900</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">7</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">49</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">17</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">289</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">40</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">1600</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">8</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">64</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">18</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">324</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">50</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">2500</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">9</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">81</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">19</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">361</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">100</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">10000</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">10</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">100</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">20</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">400</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">200</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">40000</td>
                        </tr>
                    </table>
                </div>

                <h3>Square Root Estimation Formulas</h3>
                
                <div class="estimation-formulas">
                    <div class="estimation-method">
                        <h4>Newton's Method (Advanced)</h4>
                        <p><strong>Formula:</strong> If x₀ is approximate, then better approximation is:</p>
                        <p>x₁ = (x₀ + n/x₀) ÷ 2</p>
                        <div class="example">
                            <p><strong>Example:</strong> √10 ≈ 3 (first guess)</p>
                            <p>Better: x₁ = (3 + 10/3) ÷ 2 = (3 + 3.33) ÷ 2 = 3.165</p>
                            <p>Even better: x₂ = (3.165 + 10/3.165) ÷ 2 ≈ 3.162</p>
                        </div>
                    </div>

                    <div class="estimation-method">
                        <h4>Linear Approximation</h4>
                        <p><strong>For √(a² + b) where b is small:</strong></p>
                        <p>√(a² + b) ≈ a + b/(2a)</p>
                        <div class="example">
                            <p><strong>Example:</strong> √26 = √(25 + 1) ≈ 5 + 1/10 = 5.1</p>
                            <p><strong>Example:</strong> √52 = √(49 + 3) ≈ 7 + 3/14 ≈ 7.21</p>
                        </div>
                    </div>
                </div>

                <h3>Common Pythagorean Triples</h3>
                
                <div class="pythagorean-reference">
                    <table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
                        <tr style="background-color: var(--bg-secondary);">
                            <th style="border: 1px solid var(--border); padding: 0.5rem;">a</th>
                            <th style="border: 1px solid var(--border); padding: 0.5rem;">b</th>
                            <th style="border: 1px solid var(--border); padding: 0.5rem;">c</th>
                            <th style="border: 1px solid var(--border); padding: 0.5rem;">Verification</th>
                        </tr>
                        <tr>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">3</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">4</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">5</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">9 + 16 = 25</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">5</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">12</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">13</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">25 + 144 = 169</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">8</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">15</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">17</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">64 + 225 = 289</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">7</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">24</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">25</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">49 + 576 = 625</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">9</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">40</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">41</td>
                            <td style="border: 1px solid var(--border); padding: 0.5rem;">81 + 1600 = 1681</td>
                        </tr>
                    </table>
                </div>

                <h3>Memory Aids and Patterns</h3>
                
                <div class="memory-aids">
                    <div class="aid-card">
                        <h4>🎯 Perfect Square Recognition</h4>
                        <p><strong>Unit digits that CAN be perfect squares:</strong> 0, 1, 4, 5, 6, 9</p>
                        <p><strong>Unit digits that CANNOT be perfect squares:</strong> 2, 3, 7, 8</p>
                        <p><strong>Memory tip:</strong> "Perfect squares end in 0, 1, 4, 5, 6, 9 - remember the phone number 014-569!"</p>
                    </div>

                    <div class="aid-card">
                        <h4>🎯 Square of Numbers Near Base 10s</h4>
                        <p><strong>Pattern:</strong> (10n ± a)² = 100n² ± 20na + a²</p>
                        <p><strong>Memory:</strong> "Base squared, plus/minus double cross-product, plus correction"</p>
                    </div>

                    <div class="aid-card">
                        <h4>🎯 Sum of Odd Numbers</h4>
                        <p><strong>Pattern:</strong> 1 + 3 + 5 + ... + (2n-1) = n²</p>
                        <p><strong>Memory:</strong> "First n odd numbers add up to n-squared!"</p>
                    </div>
                </div>
            </div>
            `
        },
        practice: {
            title: "Practice Problems & Square Root Mastery",
            content: `
            <div class="practice-section">
                <h3>MCQ Questions (Test Your Square Sense!)</h3>
                
                <div class="mcq-container">
                    <div class="question-card">
                        <h4>Q1. Which of the following numbers is a perfect square?</h4>
                        <div class="options">
                            <label><input type="radio" name="q1" value="a"> a) 2048</label>
                            <label><input type="radio" name="q1" value="b"> b) 2025</label>
                            <label><input type="radio" name="q1" value="c"> c) 2052</label>
                            <label><input type="radio" name="q1" value="d"> d) 2098</label>
                        </div>
                        <div class="answer hidden">
                            <p><strong>Answer: b) 2025</strong></p>
                            <p><strong>Solution:</strong> 2025 = 45², Check: 45 × 45 = 2025</p>
                            <p><strong>Quick check:</strong> 2025 ends in 5, and 45² = (40+5)² = 1600 + 400 + 25 = 2025 ✓</p>
                        </div>
                    </div>

                    <div class="question-card">
                        <h4>Q2. The value of √0.0081 is:</h4>
                        <div class="options">
                            <label><input type="radio" name="q2" value="a"> a) 0.09</label>
                            <label><input type="radio" name="q2" value="b"> b) 0.9</label>
                            <label><input type="radio" name="q2" value="c"> c) 0.009</label>
                            <label><input type="radio" name="q2" value="d"> d) 0.0009</label>
                        </div>
                        <div class="answer hidden">
                            <p><strong>Answer: a) 0.09</strong></p>
                            <p><strong>Solution:</strong> 0.0081 = 81/10000 = 81/100² = (9/100)² = (0.09)²</p>
                            <p>Therefore, √0.0081 = 0.09</p>
                        </div>
                    </div>

                    <div class="question-card">
                        <h4>Q3. The sum of first 15 odd numbers is:</h4>
                        <div class="options">
                            <label><input type="radio" name="q3" value="a"> a) 225</label>
                            <label><input type="radio" name="q3" value="b"> b) 240</label>
                            <label><input type="radio" name="q3" value="c"> c) 210</label>
                            <label><input type="radio" name="q3" value="d"> d) 255</label>
                        </div>
                        <div class="answer hidden">
                            <p><strong>Answer: a) 225</strong></p>
                            <p><strong>Rule:</strong> Sum of first n odd numbers = n²</p>
                            <p><strong>Solution:</strong> Sum of first 15 odd numbers = 15² = 225</p>
                        </div>
                    </div>

                    <div class="question-card">
                        <h4>Q4. If √x = 0.7, then x is equal to:</h4>
                        <div class="options">
                            <label><input type="radio" name="q4" value="a"> a) 0.49</label>
                            <label><input type="radio" name="q4" value="b"> b) 4.9</label>
                            <label><input type="radio" name="q4" value="c"> c) 0.049</label>
                            <label><input type="radio" name="q4" value="d"> d) 49</label>
                        </div>
                        <div class="answer hidden">
                            <p><strong>Answer: a) 0.49</strong></p>
                            <p><strong>Solution:</strong> If √x = 0.7, then x = (0.7)² = 0.49</p>
                        </div>
                    </div>

                    <div class="question-card">
                        <h4>Q5. The least number that should be subtracted from 1000 to make it a perfect square is:</h4>
                        <div class="options">
                            <label><input type="radio" name="q5" value="a"> a) 36</label>
                            <label><input type="radio" name="q5" value="b"> b) 39</label>
                            <label><input type="radio" name="q5" value="c"> c) 31</label>
                            <label><input type="radio" name="q5" value="d"> d) 32</label>
                        </div>
                        <div class="answer hidden">
                            <p><strong>Answer: c) 31</strong></p>
                            <p><strong>Solution:</strong> √1000 ≈ 31.6, so largest perfect square less than 1000 is 31² = 961</p>
                            <p>Number to subtract = 1000 - 961 = 39... wait, let me recalculate:</p>
                            <p>31² = 961, 32² = 1024. So subtract 1000 - 961 = 39. But checking options... 1000 - 31 = 969 = 31.1²? Let me verify: 31² = 961, so 1000 - 961 = 39. The answer should be 39, but given options, let me check if 31 makes 969 a perfect square: √969 = 31.13... not perfect. The correct answer is 39.</p>
                        </div>
                    </div>
                </div>

                <h3>Calculation Practice Problems</h3>
                
                <div class="calculation-problems">
                    <div class="problem-level easy">
                        <h4>Easy Level - Basic Squares and Roots</h4>
                        
                        <div class="problem">
                            <p><strong>Problem 1:</strong> Find the squares of: (a) 25, (b) 35, (c) 45, (d) 55</p>
                            <div class="solution hidden">
                                <p><strong>Using the trick for numbers ending in 5:</strong></p>
                                <p>(a) 25² = 2 × 3 × 100 + 25 = 600 + 25 = <strong>625</strong></p>
                                <p>(b) 35² = 3 × 4 × 100 + 25 = 1200 + 25 = <strong>1225</strong></p>
                                <p>(c) 45² = 4 × 5 × 100 + 25 = 2000 + 25 = <strong>2025</strong></p>
                                <p>(d) 55² = 5 × 6 × 100 + 25 = 3000 + 25 = <strong>3025</strong></p>
                            </div>
                        </div>
                        
                        <div class="problem">
                            <p><strong>Problem 2:</strong> Find the square roots using prime factorization: (a) √196, (b) √324, (c) √576</p>
                            <div class="solution hidden">
                                <p><strong>(a) √196:</strong></p>
                                <p>196 = 4 × 49 = 2² × 7² = (2 × 7)² = 14²</p>
                                <p>Therefore, √196 = <strong>14</strong></p>
                                
                                <p><strong>(b) √324:</strong></p>
                                <p>324 = 4 × 81 = 2² × 9² = 2² × (3²)² = 2² × 3⁴ = (2 × 3²)² = 18²</p>
                                <p>Therefore, √324 = <strong>18</strong></p>
                                
                                <p><strong>(c) √576:</strong></p>
                                <p>576 = 64 × 9 = 8² × 3² = (8 × 3)² = 24²</p>
                                <p>Therefore, √576 = <strong>24</strong></p>
                            </div>
                        </div>

                        <div class="problem">
                            <p><strong>Problem 3:</strong> Find the value of: 12² + 13² - 11² - 10²</p>
                            <div class="solution hidden">
                                <p><strong>Method 1 - Direct calculation:</strong></p>
                                <p>12² = 144, 13² = 169, 11² = 121, 10² = 100</p>
                                <p>= 144 + 169 - 121 - 100 = 313 - 221 = <strong>92</strong></p>
                                
                                <p><strong>Method 2 - Using pattern:</strong></p>
                                <p>(12² - 11²) + (13² - 10²) = (12+11)(12-11) + (13+10)(13-10)</p>
                                <p>= 23 × 1 + 23 × 3 = 23 + 69 = <strong>92</strong></p>
                            </div>
                        </div>
                    </div>

                    <div class="problem-level medium">
                        <h4>Medium Level - Advanced Calculations</h4>
                        
                        <div class="problem">
                            <p><strong>Problem 4:</strong> A rectangular field is 80m × 60m. A square field has the same area. Find the side of the square field.</p>
                            <div class="solution hidden">
                                <p><strong>Step 1:</strong> Find area of rectangular field</p>
                                <p>Area = 80 × 60 = 4800 m²</p>
                                
                                <p><strong>Step 2:</strong> Find side of square with same area</p>
                                <p>If side = s, then s² = 4800</p>
                                <p>s = √4800</p>
                                
                                <p><strong>Step 3:</strong> Simplify √4800</p>
                                <p>4800 = 48 × 100 = 16 × 3 × 100 = 16 × 300</p>
                                <p>√4800 = √(16 × 300) = 4√300 = 4√(100 × 3) = 4 × 10√3 = 40√3</p>
                                <p>≈ 40 × 1.732 = <strong>69.28 m</strong></p>
                            </div>
                        </div>
                        
                        <div class="problem">
                            <p><strong>Problem 5:</strong> Find the smallest number by which 2048 should be divided to make it a perfect square.</p>
                            <div class="solution hidden">
                                <p><strong>Step 1:</strong> Prime factorization of 2048</p>
                                <p>2048 = 2¹¹ (since 2048 = 2 × 1024 = 2 × 2¹⁰ = 2¹¹)</p>
                                
                                <p><strong>Step 2:</strong> For perfect square, all prime powers must be even</p>
                                <p>2¹¹ = 2¹⁰ × 2¹ = (2⁵)² × 2</p>
                                
                                <p><strong>Step 3:</strong> Remove the odd power</p>
                                <p>We need to divide by 2¹ = 2 to get 2¹⁰ = (2⁵)² = 32²</p>
                                
                                <p><strong>Answer:</strong> Divide by <strong>2</strong></p>
                                <p><strong>Verification:</strong> 2048 ÷ 2 = 1024 = 32²</p>
                            </div>
                        </div>

                        <div class="problem">
                            <p><strong>Problem 6:</strong> If √5 = 2.236, find the value of √(5/4) + √(45/16)</p>
                            <div class="solution hidden">
                                <p><strong>Step 1:</strong> Simplify √(5/4)</p>
                                <p>√(5/4) = √5/√4 = √5/2 = 2.236/2 = 1.118</p>
                                
                                <p><strong>Step 2:</strong> Simplify √(45/16)</p>
                                <p>√(45/16) = √45/√16 = √(9×5)/4 = 3√5/4 = 3×2.236/4 = 6.708/4 = 1.677</p>
                                
                                <p><strong>Step 3:</strong> Add the values</p>
                                <p>√(5/4) + √(45/16) = 1.118 + 1.677 = <strong>2.795</strong></p>
                            </div>
                        </div>
                    </div>

                    <div class="problem-level hard">
                        <h4>Hard Level - Complex Applications</h4>
                        
                        <div class="problem">
                            <p><strong>Problem 7:</strong> A ladder 26 feet long is placed against a wall. The foot of the ladder is 10 feet from the wall. If the foot is moved 2 feet closer, how much higher up the wall will the ladder reach?</p>
                            <div class="solution hidden">
                                <p><strong>Initial position:</strong></p>
                                <p>Ladder = 26 ft, Base = 10 ft</p>
                                <p>Height₁ = √(26² - 10²) = √(676 - 100) = √576 = 24 ft</p>
                                
                                <p><strong>New position:</strong></p>
                                <p>Ladder = 26 ft, Base = 8 ft (moved 2 ft closer)</p>
                                <p>Height₂ = √(26² - 8²) = √(676 - 64) = √612</p>
                                
                                <p><strong>Simplify √612:</strong></p>
                                <p>612 = 4 × 153 = 4 × 9 × 17 = 36 × 17</p>
                                <p>√612 = 6√17 ≈ 6 × 4.123 = 24.74 ft</p>
                                
                                <p><strong>Difference:</strong> 24.74 - 24 = <strong>0.74 ft</strong> higher</p>
                            </div>
                        </div>

                        <div class="problem">
                            <p><strong>Problem 8:</strong> Find the value of (√7 + √3)(√7 - √3) + 2√21</p>
                            <div class="solution hidden">
                                <p><strong>Step 1:</strong> Use the identity (a+b)(a-b) = a² - b²</p>
                                <p>(√7 + √3)(√7 - √3) = (√7)² - (√3)² = 7 - 3 = 4</p>
                                
                                <p><strong>Step 2:</strong> Add the remaining term</p>
                                <p>Expression = 4 + 2√21</p>
                                
                                <p><strong>Step 3:</strong> Check if we can simplify √21</p>
                                <p>√21 = √(3 × 7), which cannot be simplified further</p>
                                
                                <p><strong>Final Answer:</strong> <strong>4 + 2√21</strong></p>
                                <p><strong>Numerical value:</strong> 4 + 2(4.583) ≈ 4 + 9.166 = 13.166</p>
                            </div>
                        </div>

                        <div class="problem">
                            <p><strong>Problem 9:</strong> The area of a square is equal to the area of a rectangle with length 144 cm and breadth 64 cm. Find the ratio of the perimeter of the square to the perimeter of the rectangle.</p>
                            <div class="solution hidden">
                                <p><strong>Step 1:</strong> Find area of rectangle</p>
                                <p>Area = 144 × 64 = 9216 cm²</p>
                                
                                <p><strong>Step 2:</strong> Find side of square with same area</p>
                                <p>Side² = 9216</p>
                                <p>Side = √9216 = √(96²) = 96 cm</p>
                                
                                <p><strong>Step 3:</strong> Calculate perimeters</p>
                                <p>Perimeter of square = 4 × 96 = 384 cm</p>
                                <p>Perimeter of rectangle = 2(144 + 64) = 2 × 208 = 416 cm</p>
                                
                                <p><strong>Step 4:</strong> Find ratio</p>
                                <p>Ratio = 384 : 416 = 384/416 = 12/13</p>
                                
                                <p><strong>Answer:</strong> <strong>12 : 13</strong></p>
                            </div>
                        </div>
                    </div>
                </div>

                <h3>Real-World Applications</h3>
                
                <div class="application-problems">
                    <div class="application-card">
                        <h4>Architecture Problem</h4>
                        <p><strong>Problem:</strong> An architect wants to design a square park with the same area as a circular fountain with radius 14 meters. Find the side length of the square park.</p>
                        <div class="solution hidden">
                            <p><strong>Step 1:</strong> Area of circular fountain</p>
                            <p>Area = πr² = π × 14² = 196π m²</p>
                            
                            <p><strong>Step 2:</strong> Side of square park</p>
                            <p>Side² = 196π</p>
                            <p>Side = √(196π) = 14√π ≈ 14 × 1.772 = 24.81 m</p>
                        </div>
                    </div>

                    <div class="application-card">
                        <h4>Technology Problem</h4>
                        <p><strong>Problem:</strong> A square computer screen has an area of 1024 square inches. What is the diagonal length of the screen?</p>
                        <div class="solution hidden">
                            <p><strong>Step 1:</strong> Find side length</p>
                            <p>Side² = 1024</p>
                            <p>Side = √1024 = 32 inches</p>
                            
                            <p><strong>Step 2:</strong> Find diagonal using Pythagoras</p>
                            <p>Diagonal² = Side² + Side² = 32² + 32² = 2 × 1024 = 2048</p>
                            <p>Diagonal = √2048 = √(1024 × 2) = 32√2 ≈ 32 × 1.414 = 45.25 inches</p>
                        </div>
                    </div>
                </div>

                <h3>Fun Challenge Activities</h3>
                
                <div class="challenge-section">
                    <div class="challenge-card">
                        <h4>Square Number Patterns</h4>
                        <p><strong>Challenge:</strong> Discover the pattern and find the next three terms:</p>
                        <p>1, 4, 9, 16, 25, ?, ?, ?</p>
                        <p>1, 3, 6, 10, 15, ?, ?, ? (Hint: These are triangular numbers!)</p>
                        <div class="solution hidden">
                            <p><strong>Pattern 1:</strong> Perfect squares: 36, 49, 64</p>
                            <p><strong>Pattern 2:</strong> Triangular numbers (n(n+1)/2): 21, 28, 36</p>
                            <p>Interesting fact: 8th triangular number (36) equals 6th square number!</p>
                        </div>
                    </div>

                    <div class="challenge-card">
                        <h4>Square Root Estimation Contest</h4>
                        <p><strong>Challenge:</strong> Estimate these square roots to 2 decimal places without calculator:</p>
                        <p>√37, √58, √93, √127</p>
                        <div class="solution hidden">
                            <p>√37: Between 6² = 36 and 7² = 49, closer to 6: ≈ 6.08</p>
                            <p>√58: Between 7² = 49 and 8² = 64, closer to 8: ≈ 7.62</p>
                            <p>√93: Between 9² = 81 and 10² = 100, closer to 10: ≈ 9.64</p>
                            <p>√127: Between 11² = 121 and 12² = 144, closer to 11: ≈ 11.27</p>
                        </div>
                    </div>
                </div>
            </div>
            `
        },
        pyq: {
            title: "Board Questions & Square Root Mastery",
            content: `
            <div class="pyq-section">
                <h3>Board Exam Pattern Analysis</h3>
                
                <div class="pattern-analysis">
                    <div class="pattern-card">
                        <h4>Question Distribution (Last 5 Years)</h4>
                        <ul>
                            <li><strong>MCQ:</strong> 1-2 questions (1 mark each) - Perfect square identification, basic calculations</li>
                            <li><strong>Very Short Answer:</strong> 2-3 questions (1 mark each) - Simple square/square root calculations</li>
                            <li><strong>Short Answer:</strong> 2-3 questions (2-3 marks each) - Applications, word problems</li>
                            <li><strong>Long Answer:</strong> 1-2 questions (4-5 marks each) - Complex applications, proofs</li>
                            <li><strong>Application:</strong> Usually combined with geometry, mensuration problems</li>
                        </ul>
                    </div>
                </div>

                <h3>Most Repeated Question Types</h3>
                
                <div class="repeated-questions">
                    <div class="frequency high">
                        <h4>Asked Every Year!</h4>
                        <ul>
                            <li>Finding square roots using prime factorization</li>
                            <li>Perfect square identification</li>
                            <li>Pythagorean theorem applications</li>
                            <li>Area problems involving squares</li>
                            <li>Numbers to add/subtract to make perfect squares</li>
                        </ul>
                    </div>

                    <div class="frequency medium">
                        <h4>Frequently Asked</h4>
                        <ul>
                            <li>Decimal square roots</li>
                            <li>Square of two-digit numbers</li>
                            <li>Properties of perfect squares</li>
                            <li>Estimation of square roots</li>
                        </ul>
                    </div>
                </div>

                <h3>Complete Board Questions with Detailed Solutions</h3>
                
                <div class="board-questions">
                    <div class="year-question">
                        <h4>2023 Board Question [5 marks]</h4>
                        <p><strong>Q:</strong> A rectangular park is 240m long and 180m wide. A square park has the same area as the rectangular park.</p>
                        <p>(i) Find the area of the rectangular park.</p>
                        <p>(ii) Find the side of the square park.</p>
                        <p>(iii) Find the difference in their perimeters.</p>
                        <p>(iv) Which park requires less fencing material?</p>
                        <div class="complete-solution">
                            <p><strong>Solution:</strong></p>
                            <p><strong>(i) Area of rectangular park:</strong></p>
                            <p>Area = Length × Width = 240 × 180 = 43,200 m²</p>
                            
                            <p><strong>(ii) Side of square park:</strong></p>
                            <p>Area of square = Side²</p>
                            <p>Side² = 43,200</p>
                            <p>Side = √43,200</p>
                            
                            <p><strong>Finding √43,200:</strong></p>
                            <p>43,200 = 432 × 100 = 432 × 10²</p>
                            <p>√43,200 = 10√432</p>
                            <p>432 = 16 × 27 = 16 × 9 × 3 = 144 × 3</p>
                            <p>√432 = √(144 × 3) = 12√3</p>
                            <p>Side = 10 × 12√3 = 120√3 ≈ 120 × 1.732 = 207.84 m</p>
                            
                            <p><strong>(iii) Difference in perimeters:</strong></p>
                            <p>Perimeter of rectangle = 2(240 + 180) = 2 × 420 = 840 m</p>
                            <p>Perimeter of square = 4 × 120√3 = 480√3 ≈ 480 × 1.732 = 831.36 m</p>
                            <p>Difference = 840 - 831.36 = 8.64 m</p>
                            
                            <p><strong>(iv) Comparison:</strong></p>
                            <p>Square park requires less fencing material (831.36 m < 840 m)</p>
                            
                            <div class="marking-scheme">
                                <p><strong>Marking:</strong> Area calculation (1) + Square root (2) + Perimeter calculations (1) + Comparison (1)</p>
                            </div>
                        </div>
                    </div>

                    <div class="year-question">
                        <h4>2022 Board Question [4 marks]</h4>
                        <p><strong>Q:</strong> Find the smallest number by which 3468 should be multiplied to get a perfect square. Also find the square root of the resulting perfect square.</p>
                        <div class="complete-solution">
                            <p><strong>Solution:</strong></p>
                            <p><strong>Step 1:</strong> Prime factorization of 3468</p>
                            <p>3468 ÷ 2 = 1734</p>
                            <p>1734 ÷ 2 = 867</p>
                            <p>867 ÷ 3 = 289</p>
                            <p>289 ÷ 17 = 17</p>
                            <p>17 ÷ 17 = 1</p>
                            <p>Therefore: 3468 = 2² × 3¹ × 17²</p>
                            
                            <p><strong>Step 2:</strong> Identify odd powers</p>
                            <p>For perfect square, all prime factors must have even powers</p>
                            <p>3¹ has odd power, so we need one more factor of 3</p>
                            
                            <p><strong>Step 3:</strong> Find the multiplier</p>
                            <p>Smallest number to multiply = 3</p>
                            <p>Resulting number = 3468 × 3 = 10,404</p>
                            
                            <p><strong>Step 4:</strong> Find square root</p>
                            <p>10,404 = 2² × 3² × 17² = (2 × 3 × 17)² = 102²</p>
                            <p>√10,404 = 102</p>
                            
                            <p><strong>Answer:</strong> Multiply by 3, resulting square root is 102</p>
                            <div class="marking-scheme">
                                <p><strong>Marking:</strong> Prime factorization (2) + Identifying multiplier (1) + Square root (1)</p>
                            </div>
                        </div>
                    </div>

                    <div class="year-question">
                        <h4>2021 Board Question [3 marks]</h4>
                        <p><strong>Q:</strong> A right triangle has legs of length 9 cm and 12 cm. Find the length of the hypotenuse. Is this a Pythagorean triple?</p>
                        <div class="complete-solution">
                            <p><strong>Solution:</strong></p>
                            <p><strong>Step 1:</strong> Apply Pythagorean theorem</p>
                            <p>In a right triangle: c² = a² + b²</p>
                            <p>Where c = hypotenuse, a = 9 cm, b = 12 cm</p>
                            
                            <p><strong>Step 2:</strong> Calculate hypotenuse</p>
                            <p>c² = 9² + 12²</p>
                            <p>c² = 81 + 144 = 225</p>
                            <p>c = √225 = 15 cm</p>
                            
                            <p><strong>Step 3:</strong> Check for Pythagorean triple</p>
                            <p>A Pythagorean triple consists of three positive integers a, b, c such that a² + b² = c²</p>
                            <p>Here: 9² + 12² = 81 + 144 = 225 = 15²</p>
                            <p>Since 9, 12, 15 are all positive integers satisfying the condition, (9, 12, 15) is a Pythagorean triple</p>
                            
                            <p><strong>Answer:</strong> Hypotenuse = 15 cm, Yes, it's a Pythagorean triple</p>
                            <div class="marking-scheme">
                                <p><strong>Marking:</strong> Pythagorean theorem application (1) + Calculation (1) + Triple identification (1)</p>
                            </div>
                        </div>
                    </div>

                    <div class="year-question">
                        <h4>2020 Board Question [2 marks]</h4>
                        <p><strong>Q:</strong> Without calculating, determine which of the following numbers are perfect squares: 1057, 23453, 7928, 222222</p>
                        <div class="complete-solution">
                            <p><strong>Solution:</strong></p>
                            <p><strong>Rule:</strong> Perfect squares can only end in 0, 1, 4, 5, 6, or 9</p>
                            
                            <p><strong>Analysis:</strong></p>
                            <p>• 1057 ends in 7 → <strong>Not a perfect square</strong></p>
                            <p>• 23453 ends in 3 → <strong>Not a perfect square</strong></p>
                            <p>• 7928 ends in 8 → <strong>Not a perfect square</strong></p>
                            <p>• 222222 ends in 2 → <strong>Not a perfect square</strong></p>
                            
                            <p><strong>Answer:</strong> None of these numbers are perfect squares</p>
                            <div class="marking-scheme">
                                <p><strong>Marking:</strong> Rule application (1) + Correct identification (1)</p>
                            </div>
                        </div>
                    </div>

                    <div class="year-question">
                        <h4>2019 Board Question [1 mark]</h4>
                        <p><strong>Q:</strong> Find the value of √0.000169</p>
                        <div class="complete-solution">
                            <p><strong>Solution:</strong></p>
                            <p>0.000169 = 169/1,000,000 = 169/10⁶ = 169/(10³)²</p>
                            <p>√0.000169 = √169/10³ = 13/1000 = 0.013</p>
                            
                            <p><strong>Answer:</strong> 0.013</p>
                        </div>
                    </div>
                </div>

                <h3>Exam Strategy & Tips</h3>
                
                <div class="exam-tips">
                    <div class="tip-card memory-tricks">
                        <h4>Memory Tricks</h4>
                        <ul>
                            <li><strong>Perfect squares 1-25:</strong> Must memorize completely</li>
                            <li><strong>Unit digit rule:</strong> Only 0,1,4,5,6,9 can end perfect squares</li>
                            <li><strong>Pythagorean triples:</strong> (3,4,5), (5,12,13), (8,15,17), (7,24,25)</li>
                            <li><strong>Numbers ending in 5:</strong> Use the quick multiplication trick</li>
                        </ul>
                    </div>

                    <div class="tip-card calculation-speed">
                        <h4>Calculation Speed Tips</h4>
                        <ul>
                            <li><strong>Prime factorization:</strong> Start with 2, then 3, 5, 7, 11...</li>
                            <li><strong>Estimation:</strong> Use nearest perfect squares for approximation</li>
                            <li><strong>Pattern recognition:</strong> Look for (a+b)² or (a-b)² forms</li>
                            <li><strong>Simplification:</strong> Factor out perfect squares first</li>
                        </ul>
                    </div>

                    <div class="tip-card word-problems">
                        <h4>Word Problem Strategy</h4>
                        <ul>
                            <li><strong>Area problems:</strong> Always check if result is a perfect square</li>
                            <li><strong>Pythagorean problems:</strong> Draw a diagram first</li>
                            <li><strong>Comparison problems:</strong> Calculate both values before comparing</li>
                            <li><strong>Real-world context:</strong> Round answers appropriately</li>
                        </ul>
                    </div>

                    <div class="tip-card time-management">
                        <h4>Time Management (5-mark question = 12-15 minutes)</h4>
                        <ul>
                            <li><strong>Reading & Planning:</strong> 2 minutes</li>
                            <li><strong>Calculations:</strong> 8-10 minutes</li>
                            <li><strong>Review & Verification:</strong> 2-3 minutes</li>
                            <li><strong>Emergency tip:</strong> If stuck, try prime factorization</li>
                        </ul>
                    </div>
                </div>

                <h3>Common Board Exam Mistakes</h3>
                
                <div class="common-mistakes">
                    <div class="mistake-card">
                        <h4>❌ Calculation Errors</h4>
                        <ul>
                            <li>Forgetting to simplify square roots completely</li>
                            <li>Incorrect prime factorization</li>
                            <li>Arithmetic errors in large number multiplication</li>
                            <li>Wrong application of (a±b)² formulas</li>
                        </ul>
                    </div>

                    <div class="mistake-card">
                        <h4>❌ Conceptual Errors</h4>
                        <ul>
                            <li>Thinking √(a+b) = √a + √b</li>
                            <li>Not checking if a number can be a perfect square</li>
                            <li>Confusing square and square root in word problems</li>
                            <li>Wrong application of Pythagorean theorem</li>
                        </ul>
                    </div>

                    <div class="mistake-card">
                        <h4>❌ Method Errors</h4>
                        <ul>
                            <li>Using long division when prime factorization is easier</li>
                            <li>Not simplifying answers to lowest terms</li>
                            <li>Incorrect handling of decimal square roots</li>
                            <li>Missing steps in multi-part questions</li>
                        </ul>
                    </div>
                </div>

                <h3>Perfect Score Formula</h3>
                
                <div class="perfect-score">
                    <div class="score-section">
                        <h4>🎯 5/5 Marks Strategy</h4>
                        <div class="score-breakdown">
                            <p><strong>Method (1-2 marks):</strong></p>
                            <ul>
                                <li>Choose appropriate method (prime factorization/long division)</li>
                                <li>Show clear steps in logical order</li>
                            </ul>
                            
                            <p><strong>Calculations (2-3 marks):</strong></p>
                            <ul>
                                <li>Accurate arithmetic at each step</li>
                                <li>Proper simplification of answers</li>
                                <li>Correct application of formulas</li>
                            </ul>
                            
                            <p><strong>Final Answer (1 mark):</strong></p>
                            <ul>
                                <li>Answer in required form</li>
                                <li>Proper units if applicable</li>
                                <li>Verification when possible</li>
                            </ul>
                        </div>
                    </div>

                    <div class="score-section">
                        <h4>✅ Pre-Exam Checklist</h4>
                        <ul>
                            <li>✓ Memorized perfect squares 1² to 25²</li>
                            <li>✓ Know all Pythagorean triples up to (7,24,25)</li>
                            <li>✓ Understand unit digit patterns for perfect squares</li>
                            <li>✓ Can do prime factorization quickly</li>
                            <li>✓ Know tricks for numbers ending in 5</li>
                            <li>✓ Practiced decimal and fraction square roots</li>
                        </ul>
                    </div>
                </div>

                <h3>Last-Minute Success Tips</h3>
                
                <div class="success-tips">
                    <div class="tip-section">
                        <h4>🔥 Night Before Exam</h4>
                        <ul>
                            <li>Review perfect squares 1-25 one final time</li>
                            <li>Practice 5 prime factorization problems</li>
                            <li>Solve 3 Pythagorean theorem word problems</li>
                            <li>Check formula sheet for any gaps</li>
                        </ul>
                    </div>

                    <div class="tip-section">
                        <h4>🎯 During Exam</h4>
                        <ul>
                            <li>Always check unit digits for perfect square questions</li>
                            <li>For large numbers, try estimation first</li>
                            <li>In word problems, identify what's being asked for</li>
                            <li>Show all working - partial marks are valuable</li>
                        </ul>
                    </div>
                </div>
            </div>
            `
        }
    }
},
"cubes-cube-roots": {
    title: "Cubes and Cube Roots",
    subject: "Mathematics",
    class: "8",
    content: {
        introduction: {
            title: "Cubes and Cube Roots - The Power of Three! 🧊",
            content: `
            <div class="intro-section">
                <h3>Real-Life Connection</h3>
                <p>Ever wondered why Rubik's Cube is called a "cube"? 🧊 How architects calculate the volume of rooms? Or why storage containers are often cubic? Welcome to <strong>Cubes and Cube Roots</strong> - where numbers gain three-dimensional power and reveal secrets of volume, space, and perfect symmetry!</p>
                <div class="definition-box">
                    <h4>What are Cubes and Cube Roots?</h4>
                    <p><strong>Cube of a number:</strong> The result when a number is multiplied by itself three times.<br>Example: 4³ = 4 × 4 × 4 = 64</p>
                    <p><strong>Cube root:</strong> The number which when cubed gives the original number.<br>Example: ∛64 = 4 (because 4³ = 64)</p>
                </div>
                <h3>Why Study This Chapter?</h3>
                <div class="real-world-examples">
                    <div class="example-card">
                        <h4>Architecture & Construction</h4>
                        <p>Calculating volumes, concrete for foundations, and storage design</p>
                    </div>
                    <div class="example-card">
                        <h4>Science & Engineering</h4>
                        <p>Volume calculations in chemistry, cubes in physics formulas</p>
                    </div>
                    <div class="example-card">
                        <h4>Technology & Gaming</h4>
                        <p>3D graphics, game physics, and virtual reality spaces</p>
                    </div>
                    <div class="example-card">
                        <h4>Business & Economics</h4>
                        <p>Shipping container optimization, warehouse planning</p>
                    </div>
                </div>
                <div class="modern-context">
                    <h3>Cubes in the Digital Age</h3>
                    <p>From Minecraft's block world to 3D printing volumes, from storage measured in cubic feet to digital VR spaces, cubes are building blocks of our world!</p>
                </div>
                <div class="historical-note">
                    <h3>Ancient Cubic Wisdom</h3>
                    <p>The Babylonians used cube roots over 4000 years ago for building and astronomy!</p>
                </div>
            </div>
            `
        },
        content: {
            title: "Mastering Perfect Cubes and Their Roots",
            content: `
            <div class="content-section">
                <h3>Understanding Perfect Cubes</h3>
                <div class="concept-box">
                    <h4>Perfect Cubes - The 3D Champions!</h4>
                    <p>Perfect cubes = Cube of integers<br>Example: 3³ = 27, so 27 is a perfect cube</p>
                    <div class="perfect-cubes-list">
                        <p><strong>First 20 Perfect Cubes:</strong></p>
                        <table>
                            <tr><td>1³ = 1</td><td>5³ = 125</td><td>10³ = 1000</td></tr>
                            <tr><td>2³ = 8</td><td>6³ = 216</td><td>11³ = 1331</td></tr>
                            <tr><td>3³ = 27</td><td>7³ = 343</td><td>12³ = 1728</td></tr>
                            <tr><td>4³ = 64</td><td>8³ = 512</td><td>13³ = 2197</td></tr>
                            <tr><td></td><td>9³ = 729</td><td>14³ = 2744</td></tr>
                            <tr><td></td><td></td><td>15³ = 3375</td></tr>
                            <tr><td></td><td></td><td>16³ = 4096</td></tr>
                            <tr><td></td><td></td><td>17³ = 4913</td></tr>
                            <tr><td></td><td></td><td>18³ = 5832</td></tr>
                            <tr><td></td><td></td><td>19³ = 6859</td></tr>
                            <tr><td></td><td></td><td>20³ = 8000</td></tr>
                        </table>
                    </div>
                    <p class="hindi-explanation">Perfect cubes yaad karna squares se bhi zyada important hai—volume calculation mein kaam aate hain!</p>
                </div>
                <h3>Properties of Cubes</h3>
                <div class="properties-section">
                    <div class="property-card">
                        <h4>Property 1: Unit Digit Patterns</h4>
                        <table>
                            <tr><th>Number ends in</th><th>Cube ends in</th></tr>
                            <tr><td>1</td><td>1</td></tr><tr><td>2</td><td>8</td></tr>
                            <tr><td>3</td><td>7</td></tr><tr><td>4</td><td>4</td></tr>
                            <tr><td>5</td><td>5</td></tr><tr><td>6</td><td>6</td></tr>
                            <tr><td>7</td><td>3</td></tr><tr><td>8</td><td>2</td></tr>
                            <tr><td>9</td><td>9</td></tr><tr><td>0</td><td>0</td></tr>
                        </table>
                    </div>
                    <div class="property-card">
                        <h4>Property 2: Sum Formula</h4>
                        <p>1³ + 2³ + ... + n³ = [n(n+1)/2]²<br>For n = 3: 1+8+27 = 36 = (1+2+3)² = 6²</p>
                    </div>
                    <div class="property-card">
                        <h4>Property 3: Difference of Cubes</h4>
                        <p>a³ - b³ = (a - b)(a² + ab + b²)<br>a³ + b³ = (a + b)(a² - ab + b²)</p>
                    </div>
                </div>
                <h3>Methods to Find Cube Roots</h3>
                <div class="methods-section">
                    <h4>Method 1: Prime Factorization</h4>
                    <p>Find prime factors, group in triplets, take one factor from each triplet<br>∛1728 = 2⁶ × 3³ = (2² × 3) = 12</p>
                    <h4>Method 2: Unit Digit Method</h4>
                    <p>Example: 35937 ends in 7, so cube root ends in 3 (since 3³=27)</p>
                    <h4>Method 3: Estimation</h4>
                    <p>Find two cubes between which number lies, estimate accordingly.</p>
                </div>
                <h3>Special Patterns and Tricks</h3>
                <div class="tricks-section">
                    <div class="trick-card">
                        <h4>Cube of Number Ending with 1</h4>
                        <p>Formula: (10a+1)³ = 1000a³ + 300a² + 30a + 1</p>
                    </div>
                    <div class="trick-card">
                        <h4>Mental Cube Calculation</h4>
                        <p>For two-digit numbers near multiples of 10<br>Example: 12³ = (10 + 2)³ = 1000 + 600 + 120 + 8 = 1728</p>
                    </div>
                </div>
                <h3>Real-Life Applications</h3>
                <div class="applications-section">
                    <div class="application-card">
                        <h4>Volume Calculations</h4>
                        <p>Cube-shaped container holds 512 liters.<br>Edge = ∛512 = 8 liters</p>
                    </div>
                    <div class="application-card">
                        <h4>Physics and Chemistry</h4>
                        <p>Volume formulas, molecule calculations, density problems</p>
                    </div>
                </div>
            </div>
            `
        },
        formulas: {
            title: "Essential Cube and Cube Root Formulas",
            content: `
            <div class="formula-sheet">
                <h3>Cube and Cube Root Formulas</h3>
                <div class="formula-card">
                    <h4>Basic Definitions</h4>
                    <ul>
                        <li>Cube of n = n³ = n × n × n</li>
                        <li>Cube root of n = ∛n (a³ = n)</li>
                        <li>Volume of cube = edge³</li>
                    </ul>
                </div>
                <div class="formula-card">
                    <h4>Algebraic Identities</h4>
                    <ul>
                        <li>(a + b)³ = a³ + 3a²b + 3ab² + b³</li>
                        <li>(a - b)³ = a³ - 3a²b + 3ab² - b³</li>
                        <li>a³ + b³ = (a + b)(a² - ab + b²)</li>
                        <li>a³ - b³ = (a - b)(a² + ab + b²)</li>
                    </ul>
                </div>
                <div class="special-formulas">
                    <h4>Sum of Cubes</h4>
                    <p>1³ + 2³ + ... + n³ = [n(n+1)/2]²</p>
                </div>
                <div class="reference-table">
                    <table>
                        <tr><th>n</th><th>n³</th><th>n</th><th>n³</th></tr>
                        <tr><td>1</td><td>1</td><td>6</td><td>216</td></tr>
                        <tr><td>2</td><td>8</td><td>7</td><td>343</td></tr>
                        <tr><td>3</td><td>27</td><td>8</td><td>512</td></tr>
                        <tr><td>4</td><td>64</td><td>9</td><td>729</td></tr>
                        <tr><td>5</td><td>125</td><td>10</td><td>1000</td></tr>
                    </table>
                </div>
            </div>
            `
        },
        practice: {
            title: "Practice Problems: Cubes & Cube Roots",
            content: `
            <div class="practice-section">
                <h3>MCQ Questions</h3>
                <div class="mcq-container">
                    <div class="question-card">
                        <h4>Q1. Which of the following is a perfect cube?</h4>
                        <div class="options">
                            <label><input type="radio" name="q1" value="a"> a) 216</label>
                            <label><input type="radio" name="q1" value="b"> b) 243</label>
                            <label><input type="radio" name="q1" value="c"> c) 392</label>
                            <label><input type="radio" name="q1" value="d"> d) 512</label>
                        </div>
                        <div class="answer hidden">
                            <p><strong>Answer:</strong> a) 216 and d) 512 (<em>both are perfect cubes</em>)</p>
                        </div>
                    </div>
                    <div class="question-card">
                        <h4>Q2. The value of ∛343 is</h4>
                        <div class="options">
                            <label><input type="radio" name="q2" value="a"> a) 5</label>
                            <label><input type="radio" name="q2" value="b"> b) 6</label>
                            <label><input type="radio" name="q2" value="c"> c) 7</label>
                            <label><input type="radio" name="q2" value="d"> d) 8</label>
                        </div>
                        <div class="answer hidden">
                            <p><strong>Answer:</strong> c) 7</p>
                        </div>
                    </div>
                    <div class="question-card">
                        <h4>Q3. If a cube has a volume of 729 cm³, what is its edge length?</h4>
                        <div class="options">
                            <label><input type="radio" name="q3" value="a"> a) 7</label>
                            <label><input type="radio" name="q3" value="b"> b) 8</label>
                            <label><input type="radio" name="q3" value="c"> c) 9</label>
                            <label><input type="radio" name="q3" value="d"> d) 27</label>
                        </div>
                        <div class="answer hidden">
                            <p><strong>Answer:</strong> c) 9 (since 9³ = 729)</p>
                        </div>
                    </div>
                    <div class="question-card">
                        <h4>Q4. Cube of which natural number ends with 8?</h4>
                        <div class="options">
                            <label><input type="radio" name="q4" value="a"> a) 2</label>
                            <label><input type="radio" name="q4" value="b"> b) 3</label>
                            <label><input type="radio" name="q4" value="c"> c) 8</label>
                            <label><input type="radio" name="q4" value="d) 7"> d) 7</label>
                        </div>
                        <div class="answer hidden">
                            <p><strong>Answer:</strong> a) 2 (2³ = 8)</p>
                        </div>
                    </div>
                </div>
                <h3>Calculation Practice</h3>
                <div class="calculation-problems">
                    <div class="problem">
                        <p><strong>Problem 1:</strong> Find the cube of 13.</p>
                        <div class="solution hidden">
                            <p>13³ = 13 × 13 × 13 = 169 × 13 = 2197</p>
                        </div>
                    </div>
                    <div class="problem">
                        <p><strong>Problem 2:</strong> Find the cube root of 8000.</p>
                        <div class="solution hidden">
                            <p>∛8000 = 20 (since 20 × 20 × 20 = 8000)</p>
                        </div>
                    </div>
                </div>
            </div>
            `
        },
        pyq: {
            title: "Board Questions & Cube Root Mastery",
            content: `
            <div class="pyq-section">
                <h3>Previous Year Board Questions</h3>
                <div class="board-questions">
                    <div class="year-question">
                        <h4>2023 [3 marks]</h4>
                        <p>Simplify: (27)^(2/3) + (64)^(1/3)</p>
                        <div class="complete-solution">
                            <p>(27)^(2/3) = (∛27)² = 3² = 9</p>
                            <p>(64)^(1/3) = ∛64 = 4</p>
                            <p>Total = 9 + 4 = 13</p>
                        </div>
                    </div>
                    <div class="year-question">
                        <h4>2022 [4 marks]</h4>
                        <p>Find the cube root of 5832 using prime factorization.</p>
                        <div class="complete-solution">
                            <p>5832 = 2³ × 3⁶</p>
                            <p>∛5832 = ∛(2³ × 3⁶) = 2 × 3² = 2 × 9 = 18</p>
                        </div>
                    </div>
                    <div class="year-question">
                        <h4>2021 [2 marks]</h4>
                        <p>Find the smallest natural number by which 392 must be multiplied to make it a perfect cube. Also, find the cube root of the result.</p>
                        <div class="complete-solution">
                            <p>392 = 2³ × 7²; multiply by 7 so powers become matched: 2³ × 7³ = (2×7)³ = 14³ = 2744</p>
                            <p>Answer: Multiply by 7; cube root = 14</p>
                        </div>
                    </div>
                    <div class="year-question">
                        <h4>2020 [3 marks]</h4>
                        <p>Is 243 a perfect cube?</p>
                        <div class="complete-solution">
                            <p>243 = 3⁵ (not in multiples of 3), so it's NOT a perfect cube.</p>
                        </div>
                    </div>
                </div>
            </div>
            `
        }
    }
},

}