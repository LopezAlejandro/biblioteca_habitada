function escribir(pagina) {
    node = document.getElementById("main");
    node.innerHTML = "";
    node2 = document.getElementById("pagina-p");
    node2.innerHTML = "";
    switch (pagina) {
      case 1:
        text = `<div class="main-flex-container">
        <div class="row">
          <div class="col-2"></div>
          <div class="col-8">

            <figure class="text-end">
              <blockquote class="blockquote">
                <p class="preludio">“El secreto de todo buen bibliotecario consiste en no leer
                  los libros que tiene a su cargo, exceptuando el título y el
                  índice. ¡El que mete las narices en un libro está perdido!...
                  Nunca llegará a tener la perspectiva del conjunto.“</p>
              </blockquote>
              <figcaption class="blockquote-footer">
                Robert Musil, <cite title="Source Title">Der Mann ohne
                  Eigenschaften, Berlin, 1930.</cite>
              </figcaption>
            </figure>

            <figure class="text-end">
              <blockquote class="blockquote">
                <p class="preludio">“El hombre se comporta como si él fuera el señor y el
                  forjador del lenguaje, cuando en realidad es éste el que es y
                  ha sido siempre el señor del hombre. La inversión de esta
                  relación llevada a cabo por el hombre en la era moderna, de
                  esta relación de dominio, es lo que empuja a la esencia de
                  aquel a lo no hogareño, a no habitar…”</p>
              </blockquote>
              <figcaption class="blockquote-footer">
                Martín Heidegger, <cite title="Source Title">Construir, habitar,
                  pensar. Darmstadt, 1951.</cite>
              </figcaption>
            </figure>
          </div>
          <div class="col-2"></div>
        </div>
      </div>`;
        text2 = `<div class="btn-toolbar justify-content-start" role="toolbar" aria-label="Toolbar with button groups">
        <div class="btn-group btn-group-sm" role="group" aria-label="First group">
          <button type="button" class="btn btn-outline-secondary disabled" onclick="escribir(1)">Primero</button>
          <button type="button" class="btn btn-outline-secondary disabled" onclick="escribir(1)">Anterior</button>
          <button type="button" class="btn btn-outline-secondary" onclick="escribir(2)">Siguiente</button>
          <button type="button" class="btn btn-outline-secondary" onclick="escribir(7)">Último</button>
        </div>
      </div>`;
        break;
      case 2:
        text = `<div class="main-flex-container">
        <div class="row">
          <div class="col-2"></div>
          <div class="col-8">
            <div class="two-columns">
              <p class="preludio">
                <strong>La Biblioteca habitada</strong> es el nombre del
                proyecto que hemos encarado desde el equipo curatorial en el
                2021/2022.<br />
                El espíritu que enuncia Robert Musil, imaginando a un
                bibliotecario abnegado que trabaja en la Biblioteca Imperial de
                Viena y que conoce uno por uno todos los títulos de su
                gigantesco acervo, nos anima… Sabíamos que si metíamos las
                narices en todo estábamos perdidos, queríamos no abarcarlo y si
                de alguna forma construir una perspectiva del conjunto.
                Comprendimos, luego del año y medio transcurrido, que tener esa
                perspectiva de algunas de las historias que animan a la
                biblioteca de la FADU UBA, no todas, nos permitiría habitarla
                desde otro lugar.<br />
                Muchas de estas historias son conocidas, otras no tanto y fueron
                apareciendo a medida que el trabajo avanzaba y a veces también
                retrocedía…<br />
                Heidegger nos ayudó con su famoso ensayo
                <strong>Construir, Habitar, Pensar</strong> al definir al
                habitar no como un problema perteneciente al campo de la
                arquitectura y la construcción, sino como un problema del
                lenguaje. La relación de la inversión de dominio entre hombre y
                lenguaje en la época moderna conlleva a una relación no
                hogareña, a un no habitar, eso plantea Heidegger en su
                escrito.<br />
                Apareció en el proceso de las historias un momento liminal, en
                el sentido de lo extraordinario:
                <strong>La Biblioteca imaginaria, antiguos libros de la FADU</strong>
                editado por EUDEBA en 1998.<br />Fue entonces que decidimos
                convocar a Enrique Longinotti con su testimonio, recreando aquel
                tiempo… De alguna manera Enrique nos trajo una certera
                <em>ekprhasis</em> —a pesar de no pretenderlo— de nuestra
                biblioteca, en su descripción pormenorizada de aquel momento…
              </p>
            </div>
          </div>
          <div class="col-2"></div>
        </div>
      </div>`;
        text2 = `<div class="btn-toolbar justify-content-start" role="toolbar" aria-label="Toolbar with button groups">
        <div class="btn-group btn-group-sm" role="group" aria-label="First group">
          <button type="button" class="btn btn-outline-secondary" onclick="escribir(1)">Primero</button>
          <button type="button" class="btn btn-outline-secondary" onclick="escribir(1)">Anterior</button>
          <button type="button" class="btn btn-outline-secondary" onclick="escribir(3)">Siguiente</button>
          <button type="button" class="btn btn-outline-secondary" onclick="escribir(7)">Último</button>
        </div>
      </div>`;
        break;
      case 3:
        text = `<div class="main-flex-container">
            <div class="row">
                <div class="col-2"></div>
                <div class="col-8">

                    <div class="two-columns">
                        <p class="preludio">
                            Volver a transitar los libros antiguos que forman parte de nuestro acervo “como una
                            combinación de leer y mirar” es una forma de volver a habitarlos… <br />
                            Roberto Doberti en el prólogo de <strong>La Biblioteca Imaginaria</strong> vuelve sobre esta
                            relación entre
                            habitar y lenguaje en términos de habla y escritura, “que se acompañan en largas,
                            interminables, permanentes, danzas y contradanzas”.<br>

                            Danzas y contradanzas del proyecto es la matriz disciplinar de nuestra FADU. <br /><br />
                            Quisimos, como hicimos en el 2020, contar la historia de un libro con aura de nuestra
                            colección: <strong>La interacción del color de Josef Albers</strong>, hablar de otros libros…<br>
                            Imposible hablar de todos, por ello elegimos uno emblemático. <strong>El Fletcher de la
                                biblioteca</strong> que certeramente Horacio Caride Batrons completó en su definición como
                            <strong>Un libro y un siglo</strong> y esta cita que prologa su texto:<br></p>
                        <blockquote class="blockquote">
                            <p class="preludio">
                                “Este libro ha sido comprado durante 100 años por todos los estudiantes de arquitectura
                                que
                                han podido reunir los chelines. No tiene rivales en su maravilloso análisis de las
                                grandes
                                obras del pasado europeo. Si quieres comparar San Pedro con el Panteón o Santa Sofía,
                                recurres a Banister Fletcher para obtener dibujos medidos y una descripción sucinta.”
                            </p>
                        </blockquote>
                        <p class="preludio">
                            Caride ilustra profusamente con su ensayo la historia de un libro que ha formado a legiones
                            de arquitectos en la historia de la arquitectura de nuestra biblioteca. Con inasibles
                            categorías, con árboles de dudosa genealogía, pero maravillosos dibujos, descubrimos que en
                            la entonces biblioteca de la FAU la primer edición registrada —inexistente hoy en día
                            físicamente y dada de baja por su deterioro— fue la decimotercera de 1946, la del jubileo de
                            los cincuenta años del libro.<br>

                            El proyecto convocó a un cuidado de los materiales que iban apareciendo.<br>
                            Heidegger plantea al habitar como un cuidado.<br></p>
                            <blockquote><p class="preludio">

                            “El modo en que los mortales son la tierra, bajo un cielo, ante los divinos, es el modo en
                            que acaece este cuádruple cuidado. Eso es el habitar poético.”</p></blockquote>
                            <p class="preludio">
                            Un hombre situado y consciente de su finitud —por ello mortal— bajo la bóveda de un cielo,
                            arraigado a la tierra, —y por tanto situado, no genéricamente en un lugar— en relación a
                            aquello que no es dominado y controlado racionalmente por su voluntad y que Heidegger
                            denomina: los dioses, los divinos. Metáfora preclara de toda existencia trascendente.
                            Constituye como tal, una certera definición de ese lenguaje no utilitario, al que
                            denominamos poesía.<br>

                            El habitar como un cuádruple cuidado que custodia el lenguaje poético.

                        </p>
                    </div>
                </div>
                <div class="col-2"></div>
            </div>
        </div>`;
        text2 = `<div class="btn-toolbar justify-content-start" role="toolbar" aria-label="Toolbar with button groups">
        <div class="btn-group btn-group-sm" role="group" aria-label="First group">
          <button type="button" class="btn btn-outline-secondary" onclick="escribir(1)">Primero</button>
          <button type="button" class="btn btn-outline-secondary" onclick="escribir(2)">Anterior</button>
          <button type="button" class="btn btn-outline-secondary" onclick="escribir(4)">Siguiente</button>
          <button type="button" class="btn btn-outline-secondary" onclick="escribir(7)">Último</button>
        </div>
      </div>`;
        break;
      case 4:
        text = ` <div class="main-flex-container">
            <div class="row">
                <div class="col-2"></div>
                <div class="col-8">

                    <div class="two-columns">
                        <p class="preludio">
                            Cuando el hombre antepone sus maquinaciones, especulaciones, razonamientos, sobre la tierra, sobre el cielo, avasallando lo sagrado de cada existencia, no hace más que alterar e invertir la relación de dominio, tornando al mundo en no hogareño, en no habitable.<br><br> 
Más allá de las resonancias que el habitar poético nos trae en la contemporaneidad de la pospandemia, podemos preguntar ¿cuánto de todo esto tiene que ver con esa falta de cuidado del lenguaje de los hombres, con esa inversión de dominio que hemos  ejercido sin más frente al lenguaje, a los otros, a la naturaleza, al mundo en general? <br><br>
<strong>La Biblioteca habitada</strong> está dedicada como proyecto a los estudiantes, a los ingresantes a la FADU en estos últimos dos años que no han conocido el edificio de Ciudad Universitaria, ni a sus compañeros, ni a sus profesores, ni a la biblioteca.  
Pertinente en esta pausa forzada en donde todo se redujo a lo no habitable de una pantalla de teléfono o de computadora…<br>  
No habitamos la facultad, no habitamos más sus espacios, y entre ellos la biblioteca.<br> 
Implicar el proyecto a lo que significa lo inverso, <strong>La Biblioteca habitada</strong>, algunas historias, sus espacios, sus libros y protagonistas en el tiempo, directores, el personal de la biblioteca —con la noble tarea de los bibliotecarios, los curadores de la colección, los que la preservan y cuidan en nuestro taller de restauración, los que prestan los libros a los estudiantes, investigadores docentes; aconsejado una u otra edición, en definitiva los que habitan y habitaron algunas de estas historias, los libros y estos espacios…<br><br> 
La estructura del proyecto <strong>La Biblioteca habitada</strong> se impuso tripartita: Los espacios, Los libros, Los directores. Condensando en esta esencia multiplicidades, no con el ánimo de construir una totalidad… sino el testimonio inicial de un proyecto abierto para las futuras generaciones que nos sucedan y nos lean.
                        </p>
                    </div>
                </div>
                <div class="col-2"></div>
            </div>
        </div>`;
        text2 = `<div class="btn-toolbar justify-content-start" role="toolbar" aria-label="Toolbar with button groups">
        <div class="btn-group btn-group-sm" role="group" aria-label="First group">
          <button type="button" class="btn btn-outline-secondary" onclick="escribir(1)">Primero</button>
          <button type="button" class="btn btn-outline-secondary" onclick="escribir(3)">Anterior</button>
          <button type="button" class="btn btn-outline-secondary" onclick="escribir(5)">Siguiente</button>
          <button type="button" class="btn btn-outline-secondary" onclick="escribir(7)">Último</button>
        </div>
      </div>`;
        break;
      case 5:
        text = `<div class="main-flex-container">
            <div class="row">
                <div class="col-2"></div>
                <div class="col-8">
                    <div class="two-columns">
                    <p class="preludio">
            <strong>LOS ESPACIOS</strong><br>
            <br>
            El trabajo de investigación que llevamos adelante propuso reconstruir una breve historia contada y
            documental de los espacios físicos que nuestra biblioteca desde sus orígenes habitó en sucesivas
            construcciones, escalas y localizaciones.<br><br>La reconstrucción digital y el estudio de esta historia llevada
            adelante por los integrantes del equipo Curatorial, Jorge Gazaneo y Atilio Pentimalli, nos muestran y nos
            cuentan los diferentes ámbitos: desde la Biblioteca en la histórica Manzana de las Luces de la calle Perú en
            la entonces Escuela de Arquitectura de la Facultad de Ciencias Exactas, Físicas y Naturales, pasando a la
            Biblioteca proyectada pero nunca habitada en los pabellones adyacentes a la Facultad de Derecho sobre la
            avenida Figueroa Alcorta —un hallazgo de esta investigación—. Pabellones parabólicos de madera que luego de
            un incendio determinó la mudanza de nuestra Biblioteca a la Ciudad Universitaria en Nuñez, desde Perú.
            Provisoriamente en 1966 al segundo piso del edificio de la Facultad de Ciencias Exactas y Naturales y
            finalmente en 1971 en el pabellón III sede definitiva de la FAU (Facultad de Arquitectura y Urbanismo),
            luego FADU.<br>
            Contamos aquí otro momento fundacional (1992) como fue el pasaje en el decanato de Juan Manuel Borthagaray
            de Biblioteca a cátedra de Documentación o Centro de Documentación-Biblioteca en su nueva localización ya en
            el 2017 en la planta baja del edificio de la FADU.<br>
            Como parte de esta breve historia de los diferentes espacios que la biblioteca habita y habitó, rescatamos
            la historia del logo, símbolo del espacio institucional, historia que Alicia Ferrari (Directora técnica
            entre los años 1994-2017) cuenta en un documento que rescatamos del año 2013.<br>
            <br>
            <strong>LOS LIBROS</strong><br>
            <br>
            Alrededor de la persona que escribe libros debe haber una separación de los demás, una soledad. Los libros y
            la lectura desde su concepción, nos proponen una separación del mundo que nos rodea. El acto de lectura
            intrínsecamente es solitario, como quien escribe un libro. Hay a veces, una comunión entre el libro —su
            autor— y el que lo lee —el lector—. Esa comunión si acontece es una epifanía… La aparición de algo otro que
            es lo impensado que todo buen libro nos aporta como polvo de oro. Esa comunión es un modo de habitar, un
            modo en que el libro definitivamente nos habite, y si es un libro esencial, cambia nuestra cosmovisión; la
            visión del mundo que nos rodea y que habitamos.<br>
            Certeramente Marguerite Duras dice “Un libro abierto también es la noche”. Y a los buenos libros como la
            noche, los habitamos en sueños…<br>
            Sueños que despiertan en nosotros imaginarios, mundos impensados.<br>
            Ese es el verdadero valor de un libro.<br>
            El capítulo condensa la historia de nuestra colección de la mano de Verónica Galloni, curadora de los libros
            antiguos de la FADU junto a los textos ya mencionados de Enrique Longinotti y Horacio Caride Batrons.
            </p>
                    </div>
                </div>
                <div class="col-2"></div>
            </div>
        </div>`;
        text2 = `<div class="btn-toolbar justify-content-start" role="toolbar" aria-label="Toolbar with button groups">
        <div class="btn-group btn-group-sm" role="group" aria-label="First group">
          <button type="button" class="btn btn-outline-secondary" onclick="escribir(1)">Primero</button>
          <button type="button" class="btn btn-outline-secondary" onclick="escribir(4)">Anterior</button>
          <button type="button" class="btn btn-outline-secondary" onclick="escribir(6)">Siguiente</button>
          <button type="button" class="btn btn-outline-secondary" onclick="escribir(7)">Último</button>
        </div>
      </div>`;
        break;
      case 6:
        text = `<div class="main-flex-container">
            <div class="row">
                <div class="col-2"></div>
                <div class="col-8">
                    <div class="two-columns">
                        <p class= "preludio">
                        <strong>LOS PROTAGONISTAS</strong><br>
                        <br>No es posible habitar —como verbo encarnado— sin habitantes. Protagonistas que condensan temporalmente ese habitar.<br>
Estamos transitados por el tiempo, somos seres temporales y latimos al son de él. Somos mortales, como diría Heidegger y no hay biblioteca sin aquellos que la han habitado y dado un sentido a sus espacios, sus libros, su colección.<br>
Cada Director, Directora que han pasado por aquí, dejaron una huella.<br> 
Imposible otra vez, contar una historia total.  Han sido muchos los protagonistas de estos años. Desde la directora Arq. Filandia Elisa Pizzul (1948 a 1949) que sucedió a una breve gestión de tres meses de Rodolfo Curdy, primer director, fue como dicen Inés Moisset y Zaida Muxí en el artículo que escriben “la encargada de organizar la biblioteca propia de la facultad, ya que antes era parte de la Facultad de Ciencias Exactas, Física y Naturales. En ese entonces nuestra biblioteca contaba con 3500 ejemplares. Antes Filandia había sido la Bibliotecaria de la Sociedad Central de Arquitectos.”<br>  
Manuel Ignacio Net fue el Director-organizador del centro de Documentación Biblioteca (1992-2016) durante la gestión del decano Juan Manuel Borthagaray. Net fue uno de los protagonistas y nuestro centro de documentación lleva su nombre en su memoria desde el 2017. Rescatamos de la mano de Verónica Galloni y Victoria Weinsztok —quiénes trabajaron codo a codo junto a Manuel— su testimonio: 
<blockquote class="blockquote"><p class="preludio">
“Desde 1992 junto con la creación del Centro de Documentación Biblioteca, el arquitecto Manuel Ignacio Net fue designado Director General de la Biblioteca donde trabajó comprometidamente durante 25 años. 
<br>
Cuando llegaba a su oficina de director, lo hacía con su cuaderno tapa dura bajo el brazo… se lo veía escribir y dibujar… las palabras ocupaban de un extremo al otro de la hoja,  dibujaba lo que veía, o lo que se le ocurría, entre un diario personal y un diario de viajes, las hojas  de esos cuadernos se llenaban enteramente, ya que no había vacíos en su mundo interior.”  
</p></blockquote>
<p class="preludio">
Finalmente no queríamos dejar de contar con el testimonio de Alicia Ferrari, Bibliotecaria y Directora Técnica del Centro de Documentación-Biblioteca entre 1994 y 2018. Alicia nos antecedió en la actual gestión. En lo personal, haberla tratado y conocido fue un enorme placer. Ella nos dio su valioso testimonio escrito, nos ayudó en la búsqueda durante el proceso de materiales que intuíamos de su existencia, pero que resultaban difíciles de rastrear y acceder, y sobre todo Alicia ha sido un puente muy valioso, entre dos gestiones, la que ella concluyó, la que iniciamos en el 2018 con el decanato de Guillermo Cabrera y el vicedecano Carlos Venancio.<br> 
En ese momento escribí un texto como un breve apunte de la gestión que iniciaba. Lo titulé Memoria y Proyecto, transcribo aquí algunos párrafos:</p> 
<blockquote class="blockquote"><p class="preludio">
“…Recordé a Foucault en un texto —Del Lenguaje al Infinito— en donde cita a la Biblioteca de Babel...<br>  
Parafraseando a Borges, Foucault entiende a la Biblioteca como Infinito. Frente a las figuras retóricas de la tradición clásica, la Biblioteca es por obra del azar, lo ilegible, lo imposible, imagen del infinito y en última instancia, y esto es lo más interesante del escrito, <strong>la forma que mejor define a la Verdad en nuestra contemporaneidad…</strong>” </p></blockquote>
<p class="preludio">
La Biblioteca contiene un número finito de textos y por tanto un número finito de caracteres, pero por gracia de la creación —que es parte también de la gestión— sus posibilidades de combinación e interpretación son infinitas.<br>
De ahí que el texto de Borges comienza así:  
</p><blockquote class="blockquote">
<p class="preludio">
 “El Universo que otros llaman Biblioteca”…, “se compone de un número indefinido, y tal vez infinito, de galerías hexagonales…” 
</p></blockquote>
 <br>
<p class="preludio">
La Biblioteca es una imagen de estas posibilidades infinitas de articulación entre Memoria y Proyecto, que piensa Foucault a través de Borges… </p>
                    </div>
                </div>
                <div class="col-2"></div>
            </div>
        </div>`;
        text2 = `<div class="btn-toolbar justify-content-start" role="toolbar" aria-label="Toolbar with button groups">
        <div class="btn-group btn-group-sm" role="group" aria-label="First group">
          <button type="button" class="btn btn-outline-secondary" onclick="escribir(1)">Primero</button>
          <button type="button" class="btn btn-outline-secondary" onclick="escribir(5)">Anterior</button>
          <button type="button" class="btn btn-outline-secondary" onclick="escribir(7)">Siguiente</button>
          <button type="button" class="btn btn-outline-secondary" onclick="escribir(7)">Último</button>
        </div>
      </div>`;
        break;
      case 7:
        text = `<div class="main-flex-container">
            <div class="row">
                <div class="col-2"></div>
                <div class="col-8">
                    <div class="two-columns">
                        <p class="preludio">
                        Siempre viví rodeado de libros —muchos heredados, otros comprados— y luego de casi seis décadas de convivir con una biblioteca que fue creciendo, me toca la misión de dirigir la de la FADU.<br>  
Pensando desde mi experiencia académica, hay algo central:<br><br> 
¿Cómo articular <strong>MEMORIA y PROYECTO?</strong><br><br> 
Esta pregunta ensaya algunas respuestas en los dos proyectos que ya llevamos adelante desde la gestión desde el 2018: <strong>Josef Albers, La Interacción del color</strong> —la historia de un libro paradigmático de nuestra colección, y este último que presentamos hoy como celebración e inicio de una nueva gestión, como articulación con la comunidad académica que somos, entre profesores, graduados, docentes, no docentes y estudiantes que habitamos nuestra querida FADU y que nos merecemos conocer un poquito más, de que va la historia de nuestra <strong>Biblioteca habitada.</strong> 
</p>
</div><p style="text-align: right;color: #212529;">Prof. Arq. Alejandro Vaca Bononato<br>Director del Centro de Documentación-Biblioteca FADU UBA Prof. Manuel Ignacio Net</p> 
                        
                    
                </div>
                <div class="col-2"></div>
            </div>
        </div>`;
        text2 = `<div class="btn-toolbar justify-content-start" role="toolbar" aria-label="Toolbar with button groups">
        <div class="btn-group btn-group-sm" role="group" aria-label="First group">
          <button type="button" class="btn btn-outline-secondary" onclick="escribir(1)">Primero</button>
          <button type="button" class="btn btn-outline-secondary" onclick="escribir(6)">Anterior</button>
          <button type="button" class="btn btn-outline-secondary disabled" onclick="escribir(7)">Siguiente</button>
          <button type="button" class="btn btn-outline-secondary disabled" onclick="escribir(7)">Último</button>
        </div>
      </div>`;
        break;

      default:
        text = `<div class="main-flex-container">
            <div class="row">
                <div class="col-2"></div>
                <div class="col-8">
                    <div class="two-columns">
                    
                    </div>
                </div>
                <div class="col-2"></div>
            </div>
        </div>`;
        text2 = `<div class="btn-toolbar justify-content-start" role="toolbar" aria-label="Toolbar with button groups">
        <div class="btn-group btn-group-sm" role="group" aria-label="First group">
          <button type="button" class="btn btn-outline-secondary" onclick="escribir(1)">Primero</button>
          <button type="button" class="btn btn-outline-secondary disabled" onclick="escribir(1)">Anterior</button>
          <button type="button" class="btn btn-outline-secondary disabled" onclick="escribir(2)">Siguiente</button>
          <button type="button" class="btn btn-outline-secondary" onclick="escribir(6)">Último</button>
        </div>
      </div>`;
        break;
    }

    node.innerHTML = text;
    node2.innerHTML = text2;
    return
}
