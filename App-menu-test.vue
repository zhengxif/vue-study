<template>
  <div>
    <Menu :data="data"></menu>
  </div>
</template>
<script>
import Menu from "./components/menu/menu";
export default {
  data() {
    return {
      data: [
        {
          name: "导航一",
          id: 1,
          children: [
            {
              name: "导航1.1",
              id: 1.1,
              children: [
                { name: "导航1.1.1", id: 1.3 },
                {
                  name: "导航1.1.1",
                  id: 1.4,
                  children: [
                    { name: "导航1.1.5", id: 1.5 },
                    { name: "导航1.1.6", id: 1.6 }
                  ]
                }
              ]
            },
            { name: "导航1.2", id: 1.2 }
          ]
        },
        { name: "导航二", id: 2 },
        { name: "导航三", id: 3 },
        { name: "导航三", id: 4 }
      ]
    };
  },
  components: {
      Menu
  }
};
</script>