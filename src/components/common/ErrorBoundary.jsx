import { Component } from "react";
import { Link } from "react-router-dom";
import { Icons } from "./Icons";

/**
 * ErrorBoundary Component
 *
 * React Error Boundary untuk menangkap unhandled JavaScript errors di komponen tree.
 * Jika terjadi crash runtime, merender fallback UI alih-alih white screen of death.
 *
 * Lifecycle:
 * - componentDidCatch: log error ke console (bisa diperluas ke error tracking service)
 * - getDerivedStateFromError: update state untuk trigger fallback UI
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error ke console (production: kirim ke service seperti Sentry/LogRocket)
    console.error("ErrorBoundary caught an error:", error, errorInfo);

    this.setState({
      error,
      errorInfo,
    });
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      // Fallback UI inline (tidak me-render full ServerError page untuk menghindari nested routing error)
      return (
        <div className="relative h-screen overflow-hidden bg-base flex items-center justify-center">
          <div className="section-container relative z-10 px-4">
            <div className="text-center space-y-8 lg:space-y-10">
              {/* Mono status tag */}
              <p className="font-mono text-xs tracking-widest text-secondary-color dark:text-dark-text-faint uppercase mb-3 select-none">
                // STATUS : RUNTIME ERROR
              </p>

              {/* Large Error Icon */}
              <div className="relative flex justify-center">
                <div className="relative inline-flex items-center justify-center w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full bg-secondary/10 border-4 border-secondary/30">
                  <Icons.AlertTriangle className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-secondary" />
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 -z-10 blur-3xl opacity-20 bg-secondary" />
              </div>

              {/* Content */}
              <div className="space-y-6 lg:space-y-8 max-w-2xl mx-auto">
                {/* Heading */}
                <div className="space-y-3">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-color dark:text-primary-color">
                    Terjadi Kesalahan Aplikasi<span className="text-tertiary">.</span>
                  </h1>

                  <p className="text-base sm:text-lg lg:text-xl text-secondary-color leading-relaxed px-4">
                    Maaf, aplikasi mengalami kesalahan yang tidak terduga. Tim kami telah diberitahu. Silakan muat ulang
                    halaman atau kembali ke beranda.
                  </p>
                </div>

                {/* Primary Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                  {/* Primary CTA - Reload */}
                  <button
                    onClick={this.handleReload}
                    className="group inline-flex items-center gap-2.5 px-7 lg:px-9 py-3.5 lg:py-4 bg-primary text-dark font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25"
                  >
                    <Icons.RefreshCw className="w-5 h-5" />
                    <span>Muat Ulang Halaman</span>
                  </button>

                  {/* Secondary CTA - Home */}
                  <Link
                    to="/"
                    className="group inline-flex items-center gap-2.5 px-7 lg:px-9 py-3.5 lg:py-4 bg-surface border-2 border-line text-primary-color dark:text-primary-color font-semibold rounded-xl transition-all duration-300 hover:border-secondary/50 hover:-translate-y-0.5"
                  >
                    <Icons.Home className="w-5 h-5" />
                    <span>Kembali ke Beranda</span>
                  </Link>
                </div>

                {/* Collapsible Error Details (hanya tampil di development) */}
                {import.meta.env.DEV && this.state.error && (
                  <details className="mt-8 text-left max-w-3xl mx-auto">
                    <summary className="cursor-pointer text-sm font-mono text-secondary-color hover:text-primary transition px-4 py-2 bg-surface/50 rounded border border-line">
                      Detail Error (Development Only)
                    </summary>
                    
                    <div className="mt-3 p-4 bg-dark/90 rounded border border-line/30 text-xs font-mono text-left overflow-auto max-h-64">
                      <p className="text-tertiary font-bold mb-2">Error:</p>
                      <pre className="text-white/80 whitespace-pre-wrap wrap-break-words mb-4">
                        {this.state.error.toString()}
                      </pre>

                      {this.state.errorInfo && (
                        <>
                          <p className="text-tertiary font-bold mb-2">Component Stack:</p>
                          <pre className="text-white/60 whitespace-pre-wrap wrap-break-words text-[10px]">
                            {this.state.errorInfo.componentStack}
                          </pre>
                        </>
                      )}
                    </div>
                  </details>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
