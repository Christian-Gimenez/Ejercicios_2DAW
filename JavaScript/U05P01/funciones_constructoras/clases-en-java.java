import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Tren {
    private String id;
    private int asientos;
    private int ocupadosNormal;
    private int ocupadosConDev;
    private int ocupadosSinDev;

    public Tren(String id, int sinDev, int conDev, int normal) {
        if (sinDev + conDev > Tren.NUM_ASIENTOS * Tren.CONDICION_DEV) {
            return;
        }
        if (id != null && sinDev >= 0 && conDev >= 0 && normal >= 0) {
            this.id = id;
            this.asientos = Tren.NUM_ASIENTOS;
            this.ocupadosNormal = normal;
            this.ocupadosConDev = conDev;
            this.ocupadosSinDev = sinDev;
        }
    }

    // Constantes estáticas
    public static final int NUM_ASIENTOS = 90;
    public static final double CONDICION_DEV = 0.5;
}

public class Semana {
    private Date fechaInicio;
    private Date fechaFin;
    private List<List<Horario>> horarios;

    public Semana(Date fechaInicio) {
        this.fechaInicio = fechaInicio;
        this.fechaFin = new Date(fechaInicio.getTime() + Semana.DIAS * Semana.UN_DIA);
        this.horarios = new ArrayList<>();
    }

    // Constantes estáticas
    public static final int DIAS = 7;
    public static final long UN_DIA = 24 * 60 * 60 * 1000; // En milisegundos

    public void generarHorarios() {
        for (int i = 0; i < Semana.DIAS; i++) {
            Date dia = new Date(this.fechaInicio.getTime() + Semana.UN_DIA * i);
            List<Horario> horarioDia = new ArrayList<>();

            int diaSem = dia.getDay();
            for (String salida : salidas) {
                Tren tren = generarTren(dia, salida);
                Horario horario = new Horario(tren, salida);
                horarioDia.add(horario);
            }

            if (diaSem == Semana.SABADO) {
                Tren tren = generarTren(dia, "08:40");
                Horario horario = new Horario(tren, "08:40");
                horarioDia.add(0, horario);
            }

            if (diaSem == Semana.DOMINGO) {
                Tren tren = generarTren(dia, "20:10");
                Horario horario = new Horario(tren, "20:10");
                horarioDia.add(9, horario);
            }

            this.horarios.add(horarioDia);
        }
    }

    private Tren generarTren(Date dia, String hora) {
        final int LIMITE_OFERTA = Tren.NUM_ASIENTOS;
        int sinDev = generarAleatorio(0, LIMITE_OFERTA);
        String diaStr = String.format("%02d", dia.getDate());
        return new Tren(diaStr + hora.substring(0, 2) + hora.substring(3),
                sinDev,
                generarAleatorio(0, LIMITE_OFERTA - sinDev),
                generarAleatorio(0, LIMITE_OFERTA));
    }

    private int generarAleatorio(int inicio, int fin) {
        return inicio + (int) (Math.floor((fin - inicio + 1) * Math.random()));
    }
}

public class Horario {
    private Tren tren;
    private String hora;

    public Horario(Tren tren, String hora) {
        this.tren = tren;
        this.hora = hora;
    }
}

public class Main {
    public static void main(String[] args) {
        Date fechaInicio = new Date();
        Semana semana = new Semana(fechaInicio);
        semana.generarHorarios();

        // Acceder a los horarios generados
        List<List<Horario>> horarios = semana.getHorarios();

        // Ejemplo: Imprimir el ID del tren en el primer horario del primer día
        String idPrimerTren = horarios.get(0).get(0).getTren().getId();
        System.out.println("ID del tren: " + idPrimerTren);
    }
}
