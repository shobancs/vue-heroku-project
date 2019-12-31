<template app>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on }" class="v-list-item v-list-item--link theme--light">
     
       <v-list-item-icon class="v-list-item v-list-item--link theme--light">
            <v-icon v-on="on">mdi-phone-forward</v-icon>
          </v-list-item-icon>

        
    </template>
    <v-card>
      <v-btn icon @click="dialog = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-card-title class="headline">Do you need Sales or Support?</v-card-title>
      <v-card-text>Sales: 1-111-222-3333</v-card-text>
      <v-card-text>Support: 1-111-222-3333</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="dialog = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "Callus",

  data: () => ({
    dialog: false
  })
};
</script>