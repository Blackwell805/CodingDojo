#pragma checksum "/Users/austinblackwell/Documents/CodingDojo/cSharp/postDojo/petShelter/Views/Home/_OwnerListView.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "974f5b8fa51b2a4b84054f9ff39449c7af69fe2f"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home__OwnerListView), @"mvc.1.0.view", @"/Views/Home/_OwnerListView.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "/Users/austinblackwell/Documents/CodingDojo/cSharp/postDojo/petShelter/Views/_ViewImports.cshtml"
using petShelter;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "/Users/austinblackwell/Documents/CodingDojo/cSharp/postDojo/petShelter/Views/_ViewImports.cshtml"
using petShelter.Models;

#line default
#line hidden
#nullable disable
#nullable restore
#line 4 "/Users/austinblackwell/Documents/CodingDojo/cSharp/postDojo/petShelter/Views/_ViewImports.cshtml"
using Microsoft.AspNetCore.Http;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"974f5b8fa51b2a4b84054f9ff39449c7af69fe2f", @"/Views/Home/_OwnerListView.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"58a7c6c1c91859c0741522eda45ff655b79018b0", @"/Views/_ViewImports.cshtml")]
    public class Views_Home__OwnerListView : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<Owner>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral(@"
<div class=""text-center"">
    <div>
        <h3>Current Owners of Pets</h3>
        <a href=""Own"">Become a owner!</a>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
");
            WriteLiteral("            </tbody>\n        </table>\n    </div>\n</div>");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<Owner> Html { get; private set; }
    }
}
#pragma warning restore 1591