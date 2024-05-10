<script>
export default {
  name: 'Footer',
  data() {
    return {
      cards: [
        {
          title: 'Bookings',
          adress: '502 New Design Str, Melbourn, San Francisco, CA 94110, United States Of America Australia',
          telephone: [
            {
              icon: 'imgs/favicon.png',
              number: '1123-456-789'
            }
          ],
          email: 'Email: demo@example.com',
          social: [
            {
              socialIcon: 'fa-brands fa-instagram'
            },
            {
              socialIcon: 'fa-brands fa-facebook'
            },
            {
              socialIcon: 'fa-brands fa-twitter'
            },
            {
              socialIcon: 'fa-brands fa-youtube'
            },
          ]
        },
        {
          title: 'information',
          links: [
            {
              link: 'Product Support'
            },
            {
              link: 'Checkout'
            },
            {
              link: 'Report Abuse'
            },
            {
              link: 'Redeem Voucher'
            },
            {
              link: 'Order Status'
            },

          ]
        },
        {
          title: 'Support',
          links: [
            {
              link: 'Policies & Rules'
            },
            {
              link: 'Privacy Policy'
            },
            {
              link: 'License Policy'
            },
            {
              link: 'My Account'
            },
            {
              link: 'Locality'
            },
          ]
        }
      ]
    }
  }
}
</script>

<template>
  <div class="container-md">
    <ul class="cards">
      <li v-for="(item, i) in cards" :key="i">
        <div class="card-title">{{ item.title }}</div>
        <div class="card-adress">{{ item.adress }}</div>
        <ul>
          <li class="contacts" v-for="(contact, i) in item.telephone" :key="i">
            <div><img class="t-img" :src="contact.icon" alt=""></div>
            <div class="number">{{ contact.number }}</div>
          </li>
        </ul>
        <div class="email"> {{ item.email }}</div>
        <ul class="icons">
          <li class="icon" v-for="(icon, i) in item.social" :key="i">
            <a href="#"><font-awesome-icon :icon="icon.socialIcon" /></a>
          </li>
        </ul>
        <ul>
          <li class="link" v-for="(link, i) in item.links" :key="i">
            <a href="#">
              <div>{{ link.link }}</div>
            </a>
          </li>
        </ul>
      </li>
    </ul>
    <div class="newsletter">
      <div class="newsletter-title">Newsletter</div>
      <input class="email" type="email" placeholder="Email">
      <textarea class="message" name="message" id="" cols="15" rows="2" placeholder="Message"></textarea>
      <button class="button">Send Message</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-md {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 50px;

  .cards {
    display: grid;
    text-align: start;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 100px;
    row-gap: 30px;
    margin: 30px 0;
    text-transform: none;
    color: rgba(255, 255, 255, 0.7);

    .card-title {
      text-transform: uppercase;
      font-size: 30px;
      font-weight: 500;
      margin-bottom: 25px;
      color: white;
    }

    .card-adress {
      font-size: 16px;
    }

    .contacts {
      display: flex;
      align-items: center;
      margin-top: 10px;
      margin-bottom: 5px;

      .t-img {
        max-width: 18px;
        margin-right: 10px;
      }

      .number {
        padding-bottom: 5px;
      }
    }

    .icons {
      margin-top: 18px;
      display: flex;
      justify-content: space-around;
      margin-left: -10px;
      margin-right: 15px;

      .icon {
        font-size: 20px;
        color: white;
      }

      .icon:hover {
        color: #F2870C;
      }
    }

    .link {
      line-height: 2rem;
      font-size: 20px;
    }

    .link:hover {
      color: #F2870C;
    }
  }

  .newsletter {
    text-align: start;
    margin: 30px 0;

    .newsletter-title {
      text-transform: uppercase;
      font-size: 30px;
      font-weight: 500;
      margin-bottom: 25px;
      color: white;
    }

    .email,
    .message {
      background-color: transparent;
      border: 1px solid rgba(225, 225, 225, 0.5);
      width: 100%;
      padding: 15px 20px;
      color: white;
      font-size: 20px;
    }

    .email:focus {
      border: 1px solid #F2870C;
      outline: none;
      box-shadow: 0px 0px 10px #F2870C;
    }

    .message:focus {
      border: 1px solid #F2870C;
      outline: none;
      box-shadow: 0px 0px 10px #F2870C;
    }

    .message {
      margin: 15px 0;
    }

    ::placeholder {
      color: #F2870C;
      opacity: 0.5;
      font-size: 20px;
    }

    .button {
      text-transform: uppercase;

    }
  }
}
</style>
