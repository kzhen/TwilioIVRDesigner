﻿using System.Web;
using System.Web.Optimization;

namespace TwilioIVRDesigner.Web
{
  public class BundleConfig
  {
    // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
    public static void RegisterBundles(BundleCollection bundles)
    {
      bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                  "~/Scripts/jquery-{version}.js"));

      bundles.Add(new ScriptBundle("~/bundles/jqueryui").Include(
                  "~/Scripts/jquery-ui-{version}.js"));

      bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                  "~/Scripts/jquery.unobtrusive*",
                  "~/Scripts/jquery.validate*"));

      bundles.Add(new ScriptBundle("~/bundles/jslibs").Include(
                  "~/Scripts/jsPlumb/jquery.jsPlumb-1.3.16-all.js",
                  "~/Scripts/knockout-2.2.1.js"));

      bundles.Add(new StyleBundle("~/bundles/bootstrap").Include(
                  "~/Content/bootstrap.css",
                  "~/Content/bootstrap-responsive.css"));

      bundles.Add(new ScriptBundle("~/Scripts/bootstrap.js"));

      // Use the development version of Modernizr to develop with and learn from. Then, when you're
      // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
      bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                  "~/Scripts/modernizr-*"));

      bundles.Add(new StyleBundle("~/Content/css").Include("~/Content/site.css"));
    }
  }
}