<template>
    <!-- <div class="container">
        <div class="columns is-centered">
            <div class="column is-two-fifths">
                <div class="box">
                    <div class="box-title">
                        <h2>Logga in</h2>
                    </div>
                    <el-form ref="form" :model="form" label-position="right" label-width="100px">
                        <el-form-item label="Epost">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="Lösenord">
                            <el-input v-model="form.password"></el-input>
                        </el-form-item>
                    </el-form>
                    <div class="box-footer">
                        <el-button type="primary" @click="submitForm('ruleForm')">Logga in</el-button>
                        <el-button @click="resetForm('ruleForm')">Återställ</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
    <el-row type="flex" justify="center">
        <el-col :span="6">
            <el-card class="box-card">
                <div class="box-title">
                    <h2>Logga in</h2>
                    <el-alert v-if="form.error" :title="form.error" type="error" show-icon>
                    </el-alert>
                </div>
                <el-form ref="form" :model="form" label-position="right" label-width="70px">
                    <el-form-item label="Epost">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="Lösenord">
                        <el-input v-model="form.password"></el-input>
                    </el-form-item>
                </el-form>
                <div class="box-footer">
                    <el-button type="primary" @click="login('ruleForm')">Logga in</el-button>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
import gql from "graphql-tag";
export default {
    data() {
        return {
            form: {
                email: '',
                password: '',
                error: ''
            }
        }
    },
    methods: {
        async login() {
            try {
                let email = this.form.email;
                let password = this.form.password;
                const { data } = await this.$apollo.mutate({
                    mutation: LOGIN_USER,
                    variables: {
                        email,
                        password
                    }
                });
                if (data && data.login && data.login.token) {
                    this.$store.dispatch("login", {
                        token: data.login.token
                    });
                }
            } catch (error) {
                console.log(error)
                this.form.error = 'Fel epost eller lösenord'
            }
        },
    },
}
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;
</script>


<style>

</style>
