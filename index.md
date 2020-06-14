<html>
<title>Dr. Roberto Filho</title>
<head>
	<link rel="stylesheet" type="text/css" href="main.css">
	<script src="script.js"></script>
</head>
<body>
	<div id="content">
		<div id="personal-info">
			<img id="personal-photo" src="roberto.gif" />
			<p class="info" id="name">Dr. Roberto Rodrigues Filho</p>
			<p class="info">Postdoctoral Researcher</p>
			<p class="info">Institute of Informatics</p>
			<p class="info">Federal University of Goiás</p>
			<p class="info">Goiânia - GO, Brazil</p><br/>
			<p class="info"><span style="font-weight: bold;">Contact:</span> roberto.vrfilho [at] gmail</p>
			<span><a href="https://orcid.org/0000-0002-3323-0246" target="_blank"><img class="external-icons" src="orcid.jpeg"/></a></span>
			<span><a href="https://scholar.google.com/citations?user=zxF9HOcAAAAJ&hl=en&oi=ao" target="_blank"><img class="external-icons" src="scholar.png"/></a></span>
			<span><a href="http://lattes.cnpq.br/3150867071308016" target="_blank"><img class="external-icons" src="lattes.png"/></a></span>
			<br />
		</div>
		<div id="main-menu">
			<ul class="nav">
				<li><a href="#" onClick="showAboutMe();">Home</a></li>
				<li><a href="#" onClick="showPublicationList();">Publications</a></li>
				<!-- TODO -->
				<!--<li><a href="#" onClick="">Projects</a></li>-->
				<!--<li><a href="#" onClick="">Teaching</a></li>-->
				<!--<li><a href="#" onClick="showNews();">News</a></li>-->
				<!--<li><a href="#" onClick="showMisc();">Misc</a></li>
				<li><a href="#" onClick="showContact();">Contact</a></li>-->
			</ul>
		</div>
		<div style="clear:both;"></div>
		<div style="display:none;" id="news">
			<h3>News</h3>
			<a class="twitter-timeline" data-lang="en" data-height="1000" href="https://twitter.com/robertovrfilho?ref_src=twsrc%5Etfw">Tweets by robertovrfilho</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
		</div>
		<div id="about-me">
			<h3>About me</h3>
			<p>I hold a PhD degree in Computer Science from Lancaster University, UK (2018), and a MSc and BSc degree in Computer Science from Federal University of Goiás, Brazil (2013). Previously, I worked as Research Associate at Lancaster University (2017-2020), and I was a Visiting Researcher at IRISA/INRIA Université de Rennes 1, France (2019). I currently work as a Postdoctoral Researcher at Federal University of Goiás, Brazil, where I conduct research on Emergent Software Systems for Smart Cities. I also supervise one undergrad student and I am involved in the supervision of a PhD and a MSc student.</p>
		</div>
		<div id="research-interest">
			<h3>Research interests</h3>
			<p> I am interested in developing large-scale systems that are able to self-design at runtime to meet their user-defined goals. This mainly entails abstracting many aspects of a system's design into a simple action/reward matrix to be used by reinforcement learning algorithms during the system's life-time. I have applied this concept to create the very first <a href="https://www.youtube.com/watch?v=BBNvbC6w_3Y" target="_blank">self-designing web-serving infrastructure</a> that is able to autonomously optimise their performance when subjected to varying workloads. This is achieved by having the system to experiment with different ways in which to assemble its internal components to maximise satisfation of its goals. Further to that, I have been currently investigating how to apply the same concept to microservices, IoT applications and web cache systems. Specifically, for micriservices, I look into how machine learning in tandem with light-weight component-based technologies enable microservices internal architecture to autonomously adapt to boost their own performance, avoiding horizontal auto-scaling technologies to create unecessary replicas. For IoT applications, I am investigating how intent-rich network function-calls may be used to drive autonomic loops to optimise and enable oportunistic integration of different software modules that constitute IoT systems when they are running in volatile environments. Finally, for web-cache systems, I am investigating how to create emergent cache systems. Emergent cache systems are able to integrate themselves into pre-existing systems and to adjust themselves according to the target system needs, in order to better improve the target system's performance. For more on these ideas, please refer to my full publication list.</p><!-- this is very specific, I may make this more abstract and vision "grandioso"-->
		</div>
		<div style="display: none;" id="publication-list">
			<h3>Publication list</h3>
			<div class="year">
				<h4>2019</h4>
				<div class="paper">
					<p class="paper-type">EXTENDED ABSTRACT</p>
					<p class="title">Code Synthesis in Self-improving Software Systems</p>
					<p class="paper-info"><span class="me">Rodrigues Filho, R.</span>, Wild, A. and Porter, B.,<span class="publication-info">8/08/2019, International Workshop of Self-Improving System Integration. IEEE, p. 4-5 2 p.</span></p>
				</div>
				<div class="paper">
					<p class="paper-type">CONFERENCE TUTORIAL</p>
					<p class="title">How to Build Emergent Software Systems (Tutorial)<p>
					<p class="paper-info"><span class="me">Rodrigues Filho, R.</span> and Porter, B., 8/08/2019, <span class="publication-info">International Conference on Self-Adaptive and Self-Organizing Systems. IEEE, p. 253-254 2 p.</span></p>
				</div>
				<div class="paper">
					<p class="paper-type">CONFERENCE PAPER</p>
					<p class="title">Distributed Emergent Software: Assembling, Perceiving and Learning Systems at Scale</p>
					<p class="paper-info">Porter, B. and <span class="me">Rodrigues Filho, R.</span>, <span class="publication-info">1/08/2019, 2019 IEEE 13th International Conference on Self-Adaptive and Self-Organizing Systems (SASO). IEEE, p. 127-136 10 p.</span></p>
				</div>
			</div>
			<div class="year">
				<h4>2018</h4>
				<div class="paper">
					<p class="paper-type">WORKSHOP PAPER</p>
					<p class="title">Towards Emergent Microservices for Client-Tailored Design</p>
					<p class="paper-info"><span class="me">Rodrigues Filho, R. V.</span>, Pereira de Sa, M., Porter, B. F. & Costa, F., <span class="publication-info">10/12/2018, 17th Workshop on Adaptive and Reflective Middleware . ACM, 6 p. 2</span></p>
				</div>
				<div class="paper">
					<p class="paper-type">WORKSHOP PAPER</p>
					<p class="title">Hierarchical Self-awareness and Authority for Scalable Self-integrating Systems</p>
					<p class="paper-info">Diaconescu, A., Porter, B. F., <span class="me">Rodrigues Filho, R. V.</span> and Pournaras, E., <span class="publication-info">3/09/2018, 2018 IEEE 3rd International Workshops on Foundations and Applications of Self* Systems (FAS*W). IEEE, p. 168-175 8 p.</span></p>
				</div>
				<div class="paper">
					<p class="paper-type">PHD THESIS</p>
					<p class="title">Emergent software systems</p>
					<p class="paper-info"><span class="me">Rodrigues Filho, R. V.</span>, <span class="publication-info">2018, Lancaster University. 166 p</span></p>
				</div>
			</div>
			<div class="year">
				<h4>2017</h4>
				<div class="paper">
					<p class="paper-type">JOURNAL PAPER</p>
					<p class="title">Defining emergent software using continuous self-assembly, perception and learning</p>
					<p class="paper-info"><span class="me">Rodrigues Filho, R.</span> and Porter, B. F., <span class="publication-info">09/2017, In : ACM Transactions on Autonomous and Adaptive Systems. 12, 3, 25 p., 16.</span></p>
				</div>
			</div>
			<div class="year">
				<h4>2016</h4>
				<div class="paper">
					<p class="paper-type">WORKSHOP PAPER</p>
					<p class="title">Experiments with a machine-centric approach to realise distributed emergent software systems</p>
					<p class="paper-info"><span class="me">Rodrigues Filho, R.</span> and Porter, B. F., <span class="publication-info">13/12/2016, ARM 2016 Proceedings of the 15th International Workshop on Adaptive and Reflective Middleware. New York: ACM, 6 p. 1</span></p>
				</div>
				<div class="paper">
					<p class="paper-type">CONFERENCE PAPER</p>
					<p class="title">Losing control: the case for emergent software systems using autonomous assembly, perception and learning</p>
					<p class="paper-info">Porter, B. F. and <span class="me">Rodrigues Filho, R.</span>, <span class="publication-info">8/12/2016, 2016 IEEE 10th International Conference on Self-Adaptive and Self-Organizing Systems (SASO). IEEE, p. 40-49 10 p. (Self-Adaptive and Self-Organizing Systems (SASO), 2016 IEEE 10th International Conference on).</span></p>
				</div>
				<div class="paper">
					<p class="paper-type">CONFERENCE PAPER</p>
					<p class="title">REX: a development platform and online learning approach for Runtime emergent software systems</p>
					<p class="paper-info">Porter, B. F., Grieves, M., <span class="me">Rodrigues Filho, R.</span> and Leslie, D. S., <span class="publication-info">2/11/2016, Proceedings of the 12th USENIX Symposium on Operating Systems Design and Implementation. USENIX Association, p. 333-348 16 p.</span></p>
				</div>
				<div class="paper">
					<p class="paper-type">CONFERENCE POSTER</p>
					<p class="title">A runtime framework for machine-augmented software design using unsupervised self-learning</p>
					<p class="paper-info"><span class="me">Rodrigues Filho, R.</span> and Porter, B. F., <span class="publication-info">20/07/2016, p. 231-232. 2 p.</span></p>
				</div>
				<div class="paper">
					<p class="paper-type">CONFERENCE POSTER</p>
					<p class="title">Demonstrating a runtime machine-centric emergent software architecture framework</p>
					<p class="paper-info"><span class="me">Rodrigues Filho, R.</span> and Porter, B. F., <span class="publication-info">17/07/2016, Autonomic Computing (ICAC), 2016 IEEE International Conference on. IEEE, p. 239-240 2 p.</span></p>
				</div>
				<div class="paper">
					<p class="paper-type">JOURNAL PAPER</p>
					<p class="title">A body sensor network simulation platform for medical applications</p>
					<p class="paper-info"><span class="me">Rodrigues Filho, R.</span>, Neto, R. F. B. and Sene Junior, I. G., <span class="publication-info">2/06/2016, In : IEEE Latin America Translations. 14, 4, p. 1835-1841 7 p.</span></p>
				</div>
			</div>
			<div class="year">
				<h4>2014</h4>
				<div class="paper">
					<p class="paper-type">WORKSHOP PAPER</p>
					<p class="title">Environmental IoT: programming cyber-physical clouds with high-level system specifications</p>
					<p class="paper-info"><span class="me">Rodrigues Filho, R.</span>, Porter, B. and Blair, G., <span class="publication-info">12/2014, Utility and Cloud Computing (UCC), 2014 IEEE/ACM 7th International Conference on. IEEE, p. 947-950 4 p.</span></p>
				</div>
			</div>
			<div class="year">
				<h4>2013</h4>
				<div class="paper">
					<p class="paper-type">JOURNAL PAPER</p>
					<p class="title">An Evaluation Method of Research on Wearable Wireless Body Area Network in Healthcare.</p>
					<p class="paper-info"><span class="me">Rodrigues Filho, R. V.</span>; Bulcão-Neto, R. F. ; Silvestre, B. O. ; Oliveira, L. L. G. ; Oliveira, R. O. ; Sene Junior, I. G. .  <span class="publication-info">International Journal of Computer Science and Information Technology (Print), v. 5, p. 65-78, 2013.</span></p>
				</div>
				<div class="paper">
					<p class="paper-type">EXTENDED ABSTRACT</p>
					<p class="title">Uma Nova Abordagem de Distribuição de Chaves Criptográficas para o Framework de Segurança TinySec.</p>
					<p class="paper-info">Lemes, M. T. ; Bulcão-Neto, R. F. ; Oliveira, L. L. G. ; <span class="me">Rodrigues Filho, R. V.</span>; Sene Junior, I. G. .<span class="publication-info">In: Simpósio Brasileiro em Segurança da Informação e de Sistemas Computacionais, 2013, Manaus-AM. XIII Simpósio Brasileiro em Segurança da Informação e de Sistemas Computacionais, 2013. v. 1. p. 1-5.</span></p>
				</div>
  
			</div>
			<br />
			<a href="#">Go back to the top!</a>
		</div>
		<div style="display: none;" id="misc">
			<h3>This page is under construction!</h3>
		</div>
		<div style="display:none;" id="contact">
			<h3>Contact</h3>
			<p>Please get in touch by emailing me: roberto.vrfilho [at] gmail. Also, feel free to tweet me at <a href="https://twitter.com/robertovrfilho">@robertovrfilho</a>.</p>
		</div>
	</div>
</body>
</html>