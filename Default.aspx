<%@ Page Title="Juego de Memoria" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="JuegoMemoria._Default" %>

<%--<asp:Content ID="HeadContent" ContentPlaceHolderID="HeadContent" runat="server">
  
</asp:Content>--%>

<asp:Content ID="MainContent" ContentPlaceHolderID="MainContent" runat="server">
    <div class="juego-container">
        <h1>Juego de Memoria</h1>
        <asp:Button ID="btnReiniciar" runat="server" Text="Reiniciar Juego" OnClick="btnReiniciar_Click" CssClass="btn-reiniciar" />
        <asp:Panel ID="pnlGrid" runat="server" CssClass="card-grid">
            <asp:Repeater ID="rptJuegoMemoria" runat="server">
                <ItemTemplate>
                    <div class="card" data-card-id='<%# Container.DataItem %>' data-index='<%# Container.ItemIndex %>'>
                        <asp:Label ID="lblCardValue" runat="server" Text='<%# Container.DataItem %>' Style="display: none;" />
                    </div>
                </ItemTemplate>
            </asp:Repeater>
        </asp:Panel>
    </div>
</asp:Content>