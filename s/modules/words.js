
const text = `
que: that;
de: of, from;
no: no;
a: to;
la: the;
el: the;
es: he is, she is, it is;
y: and;
en: in, on, at;
lo: it, him;
un: a, an;
por: for, by, through;
qué: what, how;
me: me, myself;
una: a, an;
te: you;
los: the;
se: himself, herself, itself;
con: with;
para: for, to;
mi: my;
está: he is, she is, it is;
si: if;
bien: well, good;
pero: but;
yo: I;
eso: that;
las: the;
sí: yes;
su: his, her, its;
tu: your;
aquí: here;
del: of the, from the, in the;
al: to the;
como: how, as, like;
le: him, her, formal you;
más: more;
esto: this;
ya: already;
todo: everything;
esta: this one;
vamos: let's go, come on;
muy: very;
hay: there is;
ahora: now;
algo: something;
estoy: I am;
tengo: I have;
nos: us;
tú: you;
nada: nothing;
cuando: when;
ha: he has, she has, it has;
este: this one;
sé: I know;
estás: you are;
así: like this;
puedo: I can;
cómo: how;
quiero: I want;
sólo: only, just;
soy: I am;
tiene: he has, she has, it has;
gracias: thank you;
o: or;
él: he;
bueno: good;
fue: he was, she was, it was;
ser: to be;
hacer: to do, to make;
son: they are;
todos: all of us, all of them;
era: he was, she was, it was;
eres: you are;
vez: time;
tienes: you have;
creo: I believe;
ella: she;
he: I have;
ese: that one;
voy: I go;
puede: he can, she can, it can;
sabes: you know;
hola: hello;
sus: his, her;
porque: because;
Dios: God;
quién: who;
nunca: never;
dónde: where;
quieres: you want;
casa: house;
favor: favor;
esa: that one;
dos: two;
tan: so;
señor: mister;
tiempo: time;
verdad: truth;
estaba: I was;
`

const lines = text
	.split(";")
	.map(l => l.trim())
	.filter(l => l.length > 0)

export const words = lines
	.map(line => {
		const [spanish, remaining] = line.split(": ")
		const english = remaining.split(",")
			.map(l => l.trim())
			.filter(l => l.length > 0)
		return {spanish, english}
	})
