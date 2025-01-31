using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace JuegoMemoria
{
    public partial class _Default : Page
    {
        private const int GRID_SIZE = 16;
        private const int PAIRS_COUNT = GRID_SIZE / 2;
        private static readonly string[] listarCartas = { "🐶", "🐶", "🐱", "🐱", "🦊", "🦊", "🐻", "🐻", "🐸", "🐸", "🐼", "🐼", "🐷", "🐷", "🐵", "🐵" };


        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                InicializarJuego();
            }
        }
        private void InicializarJuego()
        {
            var cards = GenerarTarjetas();
            ViewState["Cards"] = cards;
            rptJuegoMemoria.DataSource = cards;
            rptJuegoMemoria.DataBind();
        }

        private List<string> GenerarTarjetas()
        {
            // Generar pares de símbolos
            //var symbols = new List<string>(listarCartas);

            var symbols = new List<string>();
            for (int i = 1; i <= PAIRS_COUNT; i++)
            {
                symbols.Add(i.ToString());
                symbols.Add(i.ToString());
            }

            // Barajar las cartas
            var rnd = new Random();
            return symbols.OrderBy(x => rnd.Next()).ToList();
        }

        protected void btnReiniciar_Click(object sender, EventArgs e)
        {
            InicializarJuego();
            //ScriptManager.RegisterStartupScript(this, GetType(), "reiniciarJuego", "fn_reiniciarJuego();", true);
        }


    }
}