<template app>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn class="black white--text" rounded v-on="on">Register</v-btn>
    </template>
    <v-card>
      <v-btn icon @click="dialog = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-card-title>
        <span class="headline">User Profile</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field label="Legal first name*" required v-model="propObj.FName"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field label="Legal middle name" hint="example of helper text only on focus" v-model="propObj.MName"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                label="Legal last name*"
                hint="example of persistent helper text"
                persistent-hint
                required v-model="propObj.LName"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Email*" required v-model="propObj.EmailId"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Password*" type="password" required v-model="propObj.Password"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*" required v-model="propObj.Age"></v-select>
            </v-col>
            <v-col cols="12" sm="6">
              <v-autocomplete
                :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                label="Interests"
                multiple
              ></v-autocomplete>
            </v-col>
          </v-row>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click="close,dialog = false">Close</v-btn>
        <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "RegisterUser",
  props: {
      propObj: {
        type: Object,
        required: true,
        default: function () { return { "Id": 0, "FName": "","MName": "","LName": "", "EmailId": "", "Password": "", "Age": "" } }
      }
    },
  data: () => ({
      dialog: false,
    }),
    methods: {
      close: function () {
        thisdialog = false
      },
      save: function () {
       // try {
          const data = JSON.stringify(this.propObj)
          alert(data);
      this.$emit('close')
         // let response = this.$http.post(`api/about/SaveUser`, 
           // this.propObj,
           
      }
    }
  }
</script>