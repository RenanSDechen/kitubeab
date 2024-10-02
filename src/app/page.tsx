import Image from "next/image";
import Input from "postcss/lib/input";

export default function Home() {
  return (
    <div>

        <header className="header" id="header">
            <nav className="nav container">
                <a href="#" className="nav__logo">
                    Alberto Almeida<i className='bx bxs-home-alt-2'></i>
                </a>
                <div className="nav__menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link activate-link">
                                <i className='bx bx-home-alt-2'></i>
                                <span>Home</span>
                            </a>
                        </li>    

                        <li className="nav__item">
                            <a href="#popular" className="nav__link">
                                <i className='bx bx-building-house' ></i>
                                <span>Casas</span>
                            </a>
                        </li>    

                        <li className="nav__item">
                            <a href="#value" className="nav__link">
                                <i className='bx bx-award' ></i>
                                <span>Valores</span>
                            </a>
                        </li>   

                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className='bx bx-phone'></i>
                                <span>Contato</span>
                            </a>
                        </li>    
                    </ul>
                </div> 
            </nav>       
        </header>



        <main className="overflow-hidden">
            <section className="bg-gradient-to-tr from-gray-800 to-gray-900 pb-0  pt-18 pb-8" id="home">
               <div className="home__container container grid">
                    <div className="home__data">
                        <h1 className="home__title">
                            Descubra  as melhores  residências
                        </h1>
                        <p className="home__description">
                            Encontre residências que combinam com você com muita facilidade. Esqueça todas as dificuldades em encontrar uma lar ideal para você.
                        </p>

                        <div className="div home__value">
                            <div>
                                <h1 className="home__value-number">
                                    330mil<span>+</span>
                                </h1>
                                <span className="home__value-description">
                                    Produto  Premium
                                </span>
                            </div>

                            <div>
                                <h1 className="home__value-number">
                                    150mil<span>+</span>
                                </h1>
                                <span className="home__value-description">
                                    Para Solteiros
                                </span>
                            </div>

                            <div>
                                <h1 className="home__value-number">
                                    300mil<span>+</span>
                                </h1>
                                <span className="home__value-description">
                                    Ideal para Casais
                                </span>
                            </div>
                        </div> 
                    </div>

                    <div className="home__images">
                        <div className="home__orbe"></div>

                        <div className="home__img">
                            <Image src="./assets/images/home.jpg" alt=""></Image>
                        </div>
                    </div>
               </div>      
            </section>


        <section className="logos section" id="logos">
            <div className="logos__container container grid">
                <div className="logos__img">
                    <Image src="./assets/images/logo1.png" alt="Construtora Parceira"></Image>
                </div>
                <div className="logos__img">
                    <Image src="./assets/images/logo2.png" alt="Construtora Parceira"></Image>
                </div>
                <div className="logos__img">
                    <Image src="./assets/images/logo3.png" alt="Construtora Parceira"></Image>
                </div>
                <div className="logos__img">
                    <Image src="./assets/images/logo4.png" alt="Construtora Parceira"></Image>
                </div>
            </div>
        </section>



        <section className="popular section" id="popular">
            <div className="container">
                <span className="section__subtitle">Melhor Escolha</span>
                <h2 className="section__title">
                    Casas populares<span>.</span>
                </h2>

                <div className="popular__container swiper">
                    <div className="swiper-wrapper">

                        <article className="popular__card swiper-slide">
                            <Image src="./assets/images/popular1.jpg" alt="" className="popular__img"></Image>
                            <div className="popular__data">
                                <h2 className="popular__price">
                                    <span>R$</span>250.000
                                </h2>
                                <h3 className="popular__title">
                                    Apartamento 3 Qts
                                </h3>
                                <p className="popular__description">
                                    Aguas Claras - Quadra 205,
                                    Torre 2, Apto 305
                                </p>
                            </div>
                        </article>

                        <article className="popular__card swiper-slide">
                            <Image src="./assets/images/popular2.jpg" alt="" className="popular__img"></Image>
                            <div className="popular__data">
                                <h2 className="popular__price">
                                    <span>R$</span>320.000
                                </h2>
                                <h3 className="popular__title">
                                    Casa 5 Suites
                                </h3>
                                <p className="popular__description">
                                    Aguas Claras - Quadra 105,
                                    Torre52, Apto 1003
                                </p>
                            </div>
                        </article>

                        <article className="popular__card swiper-slide">
                            <Image src="./assets/images/popular3.jpg" alt="" className="popular__img"></Image>
                            <div className="popular__data">
                                <h2 className="popular__price">
                                    <span>R$</span>1.250.000
                                </h2>
                                <h3 className="popular__title">
                                    Casa 2 Quartos
                                </h3>
                                <p className="popular__description">
                                    Guará,
                                    Quadra 3
                                </p>
                            </div>
                        </article>

                        <article className="popular__card swiper-slide">
                            <Image src="./assets/images/popular4.jpg" alt="" className="popular__img"></Image>
                            <div className="popular__data">
                                <h2 className="popular__price">
                                    <span>R$</span>150.000
                                </h2>
                                <h3 className="popular__title">
                                    Casa 3 Quartos
                                </h3>
                                <p className="popular__description">
                                    Vicente Pires, Rua 1
                                    Ch 5, Cond. Por do Sol
                                </p>
                            </div>
                        </article>
          
                        <article className="popular__card swiper-slide">
                            <Image src="./assets/images/popular5.jpg" alt="" className="popular__img"></Image>
                            <div className="popular__data">
                                <h2 className="popular__price">
                                    <span>R$</span>750.000
                                </h2>
                                <h3 className="popular__title">
                                    Lote 1000m²
                                </h3>
                                <p className="popular__description">
                                    ParWay, Qd 65
                                    Cond. Solar
                                </p>
                            </div>
                        </article>
                    </div>

                    <div className="swiper-pagination"></div> 
                </div>
            </div>
        </section>



        <section className="value section" id="value">
            <div className="value__container container grid">
                <div className="value__images">
                    <div className="value__orbe"></div>

                    <div className="value__img">
                        <Image src="./assets/images/value.jpg" alt=""></Image>
                    </div>
            </div>    

            <div className="value__content">
                        <div className="value_data">
                            <span className="section__subtitle">Nossos Valores</span>
                            <h2 className="section__title">
                                Damos valor a você<span>.</span>
                            </h2>
                            <p className="value__description">
                                Estamos sempre prontos em ajudar a encontrar o melhor lugar para sua vida.
                            </p>
                        </div>
                    <div className="value__accordion">
                        <div className="value__accordion-item">
                            <header className="value__accordion-header">
                                <i className='bx bxs-star value__accordion-icon'></i>
                                <h3 className="value__accordion-title">
                                    Os melhores imóveis para você.
                                </h3>
                                <div className="value__accordion-arrow">
                                    <i className='bx bxs-down-arrow'></i>
                                </div>
                            </header>

                            <div className="value__accordion-content">
                                <p className="value__accordion-description">
                                    Imóveis de qualidade em regiões privilegiadas.
                                </p>
                            </div>
                        </div>

                        <div className="value__accordion-item">
                            <header className="value__accordion-header">
                                <i className='bx bxs-bar-chart-square value__accordion-icon'></i>
                                <h3 className="value__accordion-title">
                                    Os melhores preços do mercado.
                                </h3>
                                <div className="value__accordion-arrow">
                                    <i className='bx bxs-down-arrow'></i>
                                </div>
                            </header>

                            <div className="value__accordion-content">
                                <p className="value__accordion-description">
                                    Buscamos sempre as melhores ofertas do mercado, para que você possa encontrar seu lar com as melhores condições.
                                </p>
                            </div>
                        </div>

                        <div className="value__accordion-item">
                            <header className="value__accordion-header">
                                <i className='bx bxs-check-square value__accordion-icon'></i>
                                <h3 className="value__accordion-title">
                                    Seus dados seguros
                                </h3>
                                <div className="value__accordion-arrow">
                                    <i className='bx bxs-down-arrow'></i>
                                </div>
                            </header>

                            <div className="value__accordion-content">
                                <p className="value__accordion-description">
                                    Garantimos sua privacidade mantendo seus dados seguros sem qualquer compartilhamento. 
                                </p>
                            </div>
                        </div>
                     </div>
                    
            </div>
            </div>
        </section>

        <section className="contact section" id="contact">
            <div className="contact__container container grid">
                <div className="contact__images">
                    <div className="contact__orbe"></div>

                    <div className="contact__img">
                        <Image src="./assets/images/contact.png" alt="Contato"></Image>
                    </div>
                </div>

                <div className="contact__content">

                    <div className="contact__data">
                        <span className="section__subtitle">Contato</span>
                        <h2 className="section__title">
                            Entre em contato<span>.</span>
                        </h2>
                        <p className="contact__description">
                            É um problema encontrar a casa dos sonhos? Precisa de ajuda para comprar sua primeira casa? Ou precisa de uma consultoria para investir em imóveis? Entre em contato conosco.
                        </p>
                    </div>


                    <div className="contact__card">

                        <div className="contact_card-box">
                            <div className="contact__card-info">
                                <i className='bx bxs-phone-call'></i>
                                <div>
                                    <h3 className="contact__card-title">
                                    Telefone
                                    </h3>
                                    <p className="contact__card-description">
                                        61-35852021
                                    </p>
                                </div>
                            </div>

                            <a href="tel:+5561999999999">
                                <button className="contact__card-button">
                                    Ligue Agora
                                </button>
                            </a>


                        </div>

                        <div className="contact_card-box">
                            <div className="contact__card-info">
                                <i className='bx bxl-whatsapp'></i>
                                <div>
                                    <h3 className="contact__card-title">
                                        Chat
                                    </h3>
                                    <p className="contact__card-description">
                                        61-35852021
                                    </p>
                                </div>
                            </div>

                            <a href="https://wa.me/5561999999999" target="_blank">
                                <button className="contact__card-button">
                                    WhatsApp
                                </button>
                            </a>
                        </div>

                        <div className="contact_card-box">
                            <div className="contact__card-info">
                                <i className='bx bxs-envelope'></i>
                                <div>
                                    <h3 className="contact__card-title">
                                        E-mail
                                    </h3>
                                    <p className="contact__card-description">
                                        corretor@imobiliaria.com
                                    </p>
                                </div>
                            </div>

                            <a href="mailto:jonathancosta746@gmail.com">
                                <button className="contact__card-button">
                                    Mensagem
                                </button>
                            </a>
                        </div>


                    </div>
                </div>
            </div>    
        </section>


        <section className="appointment section">
            <div className="appointment-container container">
                <div className="info">
                    <h2>Envie uma mensagem<span>.</span></h2>
                    <p>Mande uma mensagem que entraremos em contato o mais breve possivel.</p>
                </div>

                <form action="https://formspree.io/f/xvolerzj" method="POST" className="form__appointment">

                    <div className="form__group">
                        <label htmlFor="name">Nome</label>
                        <input type="text" placeholder="Digite seu nome" name="Nome do Cliente" id="name" required/>
                    </div>

                    <div className="form__group">
                        <label htmlFor="phone">Telefone</label>
                        <input type="number" placeholder="Digite seu telefone" name="Numero de Telefone" id="number" required/>
                    </div>

                    <div className="form__group">
                        <label htmlFor="return">Selecione a forma de retorno</label>
                        <select name="return" >
                            <option value="ligação-durante-manha" >Ligação durante o período da manhã</option>
                            <option value="ligação-durante-tarde">Ligação durante o período da tarde</option>
                            <option value="ligação-durante-noite">Ligação durante o período da noite</option>
                            <option value="whatsApp">WhatsApp</option>
                            <option value="email">E-mail</option>
                        </select>
                    </div>


                    <div className="form__group">
                        <label htmlFor="message">Mensagem</label>
                        <textarea name="Mensagem" id="message" placeholder="Adicione uma mensagem"></textarea>
                    </div>
                    <input type="submit" value="Enviar Mensagem" className="btn-primary"/>
                </form>
            </div>
        </section>


        <footer className="footer section">
            <div className="footer__container container grid">
                <div>
                    <a href="#" className="footer__logo">
                        Alberto Almeida<i className='bx bxs-home-alt-2'></i>
                    </a>
                    <p className="footer__description">
                        Minha missão é fazer as pessoas 
                        encontrarem o melhor lugar para viver.
                    </p>
                </div>

                <div className="footer__content">
                        <h3 className="footer__title">
                            Novidades
                        </h3>
                        <ul className="footer__social">
                            <a href="https://www.youtube.com/user/JonathanCosta746" target="_blank" className="footer__social-link">
                                <i className='bx bxl-youtube'></i>
                            </a>
                            <a href="https://www.instagram.com/jonathansantos.costa/" target="_blank" className="footer__social-link">
                                <i className='bx bxl-instagram-alt'></i>
                            </a>
                            <a href="https://www.tiktok.com/" target="_blank" className="footer__social-link">
                                <i className='bx bxl-tiktok'></i>
                            </a>
                        </ul>
                </div>
            </div>

            <div className="footer__info ">
                <span className="footer__copy">
                    &#169; Alberto Almeida. Todos os direitos reservados.
                </span>
            </div>
        </footer>


        <a href="#" className="scrollup" id="scroll-up">
            <i className='bx bx-chevrons-up'></i>
        </a>

        <script src="https://unpkg.com/scrollreveal"></script>


        <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>


        <script src="./assets/js/main.js"></script>
        </main>
    </div>
  );
}
