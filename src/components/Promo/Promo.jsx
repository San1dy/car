import './Promo.css';

const imageUrl = 'https://www.rbauto.ru/upload/webp/100/upload/iblock/755/wvb7qwnsewaepw01a33x437637wupbpy.webp';
const imageUr2 = 'https://www.rbauto.ru/upload/webp/100/upload/iblock/c53/g0djnb736xlv6yffyo4c1bukznql4bmd.webp';
const imageUr3 = 'https://www.rbauto.ru/upload/iblock/4ad/rlydfr7byluass3zj5euj88tqia20138.jpg';
const imageUr4 = 'https://www.rbauto.ru/upload/webp/100/upload/resize-cache/webp/iblock/716/v44w4qr3tw8wtsabcisxj5s886pm2yve.webp';
const imageUr5 = 'https://www.rbauto.ru/upload/webp/100/upload/resize-cache/webp/iblock/f0e/pq18dqir69kua0rd0g5nrkjr7sx91bsh.webp';
const imageUr6 = 'https://www.rbauto.ru/upload/webp/100/upload/resize-cache/webp/iblock/efa/tm1p1gqpsi8s2urxakce0n9k7pvyfdbd.webp';
const imageUr7 = 'https://www.rbauto.ru/upload/webp/100/upload/resize-cache/webp/iblock/f0e/pq18dqir69kua0rd0g5nrkjr7sx91bsh.webp';
const imageUr8 = 'https://www.rbauto.ru/upload/webp/100/upload/resize-cache/webp/iblock/efa/tm1p1gqpsi8s2urxakce0n9k7pvyfdbd.webp';

function GridItem({ imageSrc, title, text, link }) {
  return (
    <article className="grid-item">
      <div className="image">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="info">
        <h2>{title}</h2>
        <div className="info-text">
          <p>{text}</p>
        </div>
        <div className="button-wrap">
          <a className="atuin-btn" href={link}>Подробнее</a>
        </div>
      </div>
    </article>
  );
}

function Grid() {
  return (
    <section className="grid">
      <GridItem
        imageSrc={imageUrl}
        title="САМОСВАЛЫ SITRAK C7H MAX ЛУЧШИЙ ПЕРЕВОЗЧИК ГРУЗОВ."
        text="Компания «Русбизнесавто» поставила шесть самосвалов Sitrak C7H MAX для крупного холдинга"
        link="#link2"
      />
      <GridItem
        imageSrc={imageUr2}
        title="САМОСВАЛЫ SITRAK C7H MAX ЛУЧШИЙ ПЕРЕВОЗЧИК ГРУЗОВ."
        text="Компания «Русбизнесавто» поставила шесть самосвалов Sitrak C7H MAX для крупного холдинга"
        link="#link2"
      />
      <GridItem
        imageSrc={imageUr3}
        title="САМОСВАЛЫ SITRAK C7H MAX ЛУЧШИЙ ПЕРЕВОЗЧИК ГРУЗОВ."
        text="Компания «Русбизнесавто» поставила шесть самосвалов Sitrak C7H MAX для крупного холдинга"
        link="#link2"
      />
      <GridItem
        imageSrc={imageUr4}
        title="САМОСВАЛЫ SITRAK C7H MAX ЛУЧШИЙ ПЕРЕВОЗЧИК ГРУЗОВ."
        text="Компания «Русбизнесавто» поставила шесть самосвалов Sitrak C7H MAX для крупного холдинга"
        link="#link2"
      />
      <GridItem
        imageSrc={imageUr5}
        title="САМОСВАЛЫ SITRAK C7H MAX ЛУЧШИЙ ПЕРЕВОЗЧИК ГРУЗОВ."
        text="Компания «Русбизнесавто» поставила шесть самосвалов Sitrak C7H MAX для крупного холдинга"
        link="#link2"
      />
      <GridItem
        imageSrc={imageUr6}
        title="САМОСВАЛЫ SITRAK C7H MAX ЛУЧШИЙ ПЕРЕВОЗЧИК ГРУЗОВ."
        text="Компания «Русбизнесавто» поставила шесть самосвалов Sitrak C7H MAX для крупного холдинга"
        link="#link2"
      />
      <GridItem
        imageSrc={imageUr7}
        title="САМОСВАЛЫ SITRAK C7H MAX ЛУЧШИЙ ПЕРЕВОЗЧИК ГРУЗОВ."
        text="Компания «Русбизнесавто» поставила шесть самосвалов Sitrak C7H MAX для крупного холдинга"
        link="#link2"
      />
      <GridItem
        imageSrc={imageUr8}
        title="САМОСВАЛЫ SITRAK C7H MAX ЛУЧШИЙ ПЕРЕВОЗЧИК ГРУЗОВ."
        text="Компания «Русбизнесавто» поставила шесть самосвалов Sitrak C7H MAX для крупного холдинга"
        link="#link2"
      />
    </section>
  );
}

export default Grid;

