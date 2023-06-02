<template>
    <div>
        <div class="container col-md-6">
            <form @submit.prevent>
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12">
                        <div class="form-group">
                            <strong>Email:</strong>
                            <input type="email" name="email" class="form-control" />
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12">
                        <div class="form-group">
                            <strong>Password:</strong>
                            <input type="password" name="password" class="form-control" />
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12">
                        <div class="col-xs-12 col-sm-12 col-md-12 text-center mt-3">
                            <button class="btn btn-primary">Login</button>
                            <router-link to="/register"><h6>don't have an account?</h6></router-link>
                            <router-link to="/forgot"><h5>Forgot Password?</h5></router-link>

                        </div>


                    </div>
                </div>
            </form>


        </div>
    </div>
</template>
<script>

</script>

<style></style>