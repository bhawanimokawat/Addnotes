function UpgradeCard() {
    return (
        <div
            className=" bg-light p-3 rounded mt-5 " style={{
                background: "var(--card)",
                color: "var(--text)",
            }}
        >
            <h6>

                Upgrade to PRO

            </h6>

            <small>

                Unlock all features

            </small>

            <button
                className="
        btn

        btn-primary

        w-100

        mt-3
        "
            >
                Upgrade
            </button>
        </div>
    );
}

export default UpgradeCard;