const form = document.getElementById('form');
const username = document.getElementById('username');
const prenom= document.getElementById('prenom')
const entreprise= document.getElementById('entreprise')
const email = document.getElementById('email');
const pays = document.getElementById('pays');
const sujet = document.getElementById('sujet');
// const catégorie = document.getElementById('catégorie');
const demande = document.getElementById('demande');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const prenomValue = prenom.value.trim();
	const entrepriseValue = entreprise.value.trim();
	const emailValue = email.value.trim();
    const paysValue = pays.value.trim();
	const sujetValue = sujet.value.trim();
	// const passwordValue = password.value.trim();
	const demandeValue = demande.value.trim();
    
	if(usernameValue === '') {
		setErrorFor(username, 'nom ne peut pas être vide');
	} else if (username.value.length <= 5){
        setErrorFor(username,'5 caractère minimum')
    }
    
    else {
		setSuccessFor(username);
	}

    if(prenomValue === '') {
		setErrorFor(prenom, 'prenom ne peut pas être vide');
	} else if (prenom.value.length <= 8){
        setErrorFor(prenom,'5 caractère manimum')
    }
    
    else {
		setSuccessFor(prenom);
	}

	if(entrepriseValue === '') {
		setErrorFor(entreprise, 'entreprise ne peut pas être vide');
	}
    
    else {
		setSuccessFor(entreprise);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email ne peut pas être vide');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Email non valide');
	} else {
		setSuccessFor(email);
	}
	
    if(paysValue === '') {
		setErrorFor(pays, 'pays ne peut pas être vide');
	} else {
		setSuccessFor(pays);
	}

    if(sujetValue === '') {
		setErrorFor(sujet, 'sujet ne peut pas être vide');
	} else {
		setSuccessFor(sujet);
	}
	if(demandeValue === '') {
		setErrorFor(demande, 'demande ne peut pas être vide');
	} else {
		setSuccessFor(demande);
	}
	

	if(demandeValue === '') {
		setErrorFor(password2, 'Veillez remplir votre demande');
	}  else{
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
