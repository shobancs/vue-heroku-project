<template app>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn  class="black white--text" rounded v-on="on">Login</v-btn>
    </template>
    <v-card>
      <v-form v-model="valid" ref="form" @submit="validateBeforeSubmit">
      <v-btn icon @click="dialog = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-card-title>
        <span class="headline">User Login</span>
      </v-card-title>
      <v-card-text>
         
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="E-mail"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
             
            </v-col>
            <v-col cols="12">
               <v-text-field
      v-model="Pass"
      :error-messages="passErrors"      
      label="Password"
      type="password"
      required
      @input="$v.Pass.$touch()"
      @blur="$v.Pass.$touch()"
    ></v-text-field>
            </v-col>
          </v-row>
        </v-container>       
      </v-card-text>

      <v-card-actions>
        <v-btn color="blue darken-1" text @click="dialog = false">Forgot Password</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="clear">Clear</v-btn>
        <v-btn color="blue darken-1" text @click="submit">Login</v-btn>
      </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>


<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'
   import VueFormGenerator from 'vue-form-generator'

  export default {
      name: "Login",
    mixins: [validationMixin],

    validations: {
      Pass: { required },
      email: { required, email }     
    },

    data: () => ({
      dialog: false,
    login: false,
    valid: true,    
      Pass: '',
      email: ''  
    }),

    computed: { 
      passErrors () {
        const errors = []
        if (!this.$v.Pass.$dirty) return errors       
        !this.$v.Pass.required && errors.push('Password is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
    },

    methods: {
      submit () {
        this.$v.$touch();
       // alert(this.email);
           
     // e.preventDefault();
      //this.dialog=false
       },
      clear () {
        this.$v.$reset()
        this.Pass = ''
        this.email = ''        
      },
    },
  }
</script>