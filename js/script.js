function login() {
			    const username = document.getElementById("username").value.trim();
			    const password = document.getElementById("password").value.trim();
			
			    if (username === "" || password === "") {
			        Swal.fire({
			            title: "Vnesi podatke",
			            text: "Vnesi uporabniško ime in geslo.",
			            icon: "warning",
			            confirmButtonText: "V redu"
			        });
			    } else {
			        Swal.fire({
			            title: "Uspešna prijava",
			            text: "Vnosna polja so izpolnjena.",
			            icon: "success",
			            confirmButtonText: "V redu"
			        });
			    }
			}