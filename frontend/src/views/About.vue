<template>
  <div class="resume">
    <div class="jumbotrom">
      <div class="heading-primary title">Resume</div>
    </div>

    <div class="resume-content">
      <div class="header">
        <v-img>
          <img slot="image" src="@/assets/imgs/ProfilePic.jpg" />
          <img slot="preloader" src="@/assets/loadingSpinner/spin-alt.svg" />
          <div slot="error">error message</div>
        </v-img>
        <div class="header-content">
          <div class="personal-details">
            <div class="heading-primary name">Vimal Jayapalan</div>
            <div class="heading-secondary role">Full Stack Developer</div>
            <div class="emailid">
              <font-awesome-icon :icon="['far', 'envelope']" />j.vimal@outlook.com
            </div>
            <div class="mobileno">
              <font-awesome-icon :icon="['fas', 'phone-alt']" />+91 988 440 0406
            </div>
          </div>
          <div class="links">
            <div v-for="(links, val, id) in socialMedias" :key="id">
              <font-awesome-icon :icon="links.icon" />
              <a :href="links.url">{{links.url}}</a>
            </div>
          </div>
        </div>
      </div>

      <div class="about">
        <timeline v-for="(d, idx) in data" :key="idx">
          <template v-slot:title>{{d.title}}</template>
          <template v-slot:date>{{d.date}}</template>
          <template v-slot:description>{{d.description}}</template>
          <template v-slot:achievements>{{d.achievements}}</template>
        </timeline>
      </div>
    </div>
  </div>
</template>

<script>
import timeline from "@/components/timeline";
export default {
  components: {
    timeline
  },
  data() {
    return {
      socialMedias: [
        { url: "https://www.linkedin.com/in/vimal-jay-a932b1123", icon: ["fab", "linkedin-in"] },
        { url: "https://github.com/jvimal18", icon: ["fab", "github-alt"] },
        { url: "https://www.reddit.com/user/vima1808", icon: ["fab", "reddit-alien"] },
        { url: "https://www.reddit.com/user/vima1808", icon: ["fas", "globe"] },
      ],
      data: [
        {
          date: "jan 1 2020",
          title: "Senio",
          description:
            "Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel.",
          achievements:
            "Praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."
        },

        {
          date: "jan 1 2021",
          title:
            "Ea labore in labore cupidatat exercitation laboris esse nisi dolor.",
          description:
            "Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel.",
          achievements:
            "Praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."
        },
        {
          date: "jan 1 2022",
          title:
            "Qui commodo veniam sint labore est anim reprehenderit reprehenderit elit quis do ut.",
          description:
            "Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel.",
          achievements:
            "Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel.,Praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."
        },
        {
          date: "jan 1 2023",
          title:
            "Quis esse dolor magna nulla non ad consequat fugiat pariatur.",
          description:
            "Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel.",
          achievements:
            "Praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.resume {
  .jumbotrom {
    height: 300px;
    background-color: var(--primary-color);
    text-align: left;
    color: var(--white-color);
    padding: 0 24rem;

    .title {
      padding-top: 5rem;
    }
  }

  .resume-content {
    margin: 0 20rem;
    position: relative;
    top: -15rem;
    box-shadow: 0 0 8px 0px #333;

    .header {
      display: flex;
      align-items: center;
      background-color: var(--text-color);
      width: 100%;
      margin: 0;
      flex-wrap: wrap;

      .vue-load-image {
        display: flex;
        flex: 1;
        align-items: center;
        img {
          height: 200px;
        }
      }

      .header-content {
        display: flex;
        flex: 6;
        justify-content: space-between;
        align-items: center;
        color: var(--white-color);
        padding-left: 3rem;
        text-align: left;

        .name {
          font-weight: 600;
        }

        .role {
          font-size: 2rem;
        }

        .fa-envelope,
        .fa-phone-alt {
          margin-right: 1rem;
        }

        .links {
          a {
            color: var(--white-color);
          }
        }
      }
    }

    .about {
      overflow: hidden;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
}
</style>