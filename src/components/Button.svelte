<script lang="ts">
    type Props = {
        type?: "button";
        variant?: "primary" | "secondary";
        size?: "sm" | "md" | "lg";
        children: any;
    };

    let {
        type = "button",
        variant = "primary",
        size = "md",
        children,
    }: Props = $props();

    const variantClasses = {
        primary:
            "bg-green-800/20 backdrop-blur-xl border border-green-600 text-white hover:bg-green-800/40 focus:ring-green-500 hover:shadow-2xl shadow-green-500/80 hover:border-green-500",
        secondary:
            "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-400",
    };

    const sizeClasses = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
    };
</script>

<button
    {type}
    class={`
    inline-flex items-center justify-center font-medium rounded-md
    focus:outline-none focus:ring-2 focus:ring-offset-2
    transition-colors duration-200 cursor-pointer
    ${variantClasses[variant]}
    ${sizeClasses[size]}
  `}
>
    {@render children?.()}
</button>
