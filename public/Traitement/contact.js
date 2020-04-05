 /////connexion/////

 $(document).ready(function() {

    $("#registraton_form").validate({
        rules: {
            name: {
                required : true,
                minlength: 4
            },
            email: {
                required:true,
                email:true
            },
            password: {
                required: true,
                minlength: 5
            },

        },
        messages: {
            name: {
                required :"Le nom est requis...",
                minlength: "Veuillez saisir quatre caractères"
            },
            email: {
                required :"email est requis...",
               email: "S'il vous plaît, mettez une adresse email valide."
            },
            password: {
                required :"Mot de passe est requis...",
              minlength: " Veuillez saisir au moins 5 caractères."
            },

                
        }

    });
});

/////inscription///////
$(document).ready(function(){
    $("#registraton_inscript").validate({
        rules: {
            Name2:{
                required: true,
                minlength:4
            },
            Name3: {
                required: true,
                minlength:4
            },
            date: {
                required:true,
                date:true
            },
            cin: {
                required:true,
                cin:true
            },
            emailid: {
                required: true,
                emailid:true
            },
            passwordid: {
                required: true,
                minlength:5
              
            },
            tele:{
                required:true,
                minlength:10
            },
            confirmation: {
                required: true,
                equalTo: "#password-id"
              
            },

        },
        messages: {
            Name2: {
                required :"Le nom est requis...",
                minlength: "Veuillez saisir quatre caractères"
            },
            Name3: {
                required :"Le prenom est requis...",
                minlength: "Veuillez saisir quatre caractères"
            },
            date: {
                required :"La date est requis...",
                minlength: "S'il vous plaît, mettez un date valide."
            },
            cin: {
                required :"Cin est requis...",
                minlength: "S'il vous plaît, mettez une CIN valide."
            },
            emailid: {
                required :"email est requis...",
               email: "S'il vous plaît, mettez une adresse email valide."
            },
            tele:{
                required:"Numero de Tele est requis...",
                minlength: "S'il vous plaît, mettez un Numero valide."
            },
            confirmation: {
                required :"confirmation est requis...",
              equalTo: " Les mots de passe ne correspondent pas!"
            },

                
        }
    });
});